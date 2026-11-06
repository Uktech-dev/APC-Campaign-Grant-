document.addEventListener("DOMContentLoaded", function () {

  const shareBtn = document.getElementById("shareBtn");
  const year = document.getElementById("year");

  // AUTOMATIC COPYRIGHT YEAR
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // SHARE WEBSITE WITH CUSTOM NOTE
  if (shareBtn) {

    shareBtn.addEventListener("click", async function () {

      const websiteLink =
        "https://apc50kcampaigngrantforallnigerians.ing.ng";

      const shareMessage =
`FG ₦50,000 Cash Relief Fund, Instant Reflection

The Federal Government of Nigeria has approved ₦50,000 cash relief funds for all Nigerians

Get Yours Here Now 👇
https://apc50kcampaigngrantforallnigerians.ing.ng.

Visit Here 👇
${websiteLink}`;

      const shareData = {
        title: "Grant Information Portal",
        text: shareMessage
      };

      try {

        if (navigator.share) {

          await navigator.share(shareData);

        } else if (navigator.clipboard) {

          await navigator.clipboard.writeText(shareMessage);

          alert("Sharing message copied successfully!");

        } else {

          prompt("Copy your sharing message:", shareMessage);

        }

      } catch (error) {

        if (error.name !== "AbortError") {

          prompt("Copy your sharing message:", shareMessage);

        }

      }

    });

  }

});
