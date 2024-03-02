function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    
    temperatureElement.innerHTML = Math.round(temperature);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
}




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
