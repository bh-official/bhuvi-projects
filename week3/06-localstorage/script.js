const form = document.querySelector("form");
const input = document.querySelector("input");
const body = document.querySelector("body");

// SAVE
function savePreferences(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");

  const preferences = {
    colour: colour,
  };

  localStorage.setItem("preferences", JSON.stringify(preferences));
  applyPreferences(preferences);
}

form.addEventListener("submit", savePreferences);

// LOAD
function loadPreferences() {
  const preferences = JSON.parse(localStorage.getItem("preferences"));

  if (preferences) {
    applyPreferences(preferences);
  }
}

// APPLY
function applyPreferences(preferences) {
  input.value = preferences.colour || "#000000";
  body.style.color = preferences.colour || "#000000";
}

// RUN ON PAGE LOAD
loadPreferences();
