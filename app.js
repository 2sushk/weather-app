const API_KEY = `809c2f6e3596be00a114a05cdda55888`
const form = document.querySelector("form")
const weather= document.querySelector("#weather")
const search= document.querySelector("#search")

const getWeather = async (city) => {
weather.innerHTML = ` <h3>Loading.. </h3>`
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
const response=  await fetch(url); 
const data= await response.json()
return showWeather(data)
}
const showWeather = (data) =>{
    if(data.cod == "404")
    {
        weather.innerHTML = ` <h3>city not found </h3>`
        return;
    }
 weather.innerHTML = `
 
 <div>
                <img src="https://openweathermap.org/img/wn/${(data.weather[0].icon)}@2x.png"
                alt="">
            </div>
            <div>
                <h2>${data.main.temp}°C</h2>
                <h4>${data.weather[0].main}</h4>
            </div>
 `

}


form.addEventListener(
"submit",
function(event) {
    getWeather(search.value);
    event.preventDefault();
}

)