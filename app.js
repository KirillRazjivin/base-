const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const button = document.getElementById('submit')
console.log(minus)
let action = '' 

plus.onclick = function(){
    action = '+'
 }

 minus.onclik = function(){
    action = '-'
 }

function color(result){
    if(result < 0){
        resultElement.style.color = 'red'
    }else{
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result

}

function computeNumbersWithAction(val1, val2, actionNumbers){
    const num1 = Number(val1.value)
    const num2 = Number(val2.value)
    return actionNumbers === '+' ? num1 + num2 : num1 - num2
    
}
button.onclick = function(){
    const sum = computeNumbersWithAction(input1, input2, action)
    color(sum)
}

