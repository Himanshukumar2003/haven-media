<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $services = $_POST['services'];
    $currentRevenue = $_POST['currentRevenue'];
    $goalRevenue = $_POST['goalRevenue'];

    $to = "karan@havnmedia.com";
    $subject = "Havn Media | New Contact Inquiry";
    $message = "
        First Name: $firstName\n
        Last Name: $lastName\n
        Email: $email\n
        Phone: $phone\n
        Website: $website\n
        Services: $services\n
        Current Revenue: $currentRevenue\n
        Goal Revenue: $goalRevenue\n
    ";
    $headers = "From: karan@havnmedia.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Form submitted successfully.";
    } else {
        echo "Error submitting the form.";
    }
} else {
    echo "Invalid request method.";
}
?>
