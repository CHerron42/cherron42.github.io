            window.onload = function toggleBanner() {
                let now = new Date();
    			let dayOfWeek = now.getDay();

    			//hide message based on Holiday or day of the week

    			if (dayOfWeek != 5) {
    				document.getElementById("bulletin").classList.toggle("hide");
    			}
            }


                

                

    			
			