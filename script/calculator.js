let buttons = document.querySelectorAll('[type="button"]')
let inputNum = document.querySelector('[type="text"]')
let equalBtn = document.querySelector('.equalBtn')
let clearBtn = document.querySelector("[value='clear']")


for (let button of buttons) {
   button.addEventListener('click',()=>{
      if(button.value == '=') {
         return
      } else{
         display(button.value)
      }
      
   })
}

function display(input) {
   inputNum.value += input
}

equalBtn.addEventListener('click', calculate)

function calculate() {
   if(inputNum === ""){
      inputNum.value = ""
   }else{
      let answer = eval(inputNum.value)
      inputNum.value = answer
   }

}

clearBtn.addEventListener('click',clearDisplay)


function clearDisplay() {
   inputNum.value = ""

   
}