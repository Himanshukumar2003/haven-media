<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $services = $_POST['services'];

    $to = "your-email@example.com";
    $subject = "New Enrollment Form Submission";
    $message = "
        First Name: $firstName\n
        Last Name: $lastName\n
        Email: $email\n
        Phone: $phone\n
        Website: $website\n
        Services: $services\n
    ";
    $headers = "From: noreply@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Form submitted successfully.";
    } else {
        echo "Error submitting the form.";
    }
} else {
    echo "Invalid request method.";
}
?>
