<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = htmlspecialchars(trim($_POST['firstName']));
    $lastName = htmlspecialchars(trim($_POST['lastName']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone']));
    $website = filter_var(trim($_POST['website']), FILTER_SANITIZE_URL);
    $services = htmlspecialchars(trim($_POST['services']));
    $currentRevenue = htmlspecialchars(trim($_POST['currentRevenue']));
    $goalRevenue = htmlspecialchars(trim($_POST['goalRevenue']));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email.";
        exit;
    }

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

    $headers = "From: karan@havnmedia.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        header("Location: thank-you.html");
        exit();
    } else {
        echo "Email sending failed.";
    }
} else {
    echo "Invalid request.";
}
?>
