const requestURL = 'https:////byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        towns.forEach(town => {
            if (town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven"){
                let card = document.createElement('article')
                let div = document.createElement('div')
                let h3 = document.createElement('h3');
                let motto = document.createElement('h3');
                let year = document.createElement('p');
                let people = document.createElement('p');
                let rain = document.createElement('p');
                let image = document.createElement('img');

                div.setAttribute('class', 'tInfo')
                h3.textContent = town.name;
                h3.setAttribute('class', 'tName');
                motto.textContent = town.motto;
                motto.setAttribute('class', 'tMoto');
                year.textContent = "Year Founded: " + town.yearFounded;
                people.textContent = "Population: " + town.currentPopulation;
                rain.textContent = "Average Rain Fall: " + town.averageRainfall;
                image.setAttribute('src', `images/homepage/${town.photo}`);
                image.setAttribute('alt', town.name);

                div.appendChild(h3);
                div.appendChild(motto);
                div.appendChild(year);
                div.appendChild(people);
                div.appendChild(rain);
                card.appendChild(div);
                card.appendChild(image);

                document.querySelector('div.cards').appendChild(card);
            }
        });

    });