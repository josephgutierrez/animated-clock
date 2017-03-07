const barOne = document.querySelectorAll(".bar-one")
const barTwo = document.querySelectorAll(".bar-two")
const barThree = document.querySelectorAll(".bar-three")
const barFour = document.querySelectorAll(".bar-four")
const barFive = document.querySelectorAll(".bar-five")


function makeOne(num) {
  barOne[num].classList.add("one")
  barOne[num].classList.remove("two", "three", "four", "five", "six", "seven", "eight", "nine", "zero")
  barTwo[num].classList.add("one")
  barTwo[num].classList.remove("two", "three", "four", "five", "six", "seven", "eight", "nine", "zero")
  barThree[num].classList.add("one")
  barThree[num].classList.remove("two", "three", "four", "five", "six", "seven", "eight", "nine", "zero")
  barFour[num].classList.add("one")
  barFour[num].classList.remove("two", "three", "four", "five", "six", "seven", "eight", "nine", "zero")
  barFive[num].classList.add("one")
  barFive[num].classList.remove("two", "three", "four", "five", "six", "seven", "eight", "nine", "zero")
}

function makeTwo(num) {
  barOne[num].classList.add("two")
  barOne[num].classList.remove("one", "three", "four", "five", "six", "seven", "eight", "nine", "zero")
  barTwo[num].classList.add("two")
  barTwo[num].classList.remove("one", "three", "four", "five", "six", "seven", "eight", "nine", "zero")
  barThree[num].classList.add("two")
  barThree[num].classList.remove("one", "three", "four", "five", "six", "seven", "eight", "nine", "zero")
  barFour[num].classList.add("two")
  barFour[num].classList.remove("one", "three", "four", "five", "six", "seven", "eight", "nine", "zero")
  barFive[num].classList.add("two")
  barFive[num].classList.remove("one", "three", "four", "five", "six", "seven", "eight", "nine", "zero")
}

function makeThree(num) {
  barOne[num].classList.add("three")
  barOne[num].classList.remove("one", "two", "four", "five", "six", "seven", "eight", "nine", "zero")
  barTwo[num].classList.add("three")
  barTwo[num].classList.remove("one", "two", "four", "five", "six", "seven", "eight", "nine", "zero")
  barThree[num].classList.add("three")
  barThree[num].classList.remove("one", "two", "four", "five", "six", "seven", "eight", "nine", "zero")
  barFour[num].classList.add("three")
  barFour[num].classList.remove("one", "two", "four", "five", "six", "seven", "eight", "nine", "zero")
  barFive[num].classList.add("three")
  barFive[num].classList.remove("one", "two", "four", "five", "six", "seven", "eight", "nine", "zero")
}

function makeFour(num) {
  barOne[num].classList.add("four")
  barOne[num].classList.remove("one", "two", "three", "five", "six", "seven", "eight", "nine", "zero")
  barTwo[num].classList.add("four")
  barTwo[num].classList.remove("one", "two", "three", "five", "six", "seven", "eight", "nine", "zero")
  barThree[num].classList.add("four")
  barThree[num].classList.remove("one", "two", "three", "five", "six", "seven", "eight", "nine", "zero")
  barFour[num].classList.add("four")
  barFour[num].classList.remove("one", "two", "three", "five", "six", "seven", "eight", "nine", "zero")
  barFive[num].classList.add("four")
  barFive[num].classList.remove("one", "two", "three", "five", "six", "seven", "eight", "nine", "zero")
}

function makeFive(num) {
  barOne[num].classList.add("five")
  barOne[num].classList.remove("one", "two", "three", "four", "six", "seven", "eight", "nine", "zero")
  barTwo[num].classList.add("five")
  barTwo[num].classList.remove("one", "two", "three", "four", "six", "seven", "eight", "nine", "zero")
  barThree[num].classList.add("five")
  barThree[num].classList.remove("one", "two", "three", "four", "six", "seven", "eight", "nine", "zero")
  barFour[num].classList.add("five")
  barFour[num].classList.remove("one", "two", "three", "four", "six", "seven", "eight", "nine", "zero")
  barFive[num].classList.add("five")
  barFive[num].classList.remove("one", "two", "three", "four", "six", "seven", "eight", "nine", "zero")
}

