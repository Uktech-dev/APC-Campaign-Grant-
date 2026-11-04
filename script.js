document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("applicationForm");
const submitBtn = document.getElementById("submitBtn");
const shareBtn = document.getElementById("shareBtn");
const year = document.getElementById("year");
const accountNumber = document.getElementById("accountNumber");

// AUTOMATIC COPYRIGHT YEAR
if (year) {
year.textContent = new Date().getFullYear();
}

// ACCOUNT NUMBER VALIDATION
if (accountNumber) {
accountNumber.addEventListener("input", function () {
this.value = this.value.replace(/\D/g, "").slice(0, 10);
});
}

// SHARE WEBSITE
if (shareBtn) {
shareBtn.addEventListener("click", async function () {

  const shareData = {
    title: document.title,
    text: "Visit this website.",
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Website link copied successfully!");
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      prompt("Copy website link:", window.location.href);
    }
  }

});

}
// FORM SUBMISSION
if (form) {
  form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Validate required fields
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Validate 10-digit account number
    if (!accountNumber || !/^\d{10}$/.test(accountNumber.value)) {
      alert("Please enter a valid 10-digit account number.");
      accountNumber.focus();
      return;
    }

    // Disable button while processing
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    // Success message
    alert("Application submitted successfully. Thank you! Please check your email for updates.");

    // Restore button
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Application";

  });
}