/* <div id="menu">  
        <div class="plate"><img src="../assets/burger1.jpg">
        <p>Cheeseburger</p></div>
        <div class="plate"><img src="../assets/burger1.jpg">
        <p>Cheeseburger</p></div>
        <div class="plate"><img src="../assets/burger1.jpg">
        <p>Cheeseburger</p></div>
        <div class="plate"><img src="../assets/burger1.jpg">
        <p>Cheeseburger</p></div>
        
      </div>  */

import menuImg from "../assets/burger1.jpg"

const content = document.querySelector('#content')

export function loadMenu(){
    const menu = document.createElement('div');
    menu.id = 'menu'

    for (let i = 0; i < 4; i++){
        const plate = document.createElement('div');
        plate.classList.add('plate')

        const img = document.createElement('img');
        img.src = menuImg;

        const text = document.createElement('p');
        text.textContent = 'Cheeseburger';

        plate.appendChild(img);
        plate.appendChild(text);
        menu.appendChild(plate)
    }

    content.appendChild(menu)

}