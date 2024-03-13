//1. where to add
const placesList = document.getElementById('places-list');
//console.log(placesList);
//2. what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';
//3. add th child
placesList.appendChild(li);

//1. where d add
const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
mainContainer.appendChild(section);
const h1 = document.createElement('hi');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
section.appendChild(ul)
const li1 = document.createElement('li');
li1.innerText = 'birani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Beef';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'burger';
ul.appendChild(li3);

//set innerHtml directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
<li>T-shirt</li>
<li>Pent</li>
<li>Juta</li>
</ul>
`
mainContainer.appendChild(sectionDress);
