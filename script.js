// Food item selection
document.querySelectorAll(".food-item input").forEach(cb => {
  cb.addEventListener("change", () => {
    if (cb.checked) {
      cb.parentElement.classList.add("selected");
    } else {
      cb.parentElement.classList.remove("selected");
    }
  });
});

// Get location button
document.getElementById("locBtn").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      document.getElementById("location").value =
        pos.coords.latitude + ", " + pos.coords.longitude;
    }, err => {
      alert("Lokatsiya olinmadi: " + err.message);
    });
  } else {
    alert("Brauzer lokatsiyani qo‘llamaydi.");
  }
});

// Form submit
document.getElementById("orderForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const location = document.getElementById("location").value;
  const foods = Array.from(document.querySelectorAll("input[type=checkbox]:checked"))
    .map(cb => cb.value);

  const summary =
    👤 ${name}\n📱 ${phone}\n📍 ${location}\n🍽 ${foods.join(", ")};

  document.getElementById("summaryBox").innerText = summary;

  // Agar Telegram WebApp ichida ishlatsang:
  // window.Telegram.WebApp.sendData(JSON.stringify({name, phone, location, foods}));
});