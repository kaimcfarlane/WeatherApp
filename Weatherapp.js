//sets variables for alll our text elements that will change on inputs
const locationElement = document.querySelector('[data-location]')
const statusElement = document.querySelector('[data-status]')
const temperatureElement = document.querySelector('[data-temperature]')
const forecastElement = document.querySelector('[data-forecast]')
const humidityElement = document.querySelector('[data-humidity]')
const preciElement = document.querySelector('[data-preci]')



const cityButton = document.querySelector(".cityButton")
const inputValue = document.querySelector(".inputValue")
const bodycolor = document.querySelector(".bodyStyle")



// makes so that on click all functions below occur
cityButton.addEventListener(
    "click",
    () => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value + '&appid=3bd623ddf9f35d70115baebe19399785')
.then(res => res.json())
.then(data => {
    
    console.log(inputValue.value);

    let unix_timestamp = data["sys"]["sunset"]; 
    console.log(unix_timestamp);
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    
    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
    console.log(formattedTime);

    

    //convert temperature to farenheight
    let tempValue = data["main"]["temp"];
    let tempValueConvert = Math.round((tempValue - 273.15) * 9/5 + 32) + "° F"; 
    
    console.log(data);

    //sets content in DOM for all API content
    locationElement.textContent = data["name"];
    statusElement.textContent = data["weather"][0]["description"];
    temperatureElement.textContent = tempValueConvert;
    preciElement.textContent =  formattedTime + " (h, m, s)";
    humidityElement.textContent = data["main"]["humidity"] + '%';

    })


    
    //For some reason match functions will only work with string outputs. This is why the above trext works
    //I need to find a way to convert my coordinates into a string
    // var tName = coordValue;
    // console.log (String(tName).match(/\d+/g));

    .catch(err => console.log(err));
})
    

// button.addEventListener(
//     "click",
//     () => {
//         bodycolor.classList.toggle("on");
//         console.log("click was seen");
//     }, false);




