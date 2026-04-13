const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "36da9530f62f4d2a41c10d8bab68dbf5";

const search = document.querySelector('.search-city');
const city = document.querySelector('.input-city');
let weatherIcon = document.querySelector('.cloud-png');


async function getWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector('.display-weather').style.display = 'block';
    document.querySelector('.error').style.display='none';

    if(response.status==200){
        document.querySelector('.temp').innerHTML =Math.round(data.main.temp)+"°C";
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity-value').innerHTML = data.main.humidity+"%";
        document.querySelector('.wind-value').innerHTML = data.wind.speed+"km/hr";

        if (data.weather[0].main=='Clear'){
            weatherIcon.src = 'images/clear.png';
        } else if(data.weather[0].main=='Clouds'){
            weatherIcon.src = 'images/clouds.png';
        } else if(data.weather[0].main=='Rain'){
            weatherIcon.src = 'images/rain.png';
        } else if(data.weather[0].main=='Snow'){
            weatherIcon.src = 'images/snow.png';
        } else if(data.weather[0].main=='Mist'){
            weatherIcon.src = 'images/mist.png';
        } else if(data.weather[0].main=='Drizzle'){
            weatherIcon.src = 'images/drizzle.png';
        } 
    }
     else if(response.status==404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.display-weather').style.display = 'none';
     }
}

search.addEventListener('click',()=>{
  getWeather(city.value);
  city.value = '';
})

