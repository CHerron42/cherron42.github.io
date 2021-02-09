            function announcement() {
                let now = new Date();
    			let dayOfWeek = now.getDay();

    			//show message based on Holiday or day of the week

    			if (dayOfWeek == 0) {
    				document.getElementById("bulletin").style.display="block";
                }
                
                else {
                    document.getElementById("bulletin").style.display="none";
    			}
            }
            


                

                

    			
			