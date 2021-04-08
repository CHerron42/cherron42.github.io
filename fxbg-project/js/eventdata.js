const requestURL = 'https://cherron42.github.io/fxbg-project/js/current-events.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const town = jsonObject['town'];
        town.forEach(town => {
            
                let event = document.createElement('div')
                let div = document.createElement('div')
 
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let p5 = document.createElement('p');
                
                

                div.setAttribute('class', 'eventInfo')
                p1.textContent = town.events[0];
                p2.textContent = town.events[1];
                p3.textContent = town.events[2];
                p4.textContent = town.events[3];
                p5.textContent = town.events[4];
               


                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);
                div.appendChild(p4);
                div.appendChild(p5);
                event.appendChild(div);

                document.querySelector('div.current-events').appendChild(event);
            
        });

    });