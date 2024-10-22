import createCard from "./card.mjs";
import functionGenerator from "./fGenerator.mjs";

let personajesPopulares = document.querySelector('#personajesPopulares');
let personajesSecundarios = document.querySelector('#personajesSecundarios');
let personajesSignificativos = document.querySelector('#personajesSignificativos');
let listPopularCardHtml = document.querySelector('#popular-card');
let listSecondaryCardHtml = document.querySelector('#secondary-card');
let listSignificantCardHtml = document.querySelector('#significant-card');

personajesPopulares.addEventListener('mouseenter', ()=>getPolularCharacters());
personajesSecundarios.addEventListener('mouseenter', ()=>getSecundaryCharacters());
personajesSignificativos.addEventListener('mouseenter', ()=>getSignificantCharacters());

//Solicita los datos de los personajes populares
let respPG = functionGenerator(1, 6);
async function getPolularCharacters(){
    //console.log('Paso el Mouse sobre 1-5')
        let objeto = await respPG.next()
        //console.log(objeto.done)
        if(!objeto.done) {
            const {name, height, mass} = objeto.value
            createCard(name, height, mass, listPopularCardHtml, 'timeline-icon-populares')
        }
}

//Solicita los datos de los personajes secundarios
let respSG = functionGenerator(6, 11);
async function getSecundaryCharacters(){
    //console.log('Paso el mouse sobre 6-11');
    let objeto = await respSG.next()
    if(!objeto.done){
        const {name, height, mass} = objeto.value;
        createCard(name, height, mass, listSecondaryCardHtml, 'timeline-icon-secundarios')
    }
}

//Solicita los datos de los personajes significativos
let respSigG = functionGenerator(12, 17);
async function getSignificantCharacters() {
    //console.log('paso el mouse sobre 12-17')
    let objeto = await respSigG.next();
    if(!objeto.done){
        const {name, height, mass} = objeto.value;
        createCard(name, height, mass, listSignificantCardHtml, 'timeline-icon-significativos')
    }
}

