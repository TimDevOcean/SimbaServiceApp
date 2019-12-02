<html>
    <head>
        <link rel="stylesheet" href="css/jquery.mobile-1.4.5.css">
        <link rel="stylesheet" href="css/styles.css">
        <script src="js/jquery.js"></script>
    </head>
        <body>
<?php
if(isset($_POST['submit'])){
$to = "info@simbaserviceapp.com";
$from = $_POST['useremail'];
$name = $_POST['username'];
$phone = $_POST['usernumber'];
$subject = "Warranty Registration"; //Write whatever you want here
$message = "Customer Name: " . $name . "\n\n" .
"Email: " . $from . "\n\n" .
"Phone Number: " . $phone . "\n\n" .
"Brand: " . $_POST['brand'] . "\n\n" .
"Product Purchased: " . $_POST['product'] . "\n\n" .
"Model: " . $_POST['model'] . "\n\n" .
"Capacity: " . $_POST['capacity'] . "\n\n" .
"Date of Purchase: " . $_POST['date'] . "\n\n" .
"Product Serial Number: " . $_POST['serial'];

$headers = "From:" . $from;
mail($to,$subject,$message,$headers);
echo "<script type='text/javascript'>

    alert('Thank you. Registration succesful. We will get back to you shortly.');
    location.replace('http://simbaserviceapp.com/#dashboard');

</script>"; //redirects the user to another page if the mail was sent succesfully
} else {
echo " <script type='text/javascript'>

    alert('Error, please try again');
    location.replace('http://simbaserviceapp.com/#pr-page');

</script> "; //Not sent succesfully.
exit(0);
}
?>
</body>
</html>
