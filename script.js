let country = $('#country');
let time = $('#time');
let temperature = $('#temperature');
let weather = $('#weather');
let input = $('#choice');

function timeCooldown() {
    let date = new Date;
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();

    time.text(date.getHours() +":" + minutes.padStart(2, "0") + ":" + seconds.padStart(2, "0"));
}

timeCooldown();
setInterval(timeCooldown, 1000);

$('#send').click(function () {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q="+ input.val() +"&units=metric&lang=fr&appid=58ffdc9405cc39b5cc2687237659505b",
        method: "GET",
        dataType: "json"
    })

        .done(function (response) {
            country.text(response.name);
            temperature.text(response.main.temp + "°");
            weather.text(response.weather[0].description);
        });
})