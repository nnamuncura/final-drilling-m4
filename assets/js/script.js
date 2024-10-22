
let url = 'https://swapi.dev/api/people/';

console.log('archivo js funcionando...')
let personajesPopulares = document.querySelector('#personajesPopulares');
let personajesSecundarios = document.querySelector('#personajesSecundarios');
let personajesSignificativos = document.querySelector('#personajesSignificativos');
let listPopularCardHtml = document.querySelector('#popular-card');
let listSecondaryCardHtml = document.querySelector('#secondary-card');
let listSignificantCardHtml = document.querySelector('#significant-card');

personajesPopulares.addEventListener('mouseenter', ()=>getPolularCharacters());
personajesSecundarios.addEventListener('mouseenter', ()=>getSecundaryCharacters());
personajesSignificativos.addEventListener('mouseenter', ()=>getSignificantCharacters());

/**
 *  Función que genera el html de las card
 * @param {string} name - nombre del personaje
 * @param {number} height - altura del personaje
 * @param {number} mass - peso del personaje
 * @param {string} wherePainting - lugar donde se quiere mostrar la card (listPopularCardHtml, listSecundaryCardHtml, listSignificantCardHtml)
 * @param {string} classSection - clase de la card para los estidos (timeline-icon-populares/secundarios/significativos, entre '')
 */
function createCard(name, height, mass, wherePainting, classSection){
    console.log('Valor de classSection : ', classSection)
    let newCard = document.createElement('div')
    newCard.classList.add('col-12', 'col-md-6', 'col-lg-4')
    newCard.innerHTML = `
        <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
            <div class="${classSection}"><i class="fa fa-address-card" aria-hidden="true"></i></div>
                <div class="timeline-text">
                    <h6>${name}</h6>
                    <p>Estatura: ${height}cm. Peso: ${mass}kg.</p>
                </div>
        </div
    `;
    wherePainting.appendChild(newCard);
}

/**
 * funcion generadora de personajes
 * @param {number} start - número de inicio (puede ser 1, 6 o 12)
 * @param {number} end - número de termino (puede ser 5, 11, 17)
 * @returns {Object} datos del personaje soliciado
 */
async function* functionGenerator(start, end){
    let contador = start
    while(contador < end){
        let resp = await fetch(url+contador)
        let item = await resp.json();
        yield item;
        contador++;
    }
}

// let respPG = popularGenerator();
let respPG = functionGenerator(1, 6);
async function getPolularCharacters(){
    console.log('Paso el Mouse sobre 1-5')
        let objeto = await respPG.next()
        console.log(objeto.done)
        if(!objeto.done) {
            //console.log(objeto.value)
            const {name, height, mass} = objeto.value
            // createCardPopular(name, height, mass, listPopularCardHtml);
            createCard(name, height, mass, listPopularCardHtml, 'timeline-icon-populares')
        }
}

let respSG = functionGenerator(6, 11);
async function getSecundaryCharacters(){
    console.log('Paso el mouse sobre 6-11');
    let objeto = await respSG.next()
    if(!objeto.done){
        const {name, height, mass} = objeto.value;
        createCard(name, height, mass, listSecondaryCardHtml, 'timeline-icon-secundarios')
    }
}

let respSigG = functionGenerator(12, 17);
async function getSignificantCharacters() {
    console.log('paso el mouse sobre 12-17')
    let objeto = await respSigG.next();
    if(!objeto.done){
        const {name, height, mass} = objeto.value;
        createCard(name, height, mass, listSignificantCardHtml, 'timeline-icon-significativos')
    }
}

/**
 * -----------------------------------------------------------------------
 * funciones para revisar
 * -----------------------------------------------------------------------
 */

//funcion que crea el html para las cards
function createCardPopular(name, height, mass, wherePainting){
    let newCard = document.createElement('div')
    newCard.classList.add('col-12', 'col-md-6', 'col-lg-4')
    newCard.innerHTML = `
        <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
            <div class="timeline-icon-populares"><i class="fa fa-address-card" aria-hidden="true"></i></div>
                <div class="timeline-text">
                    <h6>${name}</h6>
                    <p>Estatura: ${height}cm. Peso: ${mass}kg.</p>
                </div>
        </div
    `;
    //wherePainting => listPopularCardHtml, listSecundaryCardHtml, listSignificantCardHtml
    wherePainting.appendChild(newCard);
}

//genera personajes populares del 1 al 5
async function* popularGenerator(){
    let contador = 1
    while(contador < 6){
        let resp = await fetch(url+contador)
        let item = await resp.json();
        yield item;
        contador++;
    }
}
