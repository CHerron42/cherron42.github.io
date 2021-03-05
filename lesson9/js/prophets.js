const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
let card = document.createElement('section');
let image =document.createElement('img');
let h2 = document.createElement('h2');
let dob = document.createElement('p');
let place = document.createElement('p');
let los = document.createElement('p');
let dod = document.createElement('p');


image.setAttribute('src', prophets[i].imageurl);
h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
dob.textContent = 'Date of Birth:' + ' ' + prophets[i].birthdate;
place.textContent = 'Birth place:' + ' ' + prophets[i].birthplace;
los.textContent = 'Length of Service:' + ' ' + prophets[i].length + ' yrs.';
dod.textContent = 'Date of Death:' + ' ' + prophets[i].death;

card.appendChild(h2);
card.appendChild(dob);
card.appendChild(place);
card.appendChild(los);
card.appendChild(dod);
card.appendChild(image);

document.querySelector('div.cards').appendChild(card);
}
  });



  













