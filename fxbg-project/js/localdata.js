const requestURL = 'https://cherron42.github.io/fxbg-project/js/local-businesses.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const business = jsonObject['business'];
    for (let i = 0; i < business.length; i++ ) {
let card = document.createElement('section');
let image =document.createElement('img');
let h2 = document.createElement('h2');
let streetAddress = document.createElement('p');
let siteAddress = document.createElement('p');



image.setAttribute('src', business[i].photo);
image.setAttribute('alt', business[i].name);
h2.textContent = business[i].name;
streetAddress.textContent = 'Street Address:' + ' ' + business[i].address;
siteAddress.textContent = 'Website:' + ' ' + business[i].website;


card.appendChild(h2);
card.appendChild(streetAddress);
card.appendChild(siteAddress);
card.appendChild(image);

document.querySelector('div.cardDirectory').appendChild(card);
}
  });
