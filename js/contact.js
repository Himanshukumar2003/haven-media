document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('enrollmentForm');
    const errorBanner = document.getElementById('errorBanner');
    const errorCountSpan = document.getElementById('errorCount');
    const seeErrorsButton = document.getElementById('seeErrors');

    // Format phone number
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

    // Form validation
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let errors = 0;
        let firstError = null;

        // Reset
        form.querySelectorAll('.error-message').forEach(msg => msg.classList.remove('visible'));
        form.querySelectorAll('input, select').forEach(input => input.classList.remove('error'));

        const validateInput = (id, validator, message) => {
            const input = document.getElementById(id);
            if (!validator(input.value.trim())) {
                input.classList.add('error');
                const errorMessage = input.nextElementSibling;
                errorMessage.textContent = message;
                errorMessage.classList.add('visible');
                errors++;
                firstError = firstError || input;
            }
        };

        validateInput('firstName', val => val !== '', 'This field is required.');
        validateInput('lastName', val => val !== '', 'This field is required.');
        validateInput('email', val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), 'Please enter a valid email address.');
        validateInput('phone', val => val.replace(/\D/g, '').length === 10, 'Please enter a valid phone number.');
        validateInput('website', val => {
            try {
                new URL(val.startsWith('http') ? val : `https://${val}`);
                return true;
            } catch {
                return false;
            }
        }, 'Please enter a valid website URL.');
        validateInput('services', val => val !== '', 'Please select a service.');
        validateInput('currentRevenue', val => val !== '', 'Please enter your current monthly revenue.');
        validateInput('goalRevenue', val => val !== '', 'Please enter your goal revenue and timeline.');

        if (errors > 0) {
            errorCountSpan.textContent = errors;
            errorBanner.classList.add('visible');
            firstError.focus();
        } else {
            errorBanner.classList.remove('visible');

            const formData = new FormData(form);
            fetch('submit_enrollment.php', {
                method: 'POST',
                body: formData,
            })
            .then(response => response.text())
            .then(data => {
                alert('Form submitted successfully!');
                form.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting the form.');
            });
        }
    });

    seeErrorsButton.addEventListener('click', function () {
        const firstError = form.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstError.focus();
        }
    });
});
