console.log("Working...")

let api_key = 'YOUR API KEY';

let form = document.getElementById("form");
var city='';

form.addEventListener("submit", e => {
    e.preventDefault();
    city = document.getElementById("name").value;
    console.log(city);
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    fetchdata();
});

// let city = 'bhubaneswar';

function fetchdata() {
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            let temp = data.main.temp;
            let temp_min = data.main.temp_min;
            let temp_max = data.main.temp_max;

            console.log("temperature =", temp.toFixed(1));

            console.log("Max/Min = ", temp_max.toFixed(1), temp_min.toFixed(1));

            let humidity = data.main.humidity;
            console.log("Humidity", humidity);

            let weather = data.weather; //weather_type
            weather = weather[0].main;
            console.log("Weather = ", weather);

            let country = data.sys.country;
            console.log("country =", country);

            document.querySelector(".city p").innerHTML = `${city}, ${country}`;
            document.querySelector(".temp h1").innerHTML = `${temp.toFixed(1)}&degC`;
            document.querySelector(".weather p").innerHTML = `${weather}`;
            document.querySelectorAll(".max-min p")[0].innerHTML = `Max-${temp_max}&degC`;
            document.querySelectorAll(".max-min p")[1].innerHTML = `Min-${temp_min}&degC`;

        
            displaydata(weather);
            
        })
        .catch(err => {
            alert("Invalid City Name")
        })
    
}


function displaydata(weather) {
            
    
            let main_container = document.querySelector("main");
                    
            if (weather.includes("Rain")) {
                main_container.style.background = "url('./img/rain2.jpg') no-repeat center center/cover";
            }
            else if (weather.includes("storm")) {
                main_container.style.background = "url('./img/storm.jpg') no-repeat center center/cover";
            }
            else if (weather == "Mist" || weather == "Haze" || weather=="Smoke") {
                main_container.style.background = "url('./img/fog.jpg') no-repeat center center/cover"
            }
            else if (weather.includes("Clouds")) {
                main_container.style.background = "url('./img/cloudy.jpg') no-repeat center center/cover"
            }
            else if (weather.includes("Snow")) {
                main_container.style.background = "url('./img/snow.jpg') no-repeat center center/cover"
            }
            else {
                main_container.style.background = "url('./img/sun.jpg') no-repeat center center/cover"
            }

}

// fetchdata();