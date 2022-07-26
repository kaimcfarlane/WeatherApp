//sets variables for alll our text elements that will change on inputs
const locationElement = document.querySelector('[data-location]')
const statusElement = document.querySelector('[data-status]')
const temperatureElement = document.querySelector('[data-temperature]')
const forecastElement = document.querySelector('[data-forecast]')
const humidityElement = document.querySelector('[data-humidity]')
const preciElement = document.querySelector('[data-preci]')


var weatherInfo = document.getElementById("weatherInfo");
var timeText = document.getElementById("time");
var inconHtml = document.getElementById("icon");
var report = document.getElementById("report");
var location1 = document.getElementById("location");
var temp = document.getElementById("temperature");
var title = document.getElementById("title");
var body = document.getElementsByTagName("body");
const desktopPics = ['hillyDay1.jpg', 'hillyDay2.jpg', 'hillyDay3.jpg', 'lifeSunny1.jpg', 'lifeSunny2.jpg', 'sunnyHilly5.jpg'];
const imgUrl = ['cloudyMoon.png', 'cloud.png', 'thunderstormIcon.png', 'snowIcon.png', 'nightFog.png', 'dayFog.png', 'dayDrizzle.png', 'nightDrizzle.png', 'dayRain.png', 'nightRain.png', 'dayClear.png', 'nightClear.png', 'dayClouds.png'];


const cityButton = document.querySelector(".cityButton")
// const inputValue = document.querySelector(".inputValue")
const bodycolor = document.querySelector(".bodyStyle")

var inputValue = document.querySelector(".searchInput");

function search() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value + '&appid=3bd623ddf9f35d70115baebe19399785')
.then(res => res.json())
.then(data => {
    
    console.log(inputValue.value);

    let unix_timestamp = data["sys"]["sunset"]; 
    console.log(unix_timestamp);
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
    console.log(formattedTime);

    
    let tempValue = data["main"]["temp"];
    let tempValueConvert = Math.round((tempValue - 273.15) * 9/5 + 32) + "° F"; 
    console.log(tempValueConvert);
    console.log(data);

    

    

    

    //for some reason its outputting to console but not our text below

    var today= new Date();
    var shortTime = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log("The location is" + data["name"]);
    location1.innerText = data["name"] + ", " + data["sys"]["country"];

    fetch('https://api.ipgeolocation.io/timezone?apiKey=7cf838a077034a07a7f031f906157fce&location=' + inputValue.value +  ',%20' + data["sys"]["country"])
    .then(res => res.json())
    .then(data => {
        console.log(data);
        var localTime = data["time_12"];
        localTime = localTime.substr(0,5) + " " + localTime.substr(9,11);
        console.log(localTime);
        if(localTime.substr(0,1)=="0")
        {
            localTime = localTime.substr(1,localTime.length);  
        }
        time.innerText = localTime;
    })

    temp.innerText = tempValueConvert;
    report.innerText = data["weather"][0]["description"];
    // if(shortTime.substr(0,1)=="0")
    // {
    //     shortTime = shortTime.substr(1,shortTime.length);  
    // }
    // time.innerText = shortTime;

    
    var isDay = true;
    if(parseInt(shortTime.substr(0,2)) < 7 && shortTime.substr(5,7) == "AM")
    {
        isDay = false;
    }
    else if(parseInt(shortTime.substr(0,2)) > 8 && shortTime.substr(5,7) == "PM")
    {
        isDay = false;
    }
    

    hour = shortTime
    var main = data["weather"][0]["main"];
    var imgIndex = 0;

    console.log(parseInt(shortTime.substr(0,2)) + shortTime.substr(5,7) + " " + isDay + " " + main);
    
    
    if(main == "Thunderstorm")
    {
        imgIndex = 2;
    }
    else if(main == "Drizzle" && !isDay)
    {
        imgIndex = 7;
    }
    else if(main == "Drizzle" && isDay)
    {
        imgIndex = 6;
    }
    else if(main == "Rain" && !isDay)
    {
        imgIndex = 9;
    }
    else if(main == "Rain" && isDay)
    {
        imgIndex = 8;
    }
    else if(main == "Snow")
    {
        imgIndex = 3;
    }
    else if(main == "Mist" && !isDay)
    {
        imgIndex = 4;
    }
    else if((main == "Mist" || "Smoke" || "Haze" || "Dust" || "Fog" || "Sand" || "Ash" || "Squall" || "Tornado") && isDay)
    {
        imgIndex = 5;
    }
    else if((main == "Mist" || "Smoke" || "Haze" || "Dust" || "Fog" || "Sand" || "Ash" || "Squall" || "Tornado") && !isDay)
    {
        imgIndex = 11;
    }
    else if(main == "Clear" && isDay)
    {
        imgIndex = 10;
    }
    else if(main == "Clouds" && !isDay)
    {
        imgIndex = 1;
    }
    else if(main == "Clouds" && isDay)
    {
        imgIndex = 12;
    }
    console.log(imgIndex);
    var x = 5;
    inconHtml.innerHTML = "<img id='iconPic' alt='' src='" + imgUrl[imgIndex] + "'>";

    weatherInfo.style.display = "flex";
    // statusElement.textContent = data["weather"][0]["description"];
    // temperatureElement.textContent = tempValueConvert;
    // locationElement.textContent = data["name"];
    // preciElement.textContent =  formattedTime + " (h, m, s)";
    // humidityElement.textContent = data["main"]["humidity"] + '%';

    })

    .catch(err => console.log(err));
}





setInterval(()=>{
    var today= new Date();
    // today.setHours(today.getHours() + 1);s
    var dateTime = today.toLocaleString();
    var time = today.toLocaleTimeString();
    // console.log(time);
    title.innerText = dateTime;

},1000);

// body.style.backgroundImage 
var slideIndex = 0;


// setInterval(
// function slideShow(){
//     if(slideIndex > desktopPics.length)
//     {
//         slideIndex = 0;
//     }

//     var img = "url(" + desktopPics[slideIndex] + ")";
//     document.body.style.backgroundImage = img;
//     slideIndex++;
// }, 8000);




// makes so that on click all functions below occur

// cityButton.addEventListener(
//     "click",
//     () => {
//         fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value + '&appid=3bd623ddf9f35d70115baebe19399785')
// .then(res => res.json())
// .then(data => {
    
//     console.log(inputValue.value);

//     let unix_timestamp = data["sys"]["sunset"]; 
//     console.log(unix_timestamp);
//     var date = new Date(unix_timestamp * 1000);
//     var hours = date.getHours();
//     var minutes = "0" + date.getMinutes();
//     var seconds = "0" + date.getSeconds();
//     var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
//     console.log(formattedTime);

    
//     let tempValue = data["main"]["temp"];
//     let tempValueConvert = Math.round((tempValue - 273.15) * 9/5 + 32) + "° F"; 
    
//     console.log(data);

//     locationElement.textContent = data["name"];
//     statusElement.textContent = data["weather"][0]["description"];
//     temperatureElement.textContent = tempValueConvert;
//     preciElement.textContent =  formattedTime + " (h, m, s)";
//     humidityElement.textContent = data["main"]["humidity"] + '%';

//     })

//     .catch(err => console.log(err));
// })
    

// button.addEventListener(
//     "click",
//     () => {
//         bodycolor.classList.toggle("on");
//         console.log("click was seen");
//     }, false);


 //For some reason match functions will only work with string outputs. This is why the above trext works
    //I need to find a way to convert my coordinates into a string
    // var tName = coordValue;
    // console.log (String(tName).match(/\d+/g));

