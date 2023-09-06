const mars = document.querySelector(".mars")
const venus = document.querySelector(".venus")

let marsY = 0
let marsX = 100
let speedPlanet = 0.6
let end = false;


setInterval(() => {
    if (!end) {
        marsY += speedPlanet
        mars.style.left = `${marsX}px`
        mars.style.top = `${marsY - 80}px`

        if (marsY > 900) {
            marsY = 0;
            if (marsY == 0) {
                marsX = Math.floor(Math.random() * 300)
                end = true;
                setTimeout(() => {
                    end = false
                }, 2000)
            }
        }
        if (marsY < 0) speedPlanet *= -1;
    }
})

let venusY = 0
let venusX = 300
let speedPlanetVenus = 0.3
let endVenus = false;


setInterval(() => {
    if (!endVenus) {
        venusY += speedPlanetVenus
        venus.style.left = `${venusX}px`
        venus.style.top = `${venusY - 80}px`

        if (venusY > 900) {
            venusY = 0;
            if (venusY == 0) {
                venusX = Math.floor(Math.random() * 300)
                endVenus = true;
                setTimeout(() => {
                    endVenus = false
                }, 2000)
            }
        }
        if (venusY < 0) speedPlanet *= -1;
    }
})

