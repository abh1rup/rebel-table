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

function getSpecial() {
  const specialEl = document.getElementById("specialText");
  if (!specialEl) return;

  const dayIndex = new Date().getDay();
  specialEl.textContent = weeklySpecials[dayIndex];
}

// contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const feedback = document.getElementById("formFeedback");

    if (feedback) {
      feedback.textContent = `Thanks, ${firstName || "friend"} — we got your message and will reply shortly.`;
      feedback.classList.add("visible");
    }

    setTimeout(() => {
      window.location.href = "thankyou.html";
    }, 1100);
  });
});
