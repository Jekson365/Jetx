const mode = document.getElementById("mode")
var plane = document.getElementById("ufo")
var currentBet = document.getElementById("currbet")
var addBtn = document.getElementById("addbet")
var betInput = document.querySelector(".bet")
var betButton = document.querySelectorAll(".btns")
var balanceElement = document.getElementById("bal")
var counterElement = document.getElementById("counter")

var moveY = 90
var moveYspeed = 0.1
var gameOver = false
var balance = 10.0;
var counter = 0
let start = false;
let x = 0;
let y = 0
let rotate = 0;
let speed = 0.5
let deg = 0.1;
let bet = 0


balanceElement.innerHTML = `${balance} ლ`

setInterval(() => {
  // increse x and y coordinates
  x += speed
  y += 0.5
  rotate += deg


  if (x > 60) speed *= -1
  else if (x < -200) speed *= -1;

  if (rotate > 30) deg *= -1
  else if (rotate < -30) deg *= -1

  // raise number 
  plane.style.transform = `translateX(${x}px) rotate(${rotate}deg)`

  if (start) {
    if (moveY > 300) moveYspeed *= -1
    else if (moveY < 90) moveYspeed *= -1
    moveY += moveYspeed;
    plane.style.bottom = `${moveY}px`
  }

})


setInterval(() => {
  var randomNumber = Math.floor(Math.random() * 1000)
  if (start) {
    counter += 0.01
    if (randomNumber == 66) {
      start = false
      gameOver = true
      setTimeout(() => {
        counter = 0
        addBtn.innerHTML = `შეგდება 0 ლ`
        addBtn.classList.remove("red-button")
        counterElement.innerHTML = `${counter} X`
        counterElement.classList.remove("red-color")
      }, 1000)
      counterElement.classList.add("red-color")
    }
    counterElement.textContent = `${counter.toFixed(2)}X`

    if (start) {
      addBtn.innerHTML = `გამოტანა ${(counter * bet).toFixed(2)}`
    }

  }
}, 9)

const changeBet = (id) => {
  if (start == false) {
    bet = Number(id);
    addBtn.innerHTML = `შეგდება ${bet.toFixed(2)}ლ`
  }
}
var sum = 0;
betButton.forEach((each) => {
  each.addEventListener("click", (each) => changeBet(each.target.value))
})
betInput.addEventListener("change", (e) => {
  addBtn.innerHTML = `შეგდება ${Number(e.target.value).toFixed(2)}ლ`

})

addBtn.addEventListener("click", () => {
  if (!start) {
    balance -= bet.toFixed(2)
    bet += Number(betInput.value)
    start = true;
    addBtn.classList.add("red-button")
  }

  else {
    gameOver = true;
    // start = false;
    addBtn.classList.remove("red-button")
    document.querySelector(".history").innerHTML += `<div class='box'>${(counter * bet).toFixed(2)}</div>`
    balance += Number((counter * bet).toFixed(2))
    balanceElement.innerHTML = `${balance.toFixed(2)} ლ`


    bet = 0
  }
  document.getElementById("currbet").innerHTML = `${bet.toFixed(2)}ლ`

})