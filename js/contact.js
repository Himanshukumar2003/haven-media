document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("enrollmentForm");
  const errorBanner = document.getElementById("errorBanner");
  const errorCountEl = document.getElementById("errorCount");
  const seeErrorsBtn = document.getElementById("seeErrors");

  form.addEventListener("submit", function (e) {
    let errors = 0;
    const inputs = form.querySelectorAll("input, select");

    // Clear old errors
    form.querySelectorAll(".error-message").forEach((msg) => {
      msg.classList.remove("visible");
      msg.style.display = "none";
    });
    inputs.forEach((input) => input.classList.remove("error"));

    const isAlphabetic = (val) => /^[A-Za-z]+$/.test(val);
    const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    const isValidURL = (val) => {
      try {
        const testURL = new URL(
          val.startsWith("http") ? val : `https://${val}`
        );
        return !!testURL.hostname.includes(".");
      } catch {
        return false;
      }
    };

    const validate = (id, condition, message) => {
      const el = document.getElementById(id);
      const errorMsg = el?.parentElement.querySelector(".error-message");
      if (el && !condition(el.value.trim())) {
        el.classList.add("error");
        if (errorMsg) {
          errorMsg.textContent = message;
          errorMsg.classList.add("visible");
          errorMsg.style.display = "block";
        }
        errors++;
      }
    };

    // First Name validations
    validate("firstName", (val) => val !== "", "First name is required.");
    validate(
      "firstName",
      (val) => val.length >= 2,
      "Must be at least 2 characters."
    );
    validate("firstName", isAlphabetic, "Only alphabets allowed.");

    // Last Name validations
    validate("lastName", (val) => val !== "", "Last name is required.");
    validate(
      "lastName",
      (val) => val.length >= 2,
      "Must be at least 2 characters."
    );
    validate("lastName", isAlphabetic, "Only alphabets allowed.");

    // Email
    validate("email", isValidEmail, "Enter a valid email address.");

    // Phone
    validate(
      "phone",
      function (val) {
        return /^\d{10}$/.test(val);
      },
      "Enter a valid 10-digit phone number."
    );

    // Website
    validate("website", isValidURL, "Enter a valid website URL.");

    // Services
    validate("services", (val) => val !== "", "Please select a service.");

    // Country Code
    validate(
      "countryCode",
      (val) => val !== "",
      "Please select a country code."
    );

    // reCAPTCHA validation
    const recaptchaResponse = grecaptcha.getResponse();
    const captchaError = document.querySelector(
      ".g-recaptcha + .invalid-feedback"
    );
    if (recaptchaResponse.length === 0) {
      if (captchaError) captchaError.style.display = "block";
      errors++;
    } else {
      if (captchaError) captchaError.style.display = "none";
    }

    // Prevent form submission if errors
    if (errors > 0) {
      e.preventDefault();
      if (errorCountEl && errorBanner) {
        errorCountEl.textContent = errors;
        errorBanner.style.display = "block";
      }
    } else if (errorBanner) {
      errorBanner.style.display = "none";
    }
  });

  // ✅ Enforce only digits & max 10 length in real-time
  document.getElementById("phone").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "").slice(0, 10);
  });

  // Scroll to first error on button click
  if (seeErrorsBtn) {
    seeErrorsBtn.addEventListener("click", function () {
      const firstError = document.querySelector(".error");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }
});
