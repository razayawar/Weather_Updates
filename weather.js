base_URl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
Api_key = "1c8e1cf55ab55af44e9f19d60d9cd194";

const temp = document.querySelector(".temp");
let icon = document.querySelector(".weather-icon")
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const error = document.querySelector(".msg");
const display = document.querySelector(".weather");

searchbtn.addEventListener("click" , ()=>{
    check(searchBox.value);
})


async function check(city){
    const response = await fetch(base_URl + city + `&appid=${Api_key}`);

    if(response.status == "404"){
        error.style.display = "block";
        display.style.display = "none"

    }else{
        let data = await response.json();

        temp.innerHTML = Math.round(data.main.temp)+ "°C";
        document.querySelector(".city").innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "Km/h";
    
        if(data.weather[0].main == "Clouds"){
            icon.src = "images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            icon.src = "images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            icon.src = "images/rain.png";
        }else if(data.weather[0].main == "Drizzler"){
            icon.src = "images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            icon.src = "images/mist.png";
        }
        
        display.style.display = "block";
        error.style.display = "none";
    }
}


