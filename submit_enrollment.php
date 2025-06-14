<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Honeypot check (anti-spam)
    if (!empty($_POST['honeypot'])) {
        echo "Bot submission detected.";
        exit;
    }

    // Sanitize and validate fields
    $firstName = htmlspecialchars(trim($_POST['firstName']));
    $lastName = htmlspecialchars(trim($_POST['lastName']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone']));
    $countryCode = htmlspecialchars(trim($_POST['countryCode']));
    $website = filter_var(trim($_POST['website']), FILTER_SANITIZE_URL);
    $services = htmlspecialchars(trim($_POST['services']));
    $currentRevenue = htmlspecialchars(trim($_POST['currentRevenue']));
    $goalRevenue = htmlspecialchars(trim($_POST['goalRevenue']));

    // Email validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // Optional: Website URL validation
    if (!empty($website) && !filter_var($website, FILTER_VALIDATE_URL)) {
        echo "Invalid website URL.";
        exit;
    }

    // Construct message
    $to = "karan@havnmedia.com";
    $subject = "Havn Media | New Contact Inquiry";
    $message = "
New Brand Enrollment Inquiry:

First Name: $firstName
Last Name: $lastName
Email: $email
Phone: +$countryCode $phone
Website: $website
Services Interested: $services
Current Monthly Revenue: $currentRevenue
Goal Monthly Revenue: $goalRevenue
    ";

    $headers = "From: karan@havnmedia.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send mail and redirect
    if (mail($to, $subject, $message, $headers)) {
        header("Location: thank-you.html");
        exit();
    } else {
        echo "Email sending failed. Please try again later.";
    }

} else {
    echo "Invalid request method.";
}
?>