//Create an air-quality-index.js program.
//Google the AQI in your area and define an aqi variable with that number.
//Air quality index(ktm.npl): 123 
let aqi=123;
if (aqi <= 50) { // AQI = 0-50
    console.log("Air quality is satisfactory");
} 
else if((aqi>=51) && (aqi < 100)){  // AQI= 51-100
    console.log("Acceptable air quality")
}
else if((aqi>=101) && (aqi < 150)){  // AQI = 101-150
    console.log("Members of sensitive groups") 
}
else if((aqi>=151) && (aqi < 200)){  // AQI= 151-200
    console.log("Everyone may begin to experience health effects")
}
else if((aqi>=201) && (aqi < 300)){  // AQI=  201-300
    console.log("Health alert: everyone may experience more serious health effects.")
}
else if (aqi >= 301) { // AQI = 301 and above
    console.log("Health warnings of emergency conditions");
} else { // Handle unexpected cases
    console.log("Invalid AQI value");
}
