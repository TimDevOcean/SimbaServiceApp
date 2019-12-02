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
$subject = "To Management"; //Write whatever.
$message = "Customer Name: " . $name . "\n\n" .
"Email: " . $from . "\n\n" .
"Phone Number: " . $phone . "\n\n" .
"Message: " . $_POST['message'];

$headers = "From:" . $from;
mail($to,$subject,$message,$headers);
echo "<script type='text/javascript'>

    alert('Thank you. Message sent successfully. We will get back to you shortly.');
    location.replace('http://simbaserviceapp.com/#dashboard');

</script>"; //redirects the user to another page if the mail was send succesfully
} else {
echo " <script type='text/javascript'>

    alert('Error, please try again.');
    location.replace('http://simbaserviceapp.com/#contact-page');

</script> "; //if it was not send succesfully it redirects to the contact page again
exit(0);
}
?>
</body>
</html>
