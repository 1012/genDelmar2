<?php

error_reporting(E_ALL);
ini_set('display_errors',1);

$lang="en";
$indexUrl = "";
$baseUrl = "";
// redirect from language menu

if (isset($_GET["l"])){
   // check for language redirect
   // uses the first querystring element no matter what is the name of the variable
   // to change to French do www.delmarcargo.com/?fr or www.delmarcargo.com/index.php?en
   $lang=$_GET["l"];
} else {
    // otherwise check to see if a lang was set in the cookie
	if(isset($_COOKIE['lang']))
	{
		$lang=$_COOKIE['lang'];
	} else 	{
	// if not use the language from the browser.
		$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);	
	}	
}

switch ($lang){
    case "fr":
        //echo "PAGE FR";
        $indexUrl ="fr/index.html";//include check session FR
		$baseUrl = "fr";
        break;
    case "sp":
        //echo "PAGE SP";
        $indexUrl = "sp/index.html";
		$baseUrl = "sp";
        break;
	case "pt":
        //echo "PAGE PT";
        $indexUrl = "pt/index.html";
		$baseUrl = "pt";
        break;	
    case "ch":
        //echo "PAGE EN";
        $indexUrl = "ch/index.html";
		$baseUrl = "ch";
        break;        
    default:
        //echo "PAGE EN - Setting Default";
        $indexUrl = "en/index.html";//include EN in all other cases of different lang detection
		$lang="en";
		$baseUrl = "en";
        break;
		}
	
setcookie("lang", $lang, time()+(60*60*24*30));

// set the base url
// determine protocol - needed if you run http and https
if(isset($_SERVER['HTTPS'])) { $protocol = 'https://'; }
else {$protocol = 'http://'; }

// set protocol and host
$root = $protocol . $_SERVER['HTTP_HOST'];

// $_SERVER['SCRIPT_NAME'] is /subdirs/index.php, basename($_SERVER['SCRIPT_NAME'] is index.php -> replace to get subdirs and append to root
$root .= str_replace(basename($_SERVER['SCRIPT_NAME']),'',$_SERVER['SCRIPT_NAME']);
$config['base_url'] = ($root . "corp/v4"); 


if (file_exists($indexUrl)) {
  include($indexUrl);
} else {
	$indexUrl = "en/index.html";//include EN in all other cases of different lang detection
	$lang="en";
	$baseUrl = "en";
    setcookie("lang", $lang, time()+(60*60*24*30));
	include($indexUrl);	
} 
	
?>