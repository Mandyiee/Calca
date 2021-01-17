let input1 = document.getElementById("History");
let input2 = document.getElementById("Result");
var nums = document.getElementById("numbers");
var operators = document.getElementById("operators");

function evaluate(inp) {
    let final = checkInput(inp)
    if(inp.length = 0){
      input2.value = ' ';
    }else {
      input2.value = final;
    }
}

var figures = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0", "="]
for (let x = 0; x < figures.length; x++) {
  var keys = document.createElement("input");
  keys.setAttribute("type", "button")
  keys.classList.add("tabs")
  keys.value = figures[x]
  nums.appendChild(keys)
}

var tabs = document.querySelectorAll(".tabs");

tabs.forEach(function(element) {
  element.addEventListener("click", function() {
    if (element.value == "=") {
      evaluate(input1.value);
      
    } else {
      input1.value += element.value
      evaluate(input1.value);
    }
    
  })
});
var operator = ["Del", "/", "*", "-", "+"];
for (var i = 0; i < operator.length; i++) {
  var operate = document.createElement("input");
  operate.value = operator[i];
  operate.classList.add("tabOperate")
  operate.setAttribute("type", "button")
  operators.appendChild(operate);
}
var operateTab = document.querySelectorAll(".tabOperate")
operateTab.forEach((item) => {
  item.addEventListener("click", () => {
    if(item.value == "Del"){
 input1.value = (input1.value).slice(0,-1);
 input2.value = ' ';
    }  else {
         input1.value += item.value
      
    
    }
  })
})

const checkInput = (answer) => {
  
  
  answer = answer.toLocaleString()
  try {
  let  a = eval(answer);
  return a.toLocaleString();
  }
  catch (err) {
    return "NaN"
  }
}
