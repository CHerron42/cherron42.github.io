
        let tempF = parseFloat(document.getElementById('temperature').innerHTML);
    	let speed = parseFloat(document.getElementById('windSpeed').innerHTML);

       
            if (tempF <= 50 && speed >= 3) {

                let windChillFactor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);

                 document.getElementById('displayWindChill').innerHTML = Math.round(windChillFactor).toFixed(0) + "℉";
            } else {
                windChillFactor = "n/a";
                document.getElementById('displayWindChill').innerHTML = windChillFactor;
            }
        
        

    		    

		
    
        
        
     
				


