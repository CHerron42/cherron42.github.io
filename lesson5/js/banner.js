            
                let now = new Date();
    			let dayOfWeek = now.getDay();

    			//Show message based on Holiday or day of the week

    			if (dayOfWeek == 6) {
    				document.getElementById("bulletin").style.display = "block";
    			}

                else {
                    document.getElementById("bulletin").style.display = "none";
                }

                

    			
			