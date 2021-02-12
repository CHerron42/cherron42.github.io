		let tempF = parseFloat(document.getElementById('temperature').value);
    	let speed = parseFloat(document.getElementById('windSpeed').value);

			


		function windChill (tempF,speed) {
            if((tempF<=50) && (speed>=3)) {

    		    let windChillFactor = 35.74 + 0.6215 * tempF - 35.75 * speed ** 0.16 + 0.4275 * tempF * speed ** 0.16;
            }

            else{
                let windChillFactor = 0;
            }

    		    return Math.round(windChillFactor);	 

		}
    
        let wc = windChill(tempF,speed);
        document.getElementById('displayWindChill').textContent = wc;


