const calculateTemp = () => {
    const numberTemp = document.getElementById('p2').value;
    const tempSelected = document.getElementById('p3');
    const valueTemp = p3.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) =>{
        let fahrenheit = Math.round((cel* 9/5) + 32);
        return fahrenheit;
    }
    const celToKel = (cel) =>{
        let kelvin = Math.round((parseInt(cel) + 273.15));
        return kelvin;
    }
    const fahToCel = (fah) =>{
        let celsius = Math.round((fah -32 )* 5/9);
        return celsius ;
    }
    const fahToKel = (fah) =>{
        let kelvin = Math.round(((fah-32)*(5/9)) + 273.15);
        return kelvin ;
    }
    const kelToCel = (kel) =>{
        let celsius = Math.round(kel - 273.15);
        return celsius ;
    }
    const kelToFah = (kel) =>{
        let fahrenheit = Math.round(1.8*(kel-273.15) + 32);
        return fahrenheit ;
    }

    let result1;
    let result2;

    if (valueTemp == 'cel') {
        result1 = celToFah(numberTemp)
        result2 = celToKel(numberTemp)
        document.getElementById('resultContainer').innerHTML= `Result  :  ${result1}  ° Fahrenheit and ${result2} Kelvin `;
    }
    else if(valueTemp == 'fah') {
        result1 = fahToCel(numberTemp)
        result2 = fahToKel(numberTemp)
        document.getElementById('resultContainer').innerHTML= `Result  :  ${result1}  ° Celcius and ${result2} Kelvin `;
    }
    else{
        result1 = kelToCel(numberTemp)
        result2 = kelToFah(numberTemp)
        document.getElementById('resultContainer').innerHTML= `Result  :  ${result1}  ° Celcius and ${result2} ° Fahrenheit `;
    }
}