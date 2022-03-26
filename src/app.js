function formatDate(timestamp) {
let date = new Date(timestamp);
let hours = date.getHours();
if (hours < 10) {
  hours = '0${hours}';
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = '0${minutes}';
}
let days = 
[
  "Sunday", 
  "Monday",
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday", 
  "Saturday"
];

let day = days[date.getDay()];
return '${day} ${hours} ${minutes}';
}
function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");

celsiusTemperature = (response.data.main.temp);

windElement.innerHTML = Math.round(response.data.wind.speed);
humidityElement.innerHTML = (response.data.main.humidity);
descriptionElement.innerHTML = (response.data.weather[0].description);
cityElement.innerHTML = (response.data.name);
temperatureElement.innerHTML = Math.round(celsiusTemperature);
dateElement.innerHTML = formatDate(response.data.dt * 1000);
iconElement.setAttribute("src", 'http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png');
iconElement.setAttribute("alt", response.data.weather[0].description);
}
function search(city) {
  let apiKey = "f1ee79c9eeb6035ca48c765eafeb744e";
  let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&apiid=${apiKey}&units=metric';
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  // remove the active class from the celsius link
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

search("New York");