<?php

/* Database Connection Infromation */
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'family_password');
define('DB_DATABASE', 'FamilyDB');

/* End of database connection info */
function get_mysql_connection() {
    // attempt database connection
    $db = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
    //$db = mysqli_connect($db_host, $db_user, $db_pswd, $db_name);
    if (mysqli_connect_errno()) {
        die('Cannot connect to database');
    }
    // attempt selecting the database
    if (!mysqli_select_db($db, DB_DATABASE)) {
        die('Cannot select ' . DB_DATABASE);
    }
    return $db;
}

$conn = get_mysql_connection();
?> 
