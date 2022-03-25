function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");
windElement.innerHTML = Math.round(response.data.wind.speed);
humidityElement.innerHTML = (response.data.main.humidity);
descriptionElement.innerHTML = (response.data.weather[0].description);
cityElement.innerHTML = (response.data.name);
temperatureElement.innerHTML = Math.round(response.data.temp);
}

let apiKey = "f1ee79c9eeb6035ca48c765eafeb744e";
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=New York&apiid=${apiKey}&units=metric';

axios.get(apiUrl).then(displayTemperature);
