(function(){var l,m=this;function n(a){a=a.split(".");for(var b=m,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function aa(){}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function q(a){return"string"==typeof a}function ba(a,b,c){return a.call.apply(a.bind,arguments)}function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return r.apply(null,arguments)}function t(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return r.apply(null,c)}return r(this,a)};var da=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function u(a,b){return a<b?-1:a>b?1:0};var w=Array.prototype,x=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},y=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ea=w.filter?function(a,b,c){return w.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?
a.split(""):a,k=0;k<d;k++)if(k in g){var h=g[k];b.call(c,h,k,a)&&(e[f++]=h)}return e};function fa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e=d,f=p(e);if("array"==f||"object"==f&&"number"==typeof e.length){e=a.length||0;f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}};function z(){this.m=this.m;this.C=this.C}z.prototype.m=!1;function A(){z.call(this);this.o=1;this.l=[];this.h=0;this.c=[];this.f={}}(function(){function a(){}a.prototype=z.prototype;A.c=z.prototype;A.prototype=new a;A.base=function(a,c,d){for(var e=Array(arguments.length-2),f=2;f<arguments.length;f++)e[f-2]=arguments[f];return z.prototype[c].apply(a,e)}})();A.prototype.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.o;this.c[e]=a;this.c[e+1]=b;this.c[e+2]=c;this.o=e+3;d.push(e);return e};
A.prototype.j=function(a){if(0!=this.h)return this.l.push(a),!1;var b=this.c[a];if(b){var c=this.f[b];if(c){var d=x(c,a);0<=d&&w.splice.call(c,d,1)}delete this.c[a];delete this.c[a+1];delete this.c[a+2]}return!!b};
A.prototype.B=function(a,b){var c=this.f[a];if(c){this.h++;for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];e=0;for(f=c.length;e<f;e++){var g=c[e];this.c[g+1].apply(this.c[g+2],d)}this.h--;if(0<this.l.length&&0==this.h)for(;c=this.l.pop();)this.j(c);return 0!=e}return!1};A.prototype.clear=function(a){if(a){var b=this.f[a];b&&(y(b,this.j,this),delete this.f[a])}else this.c.length=0,this.f={}};var B=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",B);t("yt.tokens_",window.yt&&window.yt.tokens_||{});t("yt.msgs_",window.yt&&window.yt.msgs_||{});function ga(a){var b=arguments;if(1<b.length){var c=b[0];B[c]=b[1]}else for(c in b=b[0],b)B[c]=b[c]}function C(a){return a in B?B[a]:void 0}function ha(a,b){"function"==p(a)&&(a=D(a));return window.setTimeout(a,b)}
function D(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw ia(b),b;}}:a}function ia(a){var b=n("yt.www.errors.log");b?b(a,void 0):(b=C("ERRORS")||[],b.push([a,void 0]),ga("ERRORS",b))};var ka=n("yt.pubsub.instance_")||new A;A.prototype.subscribe=A.prototype.subscribe;A.prototype.unsubscribeByKey=A.prototype.j;A.prototype.publish=A.prototype.B;A.prototype.clear=A.prototype.clear;t("yt.pubsub.instance_",ka);var E=n("yt.pubsub.subscribedKeys_")||{};t("yt.pubsub.subscribedKeys_",E);var F=n("yt.pubsub.topicToKeys_")||{};t("yt.pubsub.topicToKeys_",F);var la=n("yt.pubsub.isSynchronous_")||{};t("yt.pubsub.isSynchronous_",la);var G=n("yt.pubsub.skipSubId_")||null;
t("yt.pubsub.skipSubId_",G);function H(a,b){var c=n("yt.pubsub.instance_");if(c){var d=c.subscribe(a,function(){if(!G||G!=d){var c=arguments,f=function(){E[d]&&b.apply(window,c)};try{la[a]?f():ha(f,0)}catch(g){ia(g)}}},void 0);E[d]=!0;F[a]||(F[a]=[]);F[a].push(d);return d}return 0};function ma(a){if(a.classList)return a.classList;a=a.className;return q(a)&&a.match(/\S+/g)||[]}function K(a,b){var c;a.classList?c=a.classList.contains(b):(c=ma(a),c=0<=x(c,b));return c}function na(a){a.classList?a.classList.add("loading"):K(a,"loading")||(a.className+=0<a.className.length?" loading":"loading")}function oa(a){a.classList?a.classList.remove("loading"):K(a,"loading")&&(a.className=ea(ma(a),function(a){return"loading"!=a}).join(" "))};function pa(a){var b=L,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}var qa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ra(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<qa.length;f++)c=qa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function sa(a){var b=arguments.length;if(1==b&&"array"==p(arguments[0]))return sa.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};sa("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function ta(){this.f="";this.c=null}function M(a,b){var c=new ta;c.f=a;c.c=b;return c}M("<!DOCTYPE html>",0);M("",0);function N(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};function ua(a,b){this.width=a;this.height=b};var O;a:{var va=m.navigator;if(va){var wa=va.userAgent;if(wa){O=wa;break a}}O=""};function P(){return-1!=O.indexOf("Edge")};var xa=-1!=O.indexOf("Opera")||-1!=O.indexOf("OPR"),Q=-1!=O.indexOf("Edge")||-1!=O.indexOf("Trident")||-1!=O.indexOf("MSIE"),R=-1!=O.indexOf("Gecko")&&!(-1!=O.toLowerCase().indexOf("webkit")&&!P())&&!(-1!=O.indexOf("Trident")||-1!=O.indexOf("MSIE"))&&!P(),ya=-1!=O.toLowerCase().indexOf("webkit")&&!P();function za(){var a=O;if(R)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Q&&P())return/Edge\/([\d\.]+)/.exec(a);if(Q)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ya)return/WebKit\/(\S+)/.exec(a)}
function Aa(){var a=m.document;return a?a.documentMode:void 0}var Ba=function(){if(xa&&m.opera){var a=m.opera.version;return"function"==p(a)?a():a}var a="",b=za();b&&(a=b?b[1]:"");return Q&&!P()&&(b=Aa(),b>parseFloat(a))?String(b):a}(),Ca={};
function S(a){var b;if(!(b=Ca[a])){b=0;for(var c=da(String(Ba)).split("."),d=da(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",h=RegExp("(\\d*)(\\D*)","g"),v=RegExp("(\\d*)(\\D*)","g");do{var I=h.exec(g)||["","",""],J=v.exec(k)||["","",""];if(0==I[0].length&&0==J[0].length)break;b=u(0==I[1].length?0:parseInt(I[1],10),0==J[1].length?0:parseInt(J[1],10))||u(0==I[2].length,0==J[2].length)||u(I[2],J[2])}while(0==b)}b=Ca[a]=0<=b}return b}
var Da=m.document,Ea=Aa(),Fa=!Da||!Q||!Ea&&P()?void 0:Ea||("CSS1Compat"==Da.compatMode?parseInt(Ba,10):5);var Ga;if(!(Ga=!R&&!Q)){var Ha;if(Ha=Q)Ha=Q&&(P()||9<=Fa);Ga=Ha}Ga||R&&S("1.9.1");Q&&S("9");function T(a){var b=document;return q(a)?b.getElementById(a):a}function Ia(){var a=document;return a.querySelectorAll&&a.querySelector?a.querySelectorAll(".scrolldetect"):Ja("*","scrolldetect",void 0)}function Ka(a){var b=document,c=null;b.getElementsByClassName?c=b.getElementsByClassName(a)[0]:b.querySelectorAll&&b.querySelector?c=b.querySelector("."+a):c=Ja("*",a,void 0)[0];return c||null}
function Ja(a,b,c){var d=document;c=c||d;var e=a&&"*"!=a?a.toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(e||b))return c.querySelectorAll(e+(b?"."+b:""));if(b&&c.getElementsByClassName){a=c.getElementsByClassName(b);if(e){c={};for(var f=d=0,g;g=a[f];f++)e==g.nodeName&&(c[d++]=g);c.length=d;return c}return a}a=c.getElementsByTagName(e||"*");if(b){c={};for(f=d=0;g=a[f];f++){var e=g.className,k;if(k="function"==typeof e.split)k=0<=x(e.split(/\s+/),b);k&&(c[d++]=g)}c.length=d;return c}return a}
function La(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null};function Ma(a,b){a&&(a.dataset?a.dataset[Na("continuation_token")]=b:a.setAttribute("data-continuation_token",b))}function U(a,b){return a?a.dataset?a.dataset[Na(b)]:a.getAttribute("data-"+b):null}var Oa={};function Na(a){return Oa[a]||(Oa[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};var Pa=n("yt.dom.getNextId_");if(!Pa){Pa=function(){return++Qa};t("yt.dom.getNextId_",Pa);var Qa=0}
function Ra(a){a=a.replace(/^[\s\xa0]+/,"");var b=String(a.substr(0,3)).toLowerCase();if(0==("<tr"<b?-1:"<tr"==b?0:1)){var b="<table><tbody>"+a+"</tbody></table>",c=document;a=c.createElement("DIV");Q?(a.innerHTML="<br>"+b,a.removeChild(a.firstChild)):a.innerHTML=b;if(1==a.childNodes.length)a=a.removeChild(a.firstChild);else{for(b=c.createDocumentFragment();a.firstChild;)b.appendChild(a.firstChild);a=b}a=Ja("tr",null,a);return a.length?a[0]:null}b=document.createElement("div");b.innerHTML=a;if(void 0!=
b.firstElementChild)a=b.firstElementChild;else for(a=b.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a};function Sa(a){if(a=a||window.event){this.event=a;for(var b in a)b in Ta||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==
this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;"MozMousePixelScroll"==this.type?(this.wheelDeltaX=a.axis==a.HORIZONTAL_AXIS?a.detail:0,this.wheelDeltaY=a.axis==a.HORIZONTAL_AXIS?0:a.detail):window.opera?(this.wheelDeltaX=0,this.wheelDeltaY=a.detail):0==a.wheelDelta%120?"WebkitTransform"in document.documentElement.style?window.chrome&&0==navigator.platform.indexOf("Mac")?(this.wheelDeltaX=a.wheelDeltaX/-30,this.wheelDeltaY=a.wheelDeltaY/-30):(this.wheelDeltaX=
a.wheelDeltaX/-1.2,this.wheelDeltaY=a.wheelDeltaY/-1.2):(this.wheelDeltaX=0,this.wheelDeltaY=a.wheelDelta/-1.6):(this.wheelDeltaX=a.wheelDeltaX/-3,this.wheelDeltaY=a.wheelDeltaY/-3)}}l=Sa.prototype;l.type="";l.target=null;l.relatedTarget=null;l.currentTarget=null;l.keyCode=0;l.charCode=0;l.altKey=!1;l.ctrlKey=!1;l.shiftKey=!1;l.clientX=0;l.clientY=0;l.wheelDeltaX=0;l.wheelDeltaY=0;
var Ta={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1};var L=n("yt.events.listeners_")||{};t("yt.events.listeners_",L);var Ua=n("yt.events.counter_")||{count:0};t("yt.events.counter_",Ua);function Va(a,b){return pa(function(c){return c[0]==a&&"click"==c[1]&&c[2]==b&&0==c[4]})}
function Wa(a,b){if(!a||!a.addEventListener&&!a.attachEvent)return"";var c=Va(a,b);if(c)return c;var c=++Ua.count+"",d;d=function(c){c=new Sa(c);c.currentTarget=a;return b.call(a,c)};d=D(d);L[c]=[a,"click",b,d,!1];a.addEventListener?a.addEventListener("click",d,!1):a.attachEvent("onclick",d);return c}function Xa(){return Ya(function(a){return K(a,"channel-load-more")})}
function Ya(a){var b=Za,c=T("channel-switcher-content")||document;return Wa(c,function(d){var e=La(d.target,function(b){return b===c||a(b)});e&&e!==c&&!e.disabled&&(d.currentTarget=e,b.call(e,d))})}function $a(){var a=ab;a&&("string"==typeof a&&(a=[a]),y(a,function(a){if(a in L){var c=L[a],d=c[0],e=c[1],f=c[3],c=c[4];d.removeEventListener?d.removeEventListener(e,f,c):d.detachEvent&&d.detachEvent("on"+e,f);delete L[a]}}))};function bb(a){return eval("("+a+")")};var cb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function V(a){if(db){db=!1;var b=m.location;if(b){var c=b.href;if(c&&(c=eb(c))&&c!=b.hostname)throw db=!0,Error();}}return a.match(cb)}var db=ya;function eb(a){return(a=V(a)[3]||null)?decodeURI(a):a}function fb(a,b,c){if("array"==p(b))for(var d=0;d<b.length;d++)fb(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function gb(a,b){for(var c in b)fb(c,b[c],a);return a};function ib(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==p(b[f])?fa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}function jb(a){a=gb([],a);a[0]="";return a.join("")}var W=eb;
function kb(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=ib(d[1]||""),e;for(e in b)d[e]=b[e];e=gb([a],d);if(e[1]){var d=e[0],f=d.indexOf("#");0<=f&&(e.push(d.substr(f)),e[0]=d=d.substr(0,f));f=d.indexOf("?");0>f?e[1]="?":f==d.length-1&&(e[1]=void 0)}return e.join("")+c};var X=null;"undefined"!=typeof XMLHttpRequest?X=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(X=function(){return new ActiveXObject("Microsoft.XMLHTTP")});function lb(a,b,c,d,e,f,g){function k(){4==(h&&"readyState"in h?h.readyState:0)&&b&&D(b)(h)}var h=X&&X();if(!("open"in h))return null;"onloadend"in h?h.addEventListener("loadend",k,!1):h.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";h.open(c,a,!0);f&&(h.responseType=f);g&&(h.withCredentials=!0);f="POST"==c;if(e=nb(a,e))for(var v in e)h.setRequestHeader(v,e[v]),"content-type"==v.toLowerCase()&&(f=!1);f&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(d);return h}
function nb(a,b){b=b||{};for(var c in ob){var d=C(ob[c]),e;if(e=d){e=a;var f=void 0;f=window.location.href;var g=V(e)[1]||null,k=W(e);g&&k?(e=V(e),f=V(f),e=e[3]==f[3]&&e[1]==f[1]&&e[4]==f[4]):e=k?W(f)==k&&(Number(V(f)[4]||null)||null)==(Number(V(e)[4]||null)||null):!0;e||(e=c,f=C("CORS_HEADER_WHITELIST")||{},e=(g=W(a))?(f=f[g])?0<=x(f,e):!1:!0)}e&&(b[c]=d)}return b}
function pb(a,b){var c=C("XSRF_FIELD_NAME"),d;b.headers&&(d=b.headers["Content-Type"]);return!b.I&&(!W(a)||W(a)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.A&&b.A[c])}
function qb(a){var b="/channel_switcher_ajax",c=a.format||"JSON";a.J&&(b=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+b);var d=C("XSRF_FIELD_NAME"),e=C("XSRF_TOKEN"),f=a.G;f&&(f[d]&&delete f[d],b=kb(b,f||{}));var g=a.K||"",f=a.A;pb(b,a)&&(f||(f={}),f[d]=e);f&&q(g)&&(d=ib(g),ra(d,f),g=jb(d));var k=!1,h,v=lb(b,function(b){if(!k){k=!0;h&&window.clearTimeout(h);var d;a:switch(b&&"status"in b?b.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:d=
!0;break a;default:d=!1}var e=null;if(d||400<=b.status&&500>b.status)e=rb(c,b,a.H);if(d)a:{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=a.context||m;d?a.v&&a.v.call(f,b,e):a.onError&&a.onError.call(f,b,e);a.D&&a.D.call(f,b,e)}},a.method,g,a.headers,a.responseType,a.withCredentials);a.F&&0<a.timeout&&(h=ha(function(){k||(k=!0,v.abort(),window.clearTimeout(h),a.F.call(a.context||m,v))},a.timeout))}
function rb(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=bb(a));break;case "XML":if(b=(b=b.responseXML)?sb(b):null)d={},y(b.getElementsByTagName("*"),function(a){d[a.tagName]=tb(a)})}c&&ub(d);return d}function ub(a){var b=typeof a;if("object"==b&&null!=a||"function"==b)for(var c in a)if((b="html_content"==c)||(b=c.length-5,b=0<=b&&c.indexOf("_html",b)==b),b){var b=c,d;d=M(a[c],null);a[b]=d}else ub(a[c])}
function sb(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}function tb(a){var b="";y(a.childNodes,function(a){b+=a.nodeValue});return b}var ob={"X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};Q&&S(12);var vb=n("yt.prefs.UserPrefs.prefs_")||{};t("yt.prefs.UserPrefs.prefs_",vb);var wb=null,xb=null;var yb=n("yt.net.ping.workerUrl_")||null;t("yt.net.ping.workerUrl_",yb);var zb=n("yt.pubsub2.instance_")||new A;A.prototype.subscribe=A.prototype.subscribe;A.prototype.unsubscribeByKey=A.prototype.j;A.prototype.publish=A.prototype.B;A.prototype.clear=A.prototype.clear;t("yt.pubsub2.instance_",zb);var Ab=n("yt.pubsub2.subscribedKeys_")||{};t("yt.pubsub2.subscribedKeys_",Ab);var Bb=n("yt.pubsub2.topicToKeys_")||{};t("yt.pubsub2.topicToKeys_",Bb);var Cb=n("yt.pubsub2.isAsync_")||{};t("yt.pubsub2.isAsync_",Cb);t("yt.pubsub2.skipSubKey_",null);var Y=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};r(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||aa,Y);var Db=0,Z=[],Eb={},Fb=[];function Gb(){var a;wb||(a=window.document,a="CSS1Compat"==a.compatMode?a.documentElement:a.body,wb=new ua(a.clientWidth,a.clientHeight));a=wb;if(!xb){var b=document,c=b.c?b.c:ya||"CSS1Compat"!=b.compatMode?b.body||b.documentElement:b.documentElement,b=b.parentWindow||b.defaultView;xb=Q&&S("10")&&b.pageYOffset!=c.scrollTop?new N(c.scrollLeft,c.scrollTop):new N(b.pageXOffset||c.scrollLeft,b.pageYOffset||c.scrollTop)}return xb.y+a.height}
function Hb(){var a=Gb(),b=Db;if(!b||a>=b)Ib(),Db=a}function Ib(){var a=Gb();Jb(function(b,c){var d=parseInt(U(b,"scrolldetect-offset"),10)||0,e;if(e=T(b)){var f=0,g=0;if(e.offsetParent){do f+=e.offsetLeft,g+=e.offsetTop;while(e=e.offsetParent)}e=new N(f,g)}else e=null;a>=e.y-d&&(d=Eb[c])&&-1==x(Fb,b)&&(d.call(m,b),Fb.push(b))})}function Jb(a){var b=Ia();b.length&&y(b,function(b){var d=U(b,"scrolldetect-callback");d&&a.call(m,b,d)})};var ab=[];
function Za(){var a=Ka("channel-load-more-container");na(a);var b=U(a,"continuation_token"),c=U(a,"search");qb({G:{action_load_more_channels:1,continuation_token:b,search:c},format:"JSON",v:function(b,c){oa(a);var f=c.channels_html_list,g=c.unmerged_pages_html_list,k=c.cm_pages_html_list;if(f){var h=T("ytcc-existing-channels");y(f,function(a){a=Ra(a);h.appendChild(a)})}g&&(h=T("ytcc-new-channels"),y(g,function(a){a=Ra(a);h.appendChild(a)}));k&&(h=T("ytcc-cm-channels"),y(k,function(a){a=Ra(a);h.appendChild(a)}));
c.new_continuation_token?Ma(a,c.new_continuation_token):(a&&a.parentNode&&a.parentNode.removeChild(a),(f=Ka("channel-load-more-border"))&&f.parentNode&&f.parentNode.removeChild(f))},onError:function(){oa(a)}})};H("init",function(){ab.push(Xa());var a={"channel-load-more":Za};0==Z.length&&0==Z.length&&(Z.push(H("page-resize",Hb)),Z.push(H("page-scroll",Hb)));ra(Eb,a);Ib()});H("dispose",function(){$a()});})();