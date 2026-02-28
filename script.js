// 05e9ce5229c5f4a51c9b1a9b6475965e

let apikey = `05e9ce5229c5f4a51c9b1a9b6475965e`

let clearImg = `assets/clear.png`
let couldsImg = `assets/clouds.png`
let drizzleImg = `assets/drizzle.png`
let mistImg = `assets/mist.png`
let rainImg = `assets/rain.png`
let snowImg = `assets/snow.png`

let getWeather = async (city) => {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

    let response = await fetch(url)
    let data = await response.json()

    if (data.cod !== 200) {
        alert("City not found")
        return
    }

    console.log(data);



    let cityName = document.querySelector(".city")
    cityName.textContent = `${data.name}`

    let temp = document.querySelector('.weather-temp')
    let temperature = Math.round(data.main.temp)
    temp.textContent = `${temperature}°C`

    let type = document.querySelector('.weather-desc')
    type.textContent = `${data.weather[0].description}`

    let humidity = document.querySelector('.humidity-text')
    humidity.textContent = `${data.main.humidity} %`

    let speed = (data.wind.speed * 3.6).toFixed(1)
    let windSpeed = document.querySelector('.speed-text')
    windSpeed.textContent = `${speed} Km/h`

    // date and time 
    let now = new Date()
    const day = now.toLocaleDateString('en-IN', { weekday: 'long' })
    console.log(day);

    let today = document.querySelector('.day')
    today.textContent = `${day}`

    const date = now.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    })
    let dateNow = document.querySelector('.date')
    dateNow.textContent = `${date}`


    let scenery = data.weather[0].main.toLowerCase()
    console.log(scenery);

    let image = document.querySelector('.left img')


    if (scenery === 'clouds') {
        image.src = couldsImg
    }else if (scenery === 'clear') {
        image.src = clearImg
    }else if (scenery === 'rain') {
        image.src = rainImg
    }else if (scenery === 'snow') {
        image.src = snowImg
    }else if (scenery === 'mist') {
        image.src = mistImg
    }

}

getWeather("Hyderabad")


let searchCity = () => {
    let city = document.querySelector('#cityname').value
    if (city !== "") {
        getWeather(city)
    }
}


document.querySelector('#searchbtn').addEventListener('click', searchCity)

document.querySelector('#cityname').addEventListener('keydown', (e) => {
    if (e.key === "Enter")
        searchCity()
})

