const form = document.querySelector('form')
// console.log(form)

form.addEventListener('submit',function (e){ 
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    console.log(height);
    console.log(weight)

    if(height ==='' || height < 0 || isNaN(height)){
       result.innerHTML = `Please enter valid height ${height}`
    }
    else if(weight ==='' || weight < 0 || isNaN(weight))
    {
       result.innerHTML = `Please enter valid weight ${weight}`
    }
    else {
            const bmi = (weight / ((height * height)/10000)).toFixed(2);
            //show the result
            if(bmi < 18.6){
                 result.innerHTML = `<span>BMI : ${bmi} and is Under Weight</span>`;
                 console.log(`BMI is ${result}`)
            }
            else if(bmi > 18.6 && bmi< 24.9){
                 result.innerHTML = `<span>BMI : ${bmi} and is in Normal Range</span>`;
                 console.log(`BMI is ${result}`)
            }else
            result.innerHTML = `<span>BMI : ${bmi} and is Overweight</span>`;
                 console.log(`BMI is ${result}`)
    }
}

)


