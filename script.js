let country = document.getElementById("country");
let time = document.getElementById("time");
let temperature = document.getElementById("temperature");
let weather = document.getElementById("weather");

function timeCooldown() {
    let date = new Date;
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();

    time.innerHTML = date.getHours() +":" + minutes.padStart(2, "0") + ":" + seconds.padStart(2, "0");
}

timeCooldown();
setInterval(timeCooldown, 1000);

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?lat=50.0333&lon=4.1667&units=metric&lang=fr&appid=58ffdc9405cc39b5cc2687237659505b",
    method: "GET",
    dataType: "json"
})

    .done(function (response) {
        country.innerHTML = response.name;
        temperature.innerHTML = response.main.temp + "°";
        weather.innerHTML = response.weather[0].description;
    });