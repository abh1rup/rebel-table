// daily specials by day of week (0 = Sunday)
const weeklySpecials = [
  "Sunday Brunch: Wood-fired shakshuka and sourdough toast — $11",
  "Monday: $3 off any house pizza after 5 PM",
  "Tuesday: Half-price bruschetta with any entrée",
  "Wednesday: Margherita pizza & house salad combo — $14",
  "Thursday: Free tiramisu with two pasta orders",
  "Friday: Late-night flatbreads & draft specials until 10 PM",
  "Saturday: Chef's seasonal roasted vegetable bowl — $12"
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
