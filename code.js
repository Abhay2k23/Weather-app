const apiKey = "b6d14be6bb10ac94aee22263f0988561&";
const apiUrl = `https://api.openweathermap.org
/data/2.5/weather?q=`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const mode = document.querySelector(".mode");
const card = document.querySelector("#card");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBtn.addEventListener("keypress", (event) => {
  if (event.key == "Enter") checkWeather(searchBox.value);
});
