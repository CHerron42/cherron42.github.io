const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        towns.forEach(town => {
            if (town.name == "Soda Springs"){
                let event = document.createElement('div')
                let div = document.createElement('div')
 
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');

                div.setAttribute('class', 'eventInfo')
                p1.textContent = town.events[0];
                p2.textContent = town.events[1];
                p3.textContent = town.events[2];
                p4.textContent = town.events[3];


                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);
                div.appendChild(p4);
                event.appendChild(div);

                document.querySelector('div.current-events').appendChild(event);
            }
        });

    });