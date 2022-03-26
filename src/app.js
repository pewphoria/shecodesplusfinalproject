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

windElement.innerHTML = Math.round(response.data.wind.speed);
humidityElement.innerHTML = (response.data.main.humidity);
descriptionElement.innerHTML = (response.data.weather[0].description);
cityElement.innerHTML = (response.data.name);
temperatureElement.innerHTML = Math.round(response.data.temp);
dateElement.innerHTML = formatDate(response.data.dt * 1000);
iconElement.setAttribute("src", 'http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png');
iconElement.setAttribute("alt", response.data.weather[0].description);
}
let city = "New York";
let apiKey = "f1ee79c9eeb6035ca48c765eafeb744e";
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&apiid=${apiKey}&units=metric';

axios.get(apiUrl).then(displayTemperature);
