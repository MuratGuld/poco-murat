let cityCoordinates = [
  {
    city: "Warsaw",
    latitude: 52.2297,
    longitude: 21.0122,
  },
  {
    city: "Berlin",
    latitude: 52.5235,
    longitude: 13.4115,
  },
  {
    city: "Paris",
    latitude: 48.8567,
    longitude: 2.351,
  },
  {
    city: "Madrid",
    latitude: 40.4167,
    longitude: -3.7033,
  },
  {
    city: "London",
    latitude: 51.5002,
    longitude: -0.1262,
  },
];

let select = document.querySelector("select");
let paragraph = document.querySelector("p");

select.addEventListener("change", (e) => {
  let value = e.target.value;
  let selectedCity = cityCoordinates.find((item) => item.city == value);

  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}&hourly=temperature_2m&current_weather=true`
  )
    .then((response) => response.json())
    .then((data) => {
      paragraph.innerText = `The temperature in ${selectedCity.city} is ${data.current_weather.temperature} degree`;
    });
});
