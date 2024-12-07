document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('enrollmentForm');
    const errorBanner = document.getElementById('errorBanner');
    const errorCountSpan = document.getElementById('errorCount');
    const seeErrorsButton = document.getElementById('seeErrors');

    // Format phone number as user types
    document.getElementById('phone').addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 3) {
                value = `(${value}`;
            } else if (value.length <= 6) {
                value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            } else {
                value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
            }
        }
        e.target.value = value;
    });

    // Validate form on submit
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let errors = 0;
        let firstError = null;

        // Reset all errors
        form.querySelectorAll('.error-message').forEach(msg => {
            msg.classList.remove('visible');
        });
        form.querySelectorAll('input, select').forEach(input => {
            input.classList.remove('error');
        });

        // Validate First Name
        const firstName = document.getElementById('firstName');
        if (!firstName.value.trim()) {
            showError(firstName, 'This field is required.');
            errors++;
            firstError = firstError || firstName;
        }

        // Validate Last Name
        const lastName = document.getElementById('lastName');
        if (!lastName.value.trim()) {
            showError(lastName, 'This field is required.');
            errors++;
            firstError = firstError || lastName;
        }

        // Validate Email
        const email = document.getElementById('email');
        if (!email.value.trim()) {
            showError(email, 'This field is required.');
            errors++;
            firstError = firstError || email;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            showError(email, 'Please enter a valid email address.');
            errors++;
            firstError = firstError || email;
        }

        // Validate Phone
        const phone = document.getElementById('phone');
        if (!phone.value.trim()) {
            showError(phone, 'This field is required.');
            errors++;
            firstError = firstError || phone;
        } else if (phone.value.replace(/\D/g, '').length !== 10) {
            showError(phone, 'Please enter a valid 10-digit phone number.');
            errors++;
            firstError = firstError || phone;
        }

        // Validate Website
        const website = document.getElementById('website');
        if (!website.value.trim()) {
            showError(website, 'This field is required.');
            errors++;
            firstError = firstError || website;
        } else {
            try {
                new URL(website.value.startsWith('http') ? website.value : `https://${website.value}`);
            } catch {
                showError(website, 'Please enter a valid website URL.');
                errors++;
                firstError = firstError || website;
            }
        }

        // Validate Services
        const services = document.getElementById('services');
        if (!services.value) {
            showError(services, 'Please select a service.');
            errors++;
            firstError = firstError || services;
        }

        // Update error banner
        if (errors > 0) {
            errorCountSpan.textContent = errors;
            errorBanner.classList.add('visible');
            firstError.focus();
        } else {
            errorBanner.classList.remove('visible');
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // Helper function to show error for an input
    function showError(input, message) {
        input.classList.add('error');
        const errorMessage = input.nextElementSibling;
        errorMessage.textContent = message;
        errorMessage.classList.add('visible');
    }

    // Scroll to first error when clicking "See Errors"
    seeErrorsButton.addEventListener('click', function () {
        const firstError = form.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstError.focus();
        }
    });
});
