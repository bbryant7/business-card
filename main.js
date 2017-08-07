// // call data
// // identify ul and append data to ul
// // append person to each li
// let container = document.querySelector('.container');
// let li1 = document.createElement('li');
// container.appendChild(li1);
//
//
//
// function characters () {
// console.log(this.responseText);
//
// }
//
// let req = new XMLHttpRequest();
// req.addEventListener("load",characters);
// req.open("GET", "http://swapi.co/api/people/");
// req.send();





// 1. First, find our UL Container

// 2. Create our Ajax Request


// 1. First, find our UL Container
let container = document.querySelector('.characters');


// 2. Create our Ajax Request
let request = new XMLHttpRequest();
request.addEventListener("load", displayCharacters);
request.open('GET', 'http://swapi.co/api/people/');
request.send();

// Our display function
function displayCharacters () {
  // Parse our response text
  let data = JSON.parse(this.responseText);
  let list = '';
  console.log('data', data);
  console.log('data.results', data.results);
  data.results.forEach( function (person) {
    list += `<li>${person.name}</li>`;
  });

  container.innerHTML = list;
}
