// <!-- // <div id="card">
//             <h2>Il miglior smashburger del mondo</h2>
//             <h3>Smashiamo con passione dal 2020</h3>
//             <img src="../assets/card.jpg">
//             <h2>Ordina online o vienici a trovare!</h2>
//         </div> -->

 
import cardImg from '../assets/card.jpg';
const content = document.querySelector('#content');


export function loadPage(){
const card = document.createElement('div');
card.id = 'card';

const title = document.createElement('h2');
title.textContent = 'Il miglior smashburger del mondo';

const subtitle = document.createElement('h3');
subtitle.textContent = 'Smashiamo con passione dal 2020'

const img = document.createElement('img');
img.src = cardImg;

const bottomText = document.createElement('h2');
bottomText.textContent = 'Ordina online o vienici a trovare!'

card.appendChild(title)
card.appendChild(subtitle)
card.appendChild(img)
card.appendChild(bottomText)

content.appendChild(card)
}

