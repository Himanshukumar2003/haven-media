<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize input data
    $firstName = htmlspecialchars(trim($_POST['firstName']));
    $lastName = htmlspecialchars(trim($_POST['lastName']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $countryCode = htmlspecialchars(trim($_POST['countryCode'] ?? '')); // Default to empty if not set
    $phone = htmlspecialchars(trim($_POST['phone']));
    $website = filter_var(trim($_POST['website']), FILTER_SANITIZE_URL);
    $services = htmlspecialchars(trim($_POST['services']));

    // Combine country code with phone number
    $fullPhone = $countryCode . ' ' . $phone;

    // Validate the input fields
    $errors = [];

    if (empty($firstName)) {
        $errors[] = "First Name is required.";
    }

    if (empty($lastName)) {
        $errors[] = "Last Name is required.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }

    if (empty($phone) || !preg_match("/^[0-9]{10}$/", $phone)) {
        $errors[] = "Please enter a valid 10-digit phone number.";
    }

    if (!empty($countryCode) && !preg_match("/^\+\d{1,4}$/", $countryCode)) {
        $errors[] = "Invalid country code format. Use + followed by digits (e.g., +91).";
    }

    if (!filter_var($website, FILTER_VALIDATE_URL)) {
        $errors[] = "Please enter a valid website URL.";
    }

    if (empty($services)) {
        $errors[] = "Please select a service.";
    }

    if (!empty($errors)) {
        foreach ($errors as $error) {
            echo "<p>$error</p>";
        }
        exit;
    }

    // Proceed to send email
    $to = "karan@havnmedia.com";
    $subject = "Havn Media | New Contact Inquiry";
    $message = "
First Name: $firstName\n
Last Name: $lastName\n
Email: $email\n
Phone: $fullPhone\n
Website: $website\n
Services: $services\n
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