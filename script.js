var apiKey = "a0289b485c4b6176d9298bf275460b1e";
var searchInput = document.querySelector("#search-input");
var searchForm = document.querySelector("#search-form");

var currentWeatherContainer = document.querySelector('#current')




function handleSearchFormSubmit(event) {
 // console.log('you click button');

  if (!searchInput.value) {
    
    return alert("You need a search input value!")
  }
  event.preventDefault()
    var city= searchInput.value.trim()

  getCurrentWeather(city);

 // search=''
  
}

function currentWeather(city, weather, tie){
var date = moment().format("MMMM Do YYYY");
var h2 = document.createElement('h2')

h2.textContent=date
currentWeatherContainer.append(h2)
}

function show(city, data){
currentWeather(city, data.current, data.timezone)
}

function weatherStatus(data){
    var lat = data.coord.lat;
    var lon = data.coord.lon;
    var city = data.name;
    var apiUrl = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=a0289b485c4b6176d9298bf275460b1e`;
   
    fetch(apiUrl).then(function (res){
        return res.json()
    }).then(function(data){
        show(city, data)
        console.log(data)
    }).catch( function(err){
        console.log(err)
    })


}

function getCurrentWeather(city) {

   var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=a0289b485c4b6176d9298bf275460b1e`;

   fetch(url).then(function (res){
        return res.json();
   }).then(function (data){
       weatherStatus(data)
   })

}

searchForm.addEventListener("submit", handleSearchFormSubmit);
