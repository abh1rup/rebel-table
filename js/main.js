// daily specials by day of week (0 = Sunday)
const weeklySpecials = [
  "Sunday: Closed — See you Monday!",
  "Monday: $2 off the Fried Chicken Plate",
  "Tuesday: Fried Green Tomatoes for $6",
  "Wednesday: Catfish Po’ Boy with a side for $13",
  "Thursday: Free Skillet Cornbread with any Southern Favorite",
  "Friday: Shrimp & Grits for $13",
  "Saturday: Seasonal Vegetable Plate for $9"
];

// starts on today's day, then advances one day per click
let dayIndex = new Date().getDay();

function getSpecial() {
  const specialEl = document.getElementById("specialText");
  if (!specialEl) return;

  specialEl.textContent = weeklySpecials[dayIndex];
  dayIndex = (dayIndex + 1) % 7;
}

// contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const confirmed = confirm("Are you sure you want to submit your message?");

    if (confirmed) {
      const firstNameEl = document.getElementById("firstName");
      const firstName = firstNameEl ? firstNameEl.value.trim() : "";

      // remember that this visitor confirmed a submission
      sessionStorage.setItem("formSubmitted", firstName || "friend");

      window.location.href = "thankyou.html";
    }
    // Cancel: do nothing, visitor stays on the Contact page
  });
});

// thank-you alert (only after a confirmed submission)
window.addEventListener("load", () => {
  const name = sessionStorage.getItem("formSubmitted");
  if (!name) return; // direct visit or refresh: no alert

  sessionStorage.removeItem("formSubmitted");
  alert(`Thank you, ${name}! We received your message and will reply shortly.`);
});
