//sets variables for alll our text elements that will change on inputs
const locationElement = document.querySelector('[data-location]')
const statusElement = document.querySelector('[data-status]')
const temperatureElement = document.querySelector('[data-temperature]')
const forecastElement = document.querySelector('[data-forecast]')
const humidityElement = document.querySelector('[data-humidity]')
const sunsetElement = document.querySelector('[data-sunset]')



const sunset = document.querySelector(".sunset")
const cityButton = document.querySelector(".cityButton")
const inputValue = document.querySelector(".inputValue")
const name = document.querySelector(".name")
const desc = document.querySelector(".desc")
const temp = document.querySelector(".temp")
const type = document.querySelector(".type")
const pressure = document.querySelector(".pressure")
const statsButton = document.querySelector(".statsButton")
const longitudeValue = document.querySelector(".longitude")
const latitudeValue =document.querySelector("latitude")
const button = document.querySelector(".changeColor")
const bodycolor = document.querySelector(".bodyStyle")


// var tName = "lat: 456, Long: 786";
//  console.log (tName.match(/\d+/g));

cityButton.addEventListener(
    "click",
    () => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value + '&appid=3bd623ddf9f35d70115baebe19399785')
.then(res => res.json())
.then(data => {
    let sunsetValue = data["sys"]["sunset"];
    const nameValue = data["name"];
    let tempValue = data["main"]["temp"];
    const descValue = data["weather"][0]['description'];
    let typeValue = data["weather"][0]["main"];
    let pressureValue = data["main"]["pressure"] + " pascals (pressure)";
    let coordValue = data["coord"];
    let tempValueConvert = Math.round((tempValue - 273.15) * 9/5 + 32) + " degrees farenheight"; 
    
    name.innerHTML = nameValue;
    temp.innerHTML = tempValueConvert;
    desc.innerHTML = descValue;
    type.innerHTML = typeValue;
    pressure.innerHTML = pressureValue;
    sunset.innerHTML = sunsetValue;
    
    console.log(data);
    console.log(coordValue);

    locationElement.textContent = data["name"];
    statusElement.textContent = data["weather"][0]["description"];
    temperatureElement.textContent = data["main"]["temp"];
    sunsetElement.textContent = data["sys"]["sunset"];
    humidityElement.textContent = data["main"]["humidity"];

    })

    
    //For some reason match functions will only work with string outputs. This is why the above trext works
    //I need to find a way to convert my coordinates into a string
    // var tName = coordValue;
    // console.log (String(tName).match(/\d+/g));

    .catch(err => console.log(err));
})
    

button.addEventListener(
    "click",
    () => {
        bodycolor.classList.toggle("on");
        console.log("click was seen");
    }, false);








// 'map' refers to a <div> element with the ID map
// let map = L.map('map').setView([25.77, -80.19], 13);




// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'pk.eyJ1Ijoia2FpbWZhcmxhbmUiLCJhIjoiY2t0aXF4eXM3MTRsdjJxbm12N3gwNmNheCJ9.HssFh7ASceSfu4lqup5loQ'
// }).addTo(map);

//If I take the data from our input then take those corrdinates, put them in a varibale, then output them into this map cooridnates it could work