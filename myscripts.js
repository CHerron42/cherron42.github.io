

	let daynames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    
    ];	

    let months = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December",
    ];
			 
        let now = newDate(); 
        let dayName = daynames[now.getDay()];
        let month = months[now.getMonth()];
        let fullDate = dayName + ", " + month + " " + now.getDate() + ", " + now.getFullYear();

      
        document.getElementById("currentDate").textContent = fulldate;
        document.getElementById("currentYear").textContent = d.getFullYear();
        

        let pagelastModified = new Date(document.lastModified);
        document.getElementById("lastModified").textContent = pagelastModified;
