const form = document.querySelector("form")

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const wg = document.querySelector('#wg')


    if(height === '' || height < 0 || isNaN(height) ){
        results.innerHTML = `Please enter valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight) ){
        results.innerHTML = `Please enter valid weight ${weight}`
    }
    else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2)

        // show the result

        results.innerHTML = `<span>${bmi}</span>`

        
        // EXTRA WORK WE GET (UNDERWEIGHT, NORMAL RANGE, OVERWEIGHT)


        if (bmi < 18.6) {
            wg.innerHTML = `Underweight`;
        } 
        else if (bmi >= 18.6 && bmi <= 24.9) {
            wg.innerHTML = `Normal range`;
        } 
        else {
            wg.innerHTML = `Overweight`;
        }
    }

})
