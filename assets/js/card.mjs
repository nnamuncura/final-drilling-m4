/**
 *  Función que genera el html de las card
 * @param {string} name - nombre del personaje
 * @param {number} height - altura del personaje
 * @param {number} mass - peso del personaje
 * @param {string} wherePainting - lugar donde se quiere mostrar la card (listPopularCardHtml, listSecundaryCardHtml, listSignificantCardHtml)
 * @param {string} classSection - clase de la card para los estidos (timeline-icon-populares/secundarios/significativos, entre '')
 */
function createCard(name, height, mass, wherePainting, classSection){
    //console.log('Valor de classSection : ', classSection)
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

export default createCard

