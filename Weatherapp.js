//sets variables for alll our text elements that will change on inputs
const locationElement = document.querySelector('[data-location]')
const statusElement = document.querySelector('[data-status]')
const temperatureElement = document.querySelector('[data-temperature]')
const forecastElement = document.querySelector('[data-forecast]')
const humidityElement = document.querySelector('[data-humidity]')
const preciElement = document.querySelector('[data-preci]')

var location1 = document.getElementById("location");
var temp = document.getElementById("temperature");
var title = document.getElementById("title");
var body = document.getElementsByTagName("body");
const desktopPics = ['hillyDay1.jpg', 'hillyDay2.jpg', 'hillyDay3.jpg', 'lifeSunny1.jpg', 'lifeSunny2.jpg', 'sunnyHilly5.jpg'];



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

    
    console.log("The location is" + data["name"]);
    location1.innerText = data["name"];
    temp.innerText = tempValueConvert;
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

