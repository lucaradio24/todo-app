//  <div id="about">
//         <img src="../assets/about.jpg">
//         <div id="chi">
//           <h2>Chi siamo:</h2>
//           <p>Siamo un gruppo di appassionati del buon cibo che ha deciso di portare a Napoli lo spirito autentico dello smashburger. Crediamo che un panino debba essere semplice ma indimenticabile: carne di qualità, cottura perfetta e ingredienti freschi che esaltano ogni morso.</p>
//         </div>
//         <div id="mission">
//           <h2>La nostra mission:</h2>
//           <p>Offrire uno smashburger che unisca il meglio delle tradizioni americane con l’anima napoletana: gusto deciso, convivialità e un’esperienza che ti fa venire voglia di tornare.</p>
//         </div>
//         <div id="inspo">  
//           <h2>A cosa ci ispiriamo:</h2>
//           <p>Ci ispiriamo allo street food americano, reinterpretato con la passione e l’attenzione tipiche della nostra città. Ogni burger nasce dall’incontro tra la cultura pop e quella gastronomica napoletana, con un tocco di creatività che rende ogni ricetta unica.</p>
//         </div>  
//       </div>

import aboutImg from '../assets/about.jpg'

const content = document.querySelector('#content')

export function loadAbout(){
    const about = document.createElement('div')
    about.id = 'about';

    const img = document.createElement('img');
    img.src = aboutImg;

    about.appendChild(img)

    const sections = [
        {
            id:'chi',
            h2: 'Chi siamo:',
            p: 'Siamo un gruppo di appassionati del buon cibo che ha deciso di portare a Napoli lo spirito autentico dello smashburger. Crediamo che un panino debba essere semplice ma indimenticabile: carne di qualità, cottura perfetta e ingredienti freschi che esaltano ogni morso.'
        },
        {
            id:'mission',
            h2:'La nostra missione:',
            p:'Offrire uno smashburger che unisca il meglio delle tradizioni americane con l’anima napoletana: gusto deciso, convivialità e un’esperienza che ti fa venire voglia di tornare.'
        },
        {   id: 'inspo',
            h2: 'A cosa ci ispiriamo:',
            p: 'Ci ispiriamo allo street food americano, reinterpretato con la passione e l’attenzione tipiche della nostra città. Ogni burger nasce dall’incontro tra la cultura pop e quella gastronomica napoletana, con un tocco di creatività che rende ogni ricetta unica.'
        }
    ]

    for (let i = 0; i < sections.length; i++){
       const section = document.createElement('div');
       section.id = sections[i].id;

       const h2 = document.createElement('h2');
       h2.textContent = sections[i].h2;

       const p = document.createElement('p');
       p.textContent = sections[i].p;

       section.appendChild(h2);
       section.appendChild(p)
       about.appendChild(section)
    }

    content.appendChild(about)
}
