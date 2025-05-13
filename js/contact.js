document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("enrollmentForm");
  const errorBanner = document.getElementById("errorBanner");
  const errorCountEl = document.getElementById("errorCount");
  const seeErrorsBtn = document.getElementById("seeErrors");

  form.addEventListener("submit", function (e) {
    let errors = 0;
    const inputs = form.querySelectorAll("input, select");

    // Reset previous errors
    form.querySelectorAll(".error-message").forEach((msg) => {
      msg.classList.remove("visible");
      msg.style.display = "none";
    });
    inputs.forEach((input) => input.classList.remove("error"));

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

    // Field validations
    validate("firstName", (val) => val !== "", "This field is required.");
    validate("lastName", (val) => val !== "", "This field is required.");
    validate(
      "email",
      (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      "Please enter a valid email address."
    );
    validate(
      "phone",
      (val) => val.replace(/\D/g, "").length >= 10,
      "Please enter a valid phone number."
    );
    validate(
      "website",
      (val) => {
        try {
          const testURL = new URL(
            val.startsWith("http") ? val : `https://${val}`
          );
          return !!testURL.hostname.includes(".");
        } catch {
          return false;
        }
      },
      "Please enter a valid website URL."
    );
    validate(
      "services",
      (val) => val !== "" && val !== "Please select",
      "Please select a service."
    );
    validate(
      "countryCode",
      (val) => val !== "" && val !== "Please select",
      "Please select a country code."
    );
    validate(
      "currentRevenue",
      (val) => val !== "",
      "Please enter your current monthly revenue."
    );
    validate(
      "goalRevenue",
      (val) => val !== "",
      "Please enter your goal revenue and timeline."
    );

    if (errors > 0) {
      e.preventDefault();
      errorCountEl.textContent = errors;
      errorBanner.style.display = "block";
    } else {
      errorBanner.style.display = "none";
    }
  });

  // Scroll to first error field when "See Errors" is clicked
  if (seeErrorsBtn) {
    seeErrorsBtn.addEventListener("click", function () {
      const firstError = document.querySelector(".error");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }
});
