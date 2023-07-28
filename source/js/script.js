let $ = document
let weightInput = $.querySelector('#weight')
let heightInput = $.querySelector('#height')
let weightVal = $.querySelector('#weight-val')
let heightVal = $.querySelector('#height-val')
let finalBMI = $.querySelector('#result')
let category = $.querySelector('#category')

function calculate() {
    let weightValue = weightInput.value
    let heightValue = heightInput.value

    weightVal.innerHTML = `${weightValue} kg`
    heightVal.innerHTML = `${heightValue} cm`

    let heightInM = heightValue / 100

    let BMI = weightValue / (heightInM ** 2)
    let result = BMI.toFixed(1)
    finalBMI.innerHTML = result
    if(result <= 18.4){
        category.innerHTML = "Underweight"
        category.style.color = 'yellow'
        finalBMI.style.color = 'yellow'
    }else if(result >= 18.5 && result <= 24.9){
        category.innerHTML = "Normal"
        category.style.color = 'green'
        finalBMI.style.color = 'green'
    }else if(result >= 24.5 && result <= 39.9){
        category.innerHTML = "Overweight"
        category.style.color = 'orange'
        finalBMI.style.color = 'orange'
    }else {
        category.innerHTML = "Obese"
        category.style.color = 'red'
        finalBMI.style.color = 'red'
    }

}