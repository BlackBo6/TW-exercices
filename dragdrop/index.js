let data = "";
document.getElementById("cityInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.currentTarget.value) {
    const container = document.getElementById("citiesContainer");
    const city = document.createElement("li");
    city.textContent = e.currentTarget.value;
    container.appendChild(city);
    document.getElementById("cityInput").value = "";
  }
});

document.getElementById("finish").addEventListener("click", (e) => {
  const cities = document.querySelectorAll("li");
  const list = [];
  cities.forEach((city) => {
    list.push(city.textContent);
  });
  window.localStorage.setItem("cities", JSON.stringify(list));
  window.location.href = "page2.html";
});

function getCities() {
  const cities = Object.values(JSON.parse(localStorage.getItem("cities")));
  const t = document.getElementById("left");
  cities.forEach((city) => {
    const div = document.createElement("div");
    div.textContent = city;
    div.className = "cityContainer";
    div.setAttribute("draggable", true);
    div.addEventListener("dragstart", (e) => {
      e.currentTarget.classList.add("dragStart");
      data = city;
    });
    div.addEventListener("dragend", (e) => {
      e.currentTarget.classList.remove("dragStart");
    });
    t.appendChild(div);
  });
}

function khobza(event) {
  console.log(event.currentTarget);
}

function achraf(event) {
  console.log("testing", data);
  event.currentTarget.classList.add("rightDragStart");
}

function boucetta(event) {
  event.currentTarget.classList.remove("rightDragStart");
}

// document.addEventListener("drag", (e) => {
//   console.log("tofaha");
// });
