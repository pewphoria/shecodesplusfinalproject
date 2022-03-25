function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML = (response.data.weather.description);
cityElement.innerHTML = (response.data.main.city);
temperatureElement.innerHTML = Math.round
(response.data.main.temp);
}

let apiKey = "f1ee79c9eeb6035ca48c765eafeb744e";
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=New York&apiid=${apiKey}&units=metric';

axios.get(apiUrl).then(displayTemperature);
