let firstValue = ""
let secondValue = ""
let displayCon = document.querySelector('.display')
let resultCon = document.querySelector('.result')
let numbers = document.querySelectorAll('.number')
let symbols = document.querySelectorAll('.symbol')
const allSymbols = ['+', '-', '&times;', '÷', '%', ]

function cal() {
  let string3 = displayCon.innerText
  let string2 = string3.replace(/÷/g, '/')
  let string1 = string2.replace(/×/g, '*')
  let string = string1.replace(/%/g, '*0.01')
  resultCon.innerText = eval(string).toLocaleString()
}

function calculate() {
  resultCon.innerText = ''
  
  let string3 = displayCon.innerText
  let string2 = string3.replace(/÷/g, '/')
  let string1 = string2.replace(/×/g, '*')
  let string = string1.replace(/%/g, '*0.01')
  displayCon.innerText = eval(string)
}
numbers.forEach(item => {
  item.addEventListener('click', () => {


    if (displayCon.innerText.charAt(displayCon.innerText.length - 1) == '-') {
      displayCon.innerText += item.innerText
      cal()
    } else if ((displayCon.innerText.charAt(displayCon.innerText.length - 1) == '-') || displayCon.innerText.includes('-')) {
      displayCon.innerText += item.innerText
      cal()
    } else if (displayCon.innerText.charAt(displayCon.innerText.length - 1) == '÷' || displayCon.innerText.includes('÷')) {
      displayCon.innerText += item.innerText
      cal()

    } else if (displayCon.innerText.charAt(displayCon.innerText.length - 1) == '×' || displayCon.innerText.includes('×')) {
      displayCon.innerText += item.innerText
      cal()

    } else if (displayCon.innerText.charAt(displayCon.innerText.length - 1) == '+' || displayCon.innerText.includes('+')) {
      displayCon.innerText += item.innerText
      cal()

    }
    else {

      displayCon.innerText += item.innerText
      firstValue += item.innerText
    }
  })
})


symbols.forEach(item => {
  item.addEventListener('click', () => {
    if (item.innerText =='×' && displayCon.innerText.length == 0) {
      
      displayCon.innerText += ''
    } else if (item.innerText =='÷' && displayCon.innerText.length == 0) {
      
      displayCon.innerText += ''
    } else if (item.innerText == "C") {
      displayCon.innerText = displayCon.innerText.slice(0, -1)
      resultCon.innerText = ""
    } else if (item.innerText == "CE") {
      displayCon.innerText = ""
      resultCon.innerText = ""
    } else if (displayCon.innerText.charAt(displayCon.innerText.length - 1) == '-') {
      displayCon.innerText = displayCon.innerText.slice(0, -1)
      resultCon.innerText = ""
      displayCon.innerText += item.innerText
    } else if (displayCon.innerText.charAt(displayCon.innerText.length - 1) == '+') {
      displayCon.innerText = displayCon.innerText.slice(0, -1)
      displayCon.innerText += item.innerText
    } else if (displayCon.innerText.charAt(displayCon.innerText.length - 1) == '÷') {
      displayCon.innerText = displayCon.innerText.slice(0, -1)
      displayCon.innerText += item.innerText
    } else if (displayCon.innerText.charAt(displayCon.innerText.length - 1) == '×'){
      displayCon.innerText = displayCon.innerText.slice(0, -1)
      displayCon.innerText += item.innerText
    } else if (item.innerText == '=') {
      calculate()
    } else if (displayCon.innerText.charAt(displayCon.innerText.length - 1) == '%') {
      if (item.innerText == '%') {
        displayCon.innerText += ""
      } else {
        displayCon.innerText += item.innerText
      }
    } else if (displayCon.innerText.charAt(displayCon.innerText.length - 1) == '.') {
      displayCon.innerText = displayCon.innerText.slice(0, -1)
      displayCon.innerText += item.innerText
    }
    else {
      displayCon.innerText += item.innerText
    }

  })
})
