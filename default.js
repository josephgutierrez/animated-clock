const barOne = document.querySelectorAll(".bar-one")
const barTwo = document.querySelectorAll(".bar-two")
const barThree = document.querySelectorAll(".bar-three")
const barFour = document.querySelectorAll(".bar-four")
const barFive = document.querySelectorAll(".bar-five")

const addNum = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  0: 'zero'
}

const removeNum = {
  1: ["two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"],
  2: ['one', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero'],
  3: ["one", "two", "four", "five", "six", "seven", "eight", "nine", "zero"],
  4: ["one", "two", "three", "five", "six", "seven", "eight", "nine", "zero"],
  5: ["one", "two", "three", "four", "six", "seven", "eight", "nine", "zero"],
  6: ["one", "two", "three", "four", "five", "seven", "eight", "nine", "zero"],
  7: ["one", "two", "three", "four", "five", "six", "eight", "nine", "zero"],
  8: ["one", "two", "three", "four", "five", "six", "seven", "nine", "zero"],
  9: ["one", "two", "three", "four", "five", "six", "seven", "eight", "zero"],
  0: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
}

function makeNum(num, addNum, ...removeNum) {
  barOne[num].classList.add(addNum)
  barOne[num].classList.remove(...removeNum)
  barTwo[num].classList.add(addNum)
  barTwo[num].classList.remove(...removeNum)
  barThree[num].classList.add(addNum)
  barThree[num].classList.remove(...removeNum)
  barFour[num].classList.add(addNum)
  barFour[num].classList.remove(...removeNum)
  barFive[num].classList.add(addNum)
  barFive[num].classList.remove(...removeNum)
}

const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

function clockTime() {
  const currentTime = new Date()
  let currentHour = currentTime.getHours()
  let currentMinute = currentTime.getMinutes()
  let currentSecond = currentTime.getSeconds()

  const hour = (hr) => {
    hr = hr > 9 ? hr : "0" + hr;
    hr = hr.toString().split('')
    makeNum(0, addNum[hr[0]], ...removeNum[hr[0]])
    makeNum(1, addNum[hr[1]], ...removeNum[hr[1]])
  }

  const minute = (min) => {
    min = min > 9 ? min : "0" + min;
    min = min.toString().split('')
    makeNum(2, addNum[min[0]], ...removeNum[min[0]])
    makeNum(3, addNum[min[1]], ...removeNum[min[1]])
  }

  const second = (sec) => {
    sec = sec > 9 ? sec : "0" + sec;
    sec = sec.toString().split('')
    makeNum(4, addNum[sec[0]], ...removeNum[sec[0]])
    makeNum(5, addNum[sec[1]], ...removeNum[sec[1]])
  }

  hour(currentHour)
  minute(currentMinute)
  second(currentSecond)

}
clockTime()
setInterval(clockTime, 1000)
