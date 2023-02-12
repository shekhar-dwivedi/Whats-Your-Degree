
function convertTemperature() {
  const temperature = parseFloat(document.getElementById("degree").value);
  const from = document.getElementById("intype").value;
  const unit = document.getElementById("outtype").value;
  let convertedTemperature;
  if (from === "C" && unit === "K") {
    convertedTemperature = (temperature + 273.15).toFixed(3);
  } else if (from === "C" && unit === "F") {
    convertedTemperature = (temperature * 9/5 + 32).toFixed(3);
  } else if (from === "C" && unit === "C") {
    convertedTemperature = temperature;
  } else if (from === "K" && unit === "C") {
    convertedTemperature = (temperature - 273.15).toFixed(3);
  } else if (from === "K" && unit === "F") {
    convertedTemperature = (temperature * 9/5 - 459.67).toFixed(3);
  } else if (from === "K" && unit === "K") {
    convertedTemperature = temperature;
  } else if (from === "F" && unit === "C") {
    convertedTemperature = ((temperature - 32) * 5/9).toFixed(3);
  } else if (from === "F" && unit === "K") {
    convertedTemperature = ((temperature + 459.67) * 5/9).toFixed(3);
  }
  else{
    convertedTemperature = temperature;
  }
  if(unit==="C"){
  document.getElementById("output").innerHTML = `${convertedTemperature}  &#8451 `;}
  else if(unit==="F"){
    document.getElementById("output").innerHTML = `${convertedTemperature}  &#8457 `;}
    else{
      document.getElementById("output").innerHTML = `${convertedTemperature}  K `;
    }
    }
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  convertTemperature();
});