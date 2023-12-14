<?php

namespace Orange\Pages;

use Orange\MiscFunctions;
use Orange\User;
use Orange\OrangeException;
use Orange\CommentLocation;
use Orange\Comments;
use Orange\Database;
use Orange\SubmissionData;

/**
 * Backend code for the submission view (watch) page.
 *
 * @since 0.1.0
 */
class Submission
{
    private \Orange\Database $database;
    private \Orange\SubmissionData $submission;
    private mixed $data;
    private Comments $comments;
    private array $ratings;
    private mixed $favorites;
    private User $author;
    private mixed $views;
    private array $bools;
    private array $recommended;
    private mixed $followers;
    private mixed $followed;

    /**
     * @throws OrangeException
     */
    public function __construct(\Orange\Orange $betty, $id)
    {
        global $auth; // honestly i feel like the whole "getBettyDatabase" shit is so redudant -chaziz 8/23/2023

        $this->database = $betty->getBettyDatabase();
        $this->submission = new \Orange\SubmissionData($this->database, $id);

        // check if the submission has been taken down.
        $takedown = $this->submission->getTakedown();
        if ($takedown) {
            // don't load if it has been taken down.
            $betty->Notification("This submission has been taken down. (" . $takedown["reason"] . ")", "/");
        }

        $this->data = $this->submission->getData();
        if (!$this->data) {
            $betty->Notification("This submission does not exist.", "/");
        }
        $this->comments = new Comments($this->database, CommentLocation::Submission, $id);
        $this->author = new User($this->database, $this->data["author"]);
        if ($this->author->isUserBanned()) {
            $betty->Notification("This submission's author is banned.", "/");
        }

        $this->followers = $this->database->fetch("SELECT COUNT(user) FROM subscriptions WHERE id = ?", [$this->data["author"]])['COUNT(user)'];
        $this->followed = MiscFunctions::IsFollowingUser($this->data["author"]);

        $this->ratings = [
            "1" => $this->database->result("SELECT COUNT(rating) FROM rating WHERE video=? AND rating=1", [$this->data["id"]]),
            "2" => $this->database->result("SELECT COUNT(rating) FROM rating WHERE video=? AND rating=2", [$this->data["id"]]),
            "3" => $this->database->result("SELECT COUNT(rating) FROM rating WHERE video=? AND rating=3", [$this->data["id"]]),
            "4" => $this->database->result("SELECT COUNT(rating) FROM rating WHERE video=? AND rating=4", [$this->data["id"]]),
            "5" => $this->database->result("SELECT COUNT(rating) FROM rating WHERE video=? AND rating=5", [$this->data["id"]]),
        ];
        $this->favorites = $this->database->result("SELECT COUNT(video_id) FROM favorites WHERE video_id=?", [$id]);

        $this->views = $this->database->fetch("SELECT COUNT(video_id) FROM views WHERE video_id=?", [$this->data["video_id"]])['COUNT(video_id)'];

        $this->bools = $this->submission->bitmaskToArray();

        if ($this->bools["block_guests"] && !$auth->isUserLoggedIn())
        {
            $betty->Notification("This submission's author has blocked guest access.", "/login.php");
        }

        if (MiscFunctions::RatingToNumber($this->data["rating"]) > MiscFunctions::RatingToNumber($auth->getUserData()["comfortable_rating"])) {
            $betty->Notification("This submission is not suitable according to your settings.", "/");
        }

        $ip = MiscFunctions::get_ip_address();
        if ($this->database->fetch("SELECT COUNT(video_id) FROM views WHERE video_id=? AND user=?", [$id, crypt($ip, $ip)])['COUNT(video_id)'] < 1) {
            $this->database->query("INSERT INTO views (video_id, user) VALUES (?,?)",
                [$id, crypt($ip, $ip)]);
        }

        $whereRatings = MiscFunctions::whereRatings();
        $this->recommended = $this->database->fetchArray($this->database->query("SELECT v.* FROM videos v WHERE v.video_id NOT IN (SELECT submission FROM takedowns) AND $whereRatings AND v.author = ? ORDER BY RAND() LIMIT 24", [$this->data["author"]]));
    }

    /**
     * Returns an array containing the submission for the openSB frontend.
     *
     * @since 0.1.0
     *
     * @return array
     */
    public function getSubmission(): array
    {
        global $auth;
        if ($auth->getUserID() == $this->data["author"]) { $owner = true; } else { $owner = false; }

        return [
            "is_owner" => $owner,
            "int_id" => $this->data["id"],
            "id" => $this->data["video_id"],
            "title" => $this->data["title"],
            "description" => $this->data["description"],
            "published" => $this->data["time"],
            "original_site" => $this->data["original_site"],
            "published_originally" => $this->data["original_time"],
            "type" => $this->data["post_type"],
            "file" => MiscFunctions::getSubmissionFile($this->data),
            "author" => [
                "id" => $this->data["author"],
                "info" => $this->author->getUserArray(),
                "followers" => $this->followers,
                "following" => $this->followed,
            ],
            "interactions" => [
                "views" => $this->views,
                "ratings" => MiscFunctions::calculateRatings($this->ratings),
                "favorites" => $this->favorites,
            ],
            "comments" => $this->comments->getComments(),
            "bools" => $this->bools,
            "rating" => $this->data["rating"],
            "recommended" => MiscFunctions::makeSubmissionArray($this->database,$this->recommended),
        ];
    }
}