function makeSix(num) {
  barOne[num].classList.add("six")
  barOne[num].classList.remove("one", "two", "three", "four", "five", "seven", "eight", "nine", "zero")
  barTwo[num].classList.add("six")
  barTwo[num].classList.remove("one", "two", "three", "four", "five", "seven", "eight", "nine", "zero")
  barThree[num].classList.add("six")
  barThree[num].classList.remove("one", "two", "three", "four", "five", "seven", "eight", "nine", "zero")
  barFour[num].classList.add("six")
  barFour[num].classList.remove("one", "two", "three", "four", "five", "seven", "eight", "nine", "zero")
  barFive[num].classList.add("six")
  barFive[num].classList.remove("one", "two", "three", "four", "five", "seven", "eight", "nine", "zero")
}

function makeSeven(num) {
  barOne[num].classList.add("seven")
  barOne[num].classList.remove("one", "two", "three", "four", "five", "six", "eight", "nine", "zero")
  barTwo[num].classList.add("seven")
  barTwo[num].classList.remove("one", "two", "three", "four", "five", "six", "eight", "nine", "zero")
  barThree[num].classList.add("seven")
  barThree[num].classList.remove("one", "two", "three", "four", "five", "six", "eight", "nine", "zero")
  barFour[num].classList.add("seven")
  barFour[num].classList.remove("one", "two", "three", "four", "five", "six", "eight", "nine", "zero")
  barFive[num].classList.add("seven")
  barFive[num].classList.remove("one", "two", "three", "four", "five", "six", "eight", "nine", "zero")
}

function makeEight(num) {
  barOne[num].classList.add("eight")
  barOne[num].classList.remove("one", "two", "three", "four", "five", "six", "seven", "nine", "zero")
  barTwo[num].classList.add("eight")
  barTwo[num].classList.remove("one", "two", "three", "four", "five", "six", "seven", "nine", "zero")
  barThree[num].classList.add("eight")
  barThree[num].classList.remove("one", "two", "three", "four", "five", "six", "seven", "nine", "zero")
  barFour[num].classList.add("eight")
  barFour[num].classList.remove("one", "two", "three", "four", "five", "six", "seven", "nine", "zero")
  barFive[num].classList.add("eight")
  barFive[num].classList.remove("one", "two", "three", "four", "five", "six", "seven", "nine", "zero")
}

function makeNine(num) {
  barOne[num].classList.add("nine")
  barOne[num].classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "zero")
  barTwo[num].classList.add("nine")
  barTwo[num].classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "zero")
  barThree[num].classList.add("nine")
  barThree[num].classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "zero")
  barFour[num].classList.add("nine")
  barFour[num].classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "zero")
  barFive[num].classList.add("nine")
  barFive[num].classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "zero")
}

function makeZero(num) {
  barOne[num].classList.add("zero")
  barOne[num].classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "nine")
  barTwo[num].classList.add("zero")
  barTwo[num].classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "nine")
  barThree[num].classList.add("zero")
  barThree[num].classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "nine")
  barFour[num].classList.add("zero")
  barFour[num].classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "nine")
  barFive[num].classList.add("zero")
  barFive[num].classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "nine")
}

const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

