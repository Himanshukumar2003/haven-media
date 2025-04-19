document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('enrollmentForm');

    form.addEventListener('submit', function (e) {
        let errors = 0;

        const inputs = form.querySelectorAll('input, select');
        form.querySelectorAll('.error-message').forEach(msg => msg.classList.remove('visible'));
        inputs.forEach(input => input.classList.remove('error'));

        const validate = (id, condition, message) => {
            const el = document.getElementById(id);
            const errorMsg = el.parentElement.querySelector('.error-message');
            if (!condition(el.value.trim())) {
                el.classList.add('error');
                errorMsg.textContent = message;
                errorMsg.classList.add('visible');
                errors++;
            }
        };

        validate('firstName', val => val !== '', 'This field is required.');
        validate('lastName', val => val !== '', 'This field is required.');
        validate('email', val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), 'Please enter a valid email address.');
        validate('phone', val => val.replace(/\D/g, '').length >= 10, 'Please enter a valid phone number.');
        validate('website', val => {
            try {
                const testURL = new URL(val.startsWith('http') ? val : `https://${val}`);
                return !!testURL.hostname.includes('.');
            } catch {
                return false;
            }
        }, 'Please enter a valid website URL.');
        validate('services', val => val !== '', 'Please select a service.');

        if (errors > 0) {
            e.preventDefault();

            // Show error banner with count
            document.getElementById('errorCount').textContent = errors;
            document.getElementById('errorBanner').style.display = 'block';
        } else {
            document.getElementById('errorBanner').style.display = 'none';
        }
    });

    // Optional: Scroll to first error field when "See Errors" button is clicked
    document.getElementById('seeErrors').addEventListener('click', function () {
        const firstError = document.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
