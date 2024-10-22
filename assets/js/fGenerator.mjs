let url = 'https://swapi.dev/api/people/';

/**
 * funcion generadora de personajes
 * @param {number} start - número de inicio (puede ser 1, 6 o 12)
 * @param {number} end - número de termino (puede ser 6, 11, 17)
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

export default functionGenerator