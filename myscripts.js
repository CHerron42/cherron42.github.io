<script>

			
			
    function displayTime() {
        // Call information from Computer's Clock
        // Set the date to numerical values
        var now = newDate(); 
        var currentYear = now.getFullYear();
        var month = now.getMonth();
        var dayOfMonth = now.getDate();
        var dayOfWeek = now.getDay();

        // Set the time to numerical values
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        // Process for 12 hour clock

        If (hours > 12) {
            hours == hours - 12;

        }


        document.getElementById("currentTime").innerHTML = dayOfMonth + "/" + month + "/" + currentYear;
    }


</script>