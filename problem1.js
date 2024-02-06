/*
### Task-1: 
Write a function to convert temperature from Celsius to Fahrenheit.

---
*/
function convertCelsiusToFahrenheit(temperature){
    let Fahrenheit = (9*temperature)/5 + 32;
    return Fahrenheit;
}
let CelsiusTemperature = 10;
let FahrenheitTemperature = convertCelsiusToFahrenheit(CelsiusTemperature);
console.log(CelsiusTemperature, 'celsius =', FahrenheitTemperature, 'fahrenheit');
