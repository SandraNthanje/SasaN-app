function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
     temperatureElement.innerHTML = Math.round(temperature);
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date (response.data.time * 1000) ;
    let iconElement = document.querySelector("#weather-app-icon");

    console.log(response.data);
     timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    cityElement.innerHTML = response.data.city;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`;
     
}

function formatDate(date) {

let minutes = date.getMinutes();
let hours = date.getHours();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sartuday", ];

let day =days[date.getDay()];

if(minutes<10){
    minutes = `0${minutes}`;
}
return`${day},${hours}:${minutes}`;

 
    
}
function displayForecast() {
    let days = ["Tue", "Wed", "Thu", "Fri","Sat"];
    let forecastHtml = "";
    
days.forEach(function (day) {
forecastHtml = 
forecastHtml + `
<div class="weather-forecast-day">
          
              <div class="weather-forecast-date">${day}
                </div>
                <div class="weather-forecast-icon">🌥️</div>
                <div class="weather-forecast-temperatures"> 
                  <div class="weather-forecast-temperature><strong> 15°</strong> </div>
                  <div class="weather-forecast-temperature"> 9°</div>
                
        </div>
        </div>`;
});
let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml;
};






function searchCity(city) {
    let apiKey = "021aac44e43f5dot276a89e05bb0245d";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);

}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    
   
    searchCity(searchInput.value);

}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

displayForecast();
