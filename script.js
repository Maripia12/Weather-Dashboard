var apiKey = "a0289b485c4b6176d9298bf275460b1e";
var searchInput = document.querySelector("#search-input");
var searchForm = document.querySelector("#search-form");






function handleSearchFormSubmit(event) {
  

  if (!searchInput.value) {
    
    return alert("You need a search input value!")
  }
  event.preventDefault()
    var city= searchInput.value.trim()

  getCurrentWeather(city);

 // search=''
  
}

function getCurrentWeather(city) {

   var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=a0289b485c4b6176d9298bf275460b1e`;

   fetch(url).then(function (res){
        return console.log(res.json())
   })

}

searchForm.addEventListener("submit", handleSearchFormSubmit);
