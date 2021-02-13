		let tempF = parseFloat(document.getElementById('temperature').value);
    	let speed = parseFloat(document.getElementById('windSpeed').value);

            if (tempF <= 50 && speed >= 3) {

    		    var windChillFactor = 35.74 + 0.6215 * tempF - 35.75 * speed ** 0.16 + 0.4275 * tempF * speed ** 0.16;

                document.getElementById('displayWindChill').innerHTML = Math.round(windChillFactor).toFixed(0);
            }

                else{
                windChillFactor = "0";
                document.getElementById('displayWindChill').innerHTML = windChillFactor;
            }

    		    

		
    
        
        
     
				


