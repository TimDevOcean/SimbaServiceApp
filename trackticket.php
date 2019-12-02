<?php
$servername = "172.104.229.14";
$username = "helpdesk_vtig345";
$password = "nS(kpQ72!6";
$dbname = "helpdesk_vtig345";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if(isset($_REQUEST['submit_btn'])){

// check for blank input
if (trim($_POST["rtn"]) === "") {
    echo "<h4>Error: Empty Input</h4>";
}
else {
//------------------------
// fetch most ticket details from one database
$sql = "SELECT `servicereportsid`, `cf_1573`, `cf_1595`, `cf_1561`, `cf_1563`, `cf_1363`, `cf_1365`, `cf_1553`, `cf_1549`, `cf_1774`, `cf_1779`, `cf_1543`, `cf_1772` FROM `vtiger_servicereportscf` WHERE `cf_1275` = '". $_POST["rtn"] ."'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result);
//------------------------
//echo $row["cf_1543"];

//------------------------
// fetch modified time of the same ticket from a different database
// this db maintains 1 entry per modification. so from result set, select last row for 'last modified time'
// OR
// order by descending id column and select first one
$sql2 = "SELECT `changedon` FROM `vtiger_modtracker_basic` WHERE `crmid` = '". $row["servicereportsid"] ."' order by `id` desc";
$result2 = mysqli_query($conn, $sql2);
$row2 = mysqli_fetch_array($result2);

// convert UTC date to UTC+1(Africa/Lagos)
$utc_date = $row2["changedon"];
$date = date_create($utc_date, timezone_open("UTC"));
$tz=timezone_open("Africa/Lagos");
$new_date = date_timezone_set($date, $tz);
//------------------------

// check for invalid input
echo "<h4><strong>Your ticket status details are:</strong></h4>";
echo "<table style='margin: 30px 0 1.5em'>";
//while($row = mysqli_fetch_array($result))
//{
//$row = mysqli_fetch_array($result);
echo "<tr>";
echo "<th>Status</th>";
echo "<td>" . $row["cf_1363"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<th>Pending Reason</th>";
echo "<td>" . $row["cf_1365"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<th>Engineer Closure</th>";
echo "<td>" . $row["cf_1549"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<th>Cancellation Reason</th>";
echo "<td>" . $row["cf_1553"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<th>Final Ticket Type</th>";
echo "<td>" . $row["cf_1774"] . "</td>";
//echo "<td>" . $row["cf_1573"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<th>Verified Category</th>";
echo "<td>" . $row["cf_1779"] . "</td>";
//echo "<td>" . $row["cf_1595"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<th>Ticket Agent</th>";
echo "<td>" . $row["cf_1661"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<th>Last Modified (Africa/Lagos)</th>";
echo "<td>" . date_format($new_date,"Y-m-d H:i:s") . "</td>";
echo "</tr>";

echo "<tr>";
echo "<th>Contact First Name</th>";
echo "<td>" . $row["cf_1561"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<th>Contact Last Name</th>";
echo "<td>" . $row["cf_1563"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<th>Assigned Branch</th>";
echo "<td>" . $row["cf_1543"] . "</td>";
echo "</tr>";

echo "<tr>";
echo "<th>CCO Closure</th>";
echo "<td>" . $row["cf_1772"] . "</td>";
echo "</tr>";

//}
echo "</table>";
}

}

$conn->close();
