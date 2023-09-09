const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const plusplusBtn = document.querySelector('.plusplus')
const minusminusBtn = document.querySelector('.minusminus')
const submitBtn = document.querySelector('.submitBtn')
const resultEL = document.querySelector('.result')

let action = '+'

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}
plusplusBtn.onclick = function () {
    action = '*'
}

minusminusBtn.onclick = function () {
    action = '/'
}
    
submitBtn.onclick = function () {
    if(action === '+'){
        const sum = Number(input1.value)+Number(input2.value)
        resultEL.textContent = sum 
    }else if(action==='-'){
        const sum = Number(input1.value)-Number(input2.value)
        resultEL.textContent = sum 
    }else if(action==='*'){
        const sum = Number(input1.value)*Number(input2.value)
        resultEL.textContent = sum 
    }else{
        const sum = Number(input1.value)/Number(input2.value)
        resultEL.textContent = sum 
    }
}