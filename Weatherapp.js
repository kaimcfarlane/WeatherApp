//sets variables for alll our text elements that will change on inputs
const locationElement = document.querySelector('[data-location]')
const statusElement = document.querySelector('[data-status]')
const temperatureElement = document.querySelector('[data-temperature]')
const forecastElement = document.querySelector('[data-forecast]')
const humidityElement = document.querySelector('[data-humidity]')
const preciElement = document.querySelector('[data-preci]')



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
    
    console.log(data);

    locationElement.textContent = data["name"];
    statusElement.textContent = data["weather"][0]["description"];
    temperatureElement.textContent = tempValueConvert;
    preciElement.textContent =  formattedTime + " (h, m, s)";
    humidityElement.textContent = data["main"]["humidity"] + '%';

    })

    .catch(err => console.log(err));
}



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

