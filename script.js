let country = document.getElementById("country");
let time = document.getElementById("time");
let temperature = document.getElementById("temperature");
let weather = document.getElementById("weather");
let input = document.getElementById("choice");


document.getElementById("send").addEventListener("click", function () {
    let site = "http://api.openweathermap.org/data/2.5/weather?q="+ input.value +"&units=metric&lang=fr&appid=58ffdc9405cc39b5cc2687237659505b";

    let xhr = new XMLHttpRequest;
    xhr.open("GET", site);
    xhr.responseType = "json";

    xhr.onload = function () {
            country.innerHTML = xhr.response.name;
            temperature.innerHTML = xhr.response.main.temp + "°";
            weather.innerHTML = xhr.response.weather[0].description;
    }

    xhr.send();
});

function timeCooldown() {
    let date = new Date;
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();

    time.innerHTML = date.getHours() +":" + minutes.padStart(2, "0") + ":" + seconds.padStart(2, "0");
}

timeCooldown();
setInterval(timeCooldown, 1000);