function clockTime() {
  const currentTime = new Date()
  let currentHour = currentTime.getHours()
  // currentHour = (currentHour > 12? currentHour - 12: currentHour)
  let currentMinute = currentTime.getMinutes()
  let currentSecond = currentTime.getSeconds()
  // console.log(currentHour + ":" + currentMinute + ":" + currentSecond)

  switch(currentHour) {
    case 0:
      makeZero(0);
      makeZero(1);
      break;
    case 1:
      makeZero(0);
      makeOne(1);
      break;
    case 2:
      makeZero(0);
      makeTwo(1);
      break;
    case 3:
      makeZero(0);
      makeThree(1);
      break;
    case 4:
      makeZero(0);
      makeFour(1);
      break;
    case 5:
      makeZero(0);
      makeFive(1);
      break;
    case 6:
      makeZero(0);
      makeSix(1)
      break;
    case 7:
      makeZero(0);
      makeSeven(1);
      break;
    case 8:
      makeZero(0);
      makeEight(1);
      break;
    case 9:
      makeZero(0);
      makeNine(1);
      break;
    case 10:
      makeOne(0);
      makeZero(1);
      break;
    case 11:
      makeOne(0);
      makeOne(1);
      break;
    case 12:
      makeOne(0);
      makeTwo(1);
      break;
    case 13:
      makeOne(0);
      makeThree(1);
      break;
    case 14:
      makeOne(0);
      makeFour(1);
      break;
    case 15:
      makeOne(0);
      makeFive(1);
      break;
    case 16:
      makeOne(0);
      makeSix(1);
      break;
    case 17:
      makeOne(0);
      makeSeven(1);
      break;
    case 18:
      makeOne(0);
      makeEight(1);
      break;
    case 19:
      makeOne(0);
      makeNine(1)
      break;
    case 20:
      makeTwo(0);
      makeZero(1);
      break;
    case 21:
      makeTwo(0);
      makeOne(1);
      break;
    case 22:
      makeTwo(0);
      makeTwo(1);
      break;
    case 23:
      makeTwo(0);
      makeThree(1);
      break;
    case 24:
      makeTwo(0);
      makeFour(1);
      break;

  }

  switch(currentMinute) {
    case 0:
      makeZero(2);
      makeZero(3);
      break;
    case 1:
      makeZero(2);
      makeOne(3);
      break;
    case 2:
      makeZero(2);
      makeTwo(3);
      break;
    case 3:
      makeZero(2);
      makeThree(3);
      break;
    case 4:
      makeZero(2);
      makeFour(3);
      break;
    case 5:
      makeZero(2);
      makeFive(3);
      break;
    case 6:
      makeZero(2);
      makeSix(3)
      break;
    case 7:
      makeZero(2);
      makeSeven(3);
      break;
    case 8:
      makeZero(2);
      makeEight(3);
      break;
    case 9:
      makeZero(2);
      makeNine(3);
      break;
    case 10:
      makeOne(2);
      makeZero(3);
      break;
    case 11:
      makeOne(2);
      makeOne(3);
      break;
    case 12:
      makeOne(2);
      makeTwo(3);
      break;
    case 13:
      makeOne(2);
      makeThree(3);
      break;
    case 14:
      makeOne(2);
      makeFour(3);
      break;
    case 15:
      makeOne(2);
      makeFive(3);
      break;
    case 16:
      makeOne(2);
      makeSix(3);
      break;
    case 17:
      makeOne(2);
      makeSeven(3);
      break;
    case 18:
      makeOne(2);
      makeEight(3);
      break;
    case 19:
      makeOne(2);
      makeNine(3)
      break;
    case 20:
      makeTwo(2);
      makeZero(3);
      break;
    case 21:
      makeTwo(2);
      makeOne(3);
      break;
    case 22:
      makeTwo(2);
      makeTwo(3);
      break;
    case 23:
      makeTwo(2);
      makeThree(3);
      break;
    case 24:
      makeTwo(2);
      makeFour(3);
      break;
    case 25:
      makeTwo(2);
      makeFive(3);
      break;
    case 26:
      makeTwo(2);
      makeSix(3);
      break;
    case 27:
      makeTwo(2);
      makeSeven(3);
      break;
    case 28:
      makeTwo(2);
      makeEight(3);
      break;
    case 29:
      makeTwo(2);
      makeNine(3);
      break;
    case 30:
      makeThree(2);
      makeZero(3);
      break;
    case 31:
      makeThree(2);
      makeOne(3);
      break;
    case 32:
      makeThree(2);
      makeTwo(3);
      break;
    case 33:
      makeThree(2);
      makeThree(3);
      break;
    case 34:
      makeThree(2);
      makeFour(3);
      break;
    case 35:
      makeThree(2);
      makeFive(3);
      break;
    case 36:
      makeThree(2);
      makeSix(3);
      break;
    case 37:
      makeThree(2);
      makeSeven(3);
      break;
    case 38:
      makeThree(2);
      makeEight(3);
      break;
    case 39:
      makeThree(2);
      makeNine(3);
      break;
    case 40:
      makeFour(2);
      makeZero(3);
      break;
    case 41:
      makeFour(2);
      makeOne(3);
      break;
    case 42:
      makeFour(2);
      makeTwo(3);
      break;
    case 43:
      makeFour(2);
      makeThree(3);
      break;
    case 44:
      makeFour(2);
      makeFour(3);
      break;
    case 45:
      makeFour(2);
      makeFive(3);
      break;
    case 46:
      makeFour(2);
      makeSix(3);
      break;
    case 47:
      makeFour(2);
      makeSeven(3);
      break;
    case 48:
      makeFour(2);
      makeEight(3);
      break;
    case 49:
      makeFour(2);
      makeNine(3);
      break;
    case 50:
      makeFive(2);
      makeZero(3);
      break;
    case 51:
      makeFive(2);
      makeOne(3);
      break;
    case 52:
      makeFive(2);
      makeTwo(3);
      break;
    case 53:
      makeFive(2);
      makeThree(3);
      break;
    case 54:
      makeFive(2);
      makeFour(3);
      break;
    case 55:
      makeFive(2);
      makeFive(3);
      break;
    case 56:
      makeFive(2);
      makeSix(3);
      break;
    case 57:
      makeFive(2);
      makeSeven(3);
      break;
    case 58:
      makeFive(2);
      makeEight(3);
      break;
    case 59:
      makeFive(2);
      makeNine(3);
      break;
  }

switch(currentSecond) {
    case 0:
      makeZero(4);
      makeZero(5);
      break;
    case 1:
      makeZero(4);
      makeOne(5);
      break;
    case 2:
      makeZero(4);
      makeTwo(5);
      break;
    case 3:
      makeZero(4);
      makeThree(5);
      break;
    case 4:
      makeZero(4);
      makeFour(5);
      break;
    case 5:
      makeZero(4);
      makeFive(5);
      break;
    case 6:
      makeZero(4);
      makeSix(5)
      break;
    case 7:
      makeZero(4);
      makeSeven(5);
      break;
    case 8:
      makeZero(4);
      makeEight(5);
      break;
    case 9:
      makeZero(4);
      makeNine(5);
      break;
    case 10:
      makeOne(4);
      makeZero(5);
      break;
    case 11:
      makeOne(4);
      makeOne(5);
      break;
    case 12:
      makeOne(4);
      makeTwo(5);
      break;
    case 13:
      makeOne(4);
      makeThree(5);
      break;
    case 14:
      makeOne(4);
      makeFour(5);
      break;
    case 15:
      makeOne(4);
      makeFive(5);
      break;
    case 16:
      makeOne(4);
      makeSix(5);
      break;
    case 17:
      makeOne(4);
      makeSeven(5);
      break;
    case 18:
      makeOne(4);
      makeEight(5);
      break;
    case 19:
      makeOne(4);
      makeNine(5)
      break;
    case 20:
      makeTwo(4);
      makeZero(5);
      break;
    case 21:
      makeTwo(4);
      makeOne(5);
      break;
    case 22:
      makeTwo(4);
      makeTwo(5);
      break;
    case 23:
      makeTwo(4);
      makeThree(5);
      break;
    case 24:
      makeTwo(4);
      makeFour(5);
      break;
    case 25:
      makeTwo(4);
      makeFive(5);
      break;
    case 26:
      makeTwo(4);
      makeSix(5);
      break;
    case 27:
      makeTwo(4);
      makeSeven(5);
      break;
    case 28:
      makeTwo(4);
      makeEight(5);
      break;
    case 29:
      makeTwo(4);
      makeNine(5);
      break;
    case 30:
      makeThree(4);
      makeZero(5);
      break;
    case 31:
      makeThree(4);
      makeOne(5);
      break;
    case 32:
      makeThree(4);
      makeTwo(5);
      break;
    case 33:
      makeThree(4);
      makeThree(5);
      break;
    case 34:
      makeThree(4);
      makeFour(5);
      break;
    case 35:
      makeThree(4);
      makeFive(5);
      break;
    case 36:
      makeThree(4);
      makeSix(5);
      break;
    case 37:
      makeThree(4);
      makeSeven(5);
      break;
    case 38:
      makeThree(4);
      makeEight(5);
      break;
    case 39:
      makeThree(4);
      makeNine(5);
      break;
    case 40:
      makeFour(4);
      makeZero(5);
      break;
    case 41:
      makeFour(4);
      makeOne(5);
      break;
    case 42:
      makeFour(4);
      makeTwo(5);
      break;
    case 43:
      makeFour(4);
      makeThree(5);
      break;
    case 44:
      makeFour(4);
      makeFour(5);
      break;
    case 45:
      makeFour(4);
      makeFive(5);
      break;
    case 46:
      makeFour(4);
      makeSix(5);
      break;
    case 47:
      makeFour(4);
      makeSeven(5);
      break;
    case 48:
      makeFour(4);
      makeEight(5);
      break;
    case 49:
      makeFour(4);
      makeNine(5);
      break;
    case 50:
      makeFive(4);
      makeZero(5);
      break;
    case 51:
      makeFive(4);
      makeOne(5);
      break;
    case 52:
      makeFive(4);
      makeTwo(5);
      break;
    case 53:
      makeFive(4);
      makeThree(5);
      break;
    case 54:
      makeFive(4);
      makeFour(5);
      break;
    case 55:
      makeFive(4);
      makeFive(5);
      break;
    case 56:
      makeFive(4);
      makeSix(5);
      break;
    case 57:
      makeFive(4);
      makeSeven(5);
      break;
    case 58:
      makeFive(4);
      makeEight(5);
      break;
    case 59:
      makeFive(4);
      makeNine(5);
      break;
  }

}
clockTime()
setInterval(clockTime, 1000)
