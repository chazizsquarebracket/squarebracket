<?php

namespace Orange\Pages;

use Orange\Utilities;
use Orange\UserData;
use Orange\Database;

/**
 * Backend code for the users list page.
 *
 * @since Orange 1.0
 */
class UserList
{
    private \Orange\Database $database;
    private array $data;

    public function __construct(\Orange\Orange $orange)
    {
        $this->database = $orange->getDatabase();
        $this->data = $this->database->fetchArray($this->database->query("SELECT u.id, u.about, u.title, (SELECT COUNT(*) FROM videos WHERE author = u.id) AS s_num, (SELECT COUNT(*) FROM journals WHERE author = u.id) AS j_num FROM users u ORDER BY u.lastview DESC"));
    }

    public function getData()
    {
        $usersData = [];
        foreach ($this->data as $user)
        {
            $user_banned = $this->database->fetch("SELECT * FROM bans WHERE userid = ?", [$user["id"]]);
            if (!$user_banned) {
                $userData = new UserData($this->database, $user["id"]);
                $usersData[] =
                    [
                        "id" => $user["id"],
                        "info" => $userData->getUserArray(),
                        "submissions" => $user["s_num"],
                        "journals" => $user["j_num"],
                        "about" => $user["about"],
                    ];
            }
        }

        $data = [
            "users" => $usersData,
            "total" => count($usersData),
        ];

        return($data);
    }
}