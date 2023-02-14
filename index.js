const search = document.getElementById("search");
const btn = document.getElementById("btn");
const city = document.getElementById("city");
const Result = document.getElementById("result");

let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const searchWeather = () => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  let City = search.value;
  const FULL_URL = `${URL}?q=${City}&appid=${API_KEY}&units=imperial`;
  fetch(FULL_URL)
    .then((response) => response.json())
    .then((response) => {
      showWeatherInfo(response);
    })
    .catch((err) => console.error(err));
};

const showWeatherInfo = (result) => {
  city.innerHTML = `${result.name} <br/>${result.weather[0].main} `;
  Result.innerHTML = `<h3>Temp: ${result.main.temp}°F <br/>MinTemp:${result.main.temp_min}°F<br/> MaxTemp: ${result.main.temp_max}°F</h3>`;
};
