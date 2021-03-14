const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=00345bb8bc2f7487208d75072ff68c67';


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


   document.getElementById("cond").textContent = jsObject.weather[0].main;
   document.getElementById("temp").textContent = Math.round(
     jsObject.main.temp
   );
   document.getElementById("speed").textContent = Math.round(
     jsObject.wind.speed
   );
   document.getElementById("perct_humid").textContent =
     jsObject.main.humidity + "%";
   document.getElementById("rising").textContent = jsObject.sys.sunrise;
   document.getElementById("setting").textContent = jsObject.sys.sunset;



    let t = jsObject.main.temp;
    let w = jsObject.wind.speed;

       
        if (t <= 50 && w >= 3) {

            let windChillFactor = 35.74 + 
                                  0.6215 * t - 
                                  35.75 * w ** 
                                  0.16 + 0.4275 * 
                                  t * w ** 0.16;

              windChillFactor = document.getElementById("displayWindChill").innerHTML =
                                  Math.round(windChillFactor) + "&deg; " + "F";
                
            } else {
                windChillFactor = "n/a";
                document.getElementById('displayWindChill').innerHTML = windChillFactor;
            }
});


    // List the URL of the API forecast data
const apiforecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=00345bb8bc2f7487208d75072ff68c67";

// As before, fetch the forecast data, create the JSON object, console log to make sure it worked.

fetch(apiforecastURL)
  .then((response) => response.json())
  .then((jsObject) => {

    // Create an array with day names to use for five day forecast
    const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Filter the jsObject to only show data from 6:00 pm (18:00:00)
    const thefive = jsObject.list.filter((element) =>
      element.dt_txt.includes("18:00:00")
    );

    // Use a "for" loop to loop through the data and fill the table
    let day = 0;
    let i = 0;

    for (i = 0; i < thefive.length; i++) {
      let d = new Date(thefive[i].dt_txt); //date object to get date

      //write day name using array built earlier
      document.getElementById("dayofweek" + (day + 1)).textContent = dayName[d.getDay()];

      // write temperature data. Use Math.round to make it a whole number.
      document.getElementById("forecast" + (day + 1)).textContent = Math.round(thefive[day].main.temp) + ' °F'

      // give the browser the icon address
      var imagesrc = "https://openweathermap.org/img/w/" + thefive[day].weather[0].icon + ".png";

      // populate table with icons, set alt attribute using weather description from the object
      document.getElementById("imagesrc" + (day + 1)).textContent = imagesrc;
      document.getElementById("icon" + (day + 1)).setAttribute("src", imagesrc);
      document.getElementById("icon" + (day + 1)).setAttribute("alt", thefive[0].weather[0].description);

      day++;
    }
  });