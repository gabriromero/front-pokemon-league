const horarios_jornada = [
    [new Date(2023, 2, 13), new Date(2023, 2, 19)],
    [new Date(2023, 2, 20), new Date(2023, 2, 26)],
    [new Date(2023, 2, 27), new Date(2023, 3, 2)],
    [new Date(2023, 3, 3), new Date(2023, 3, 9)],
    [new Date(2023, 3, 10), new Date(2023, 3, 16)],
    [new Date(2023, 3, 17), new Date(2023, 3, 23)],
    [new Date(2023, 3, 24), new Date(2023, 3, 30)],
    [new Date(2023, 4, 1), new Date(2023, 4, 7)],
    [new Date(2023, 4, 8), new Date(2023, 4, 14)],
];

export const evsMaximos = {
    1:30, 2:60, 3:90, 4:160, 
    5:230, 6:300, 7:370, 8:440, 9:"MAX"
}

export const statsMaximos = {
    1:389, 2:419, 3:449, 4:449, 
    5:499, 6:499, 7:549, 8:549, 9:"MAX"
}

export const nivelesPokemon = {
    1: [11,12,13], 2: [15,16,17], 3: [17,18,19], 4: [22,23,24,25], 
    5: [28,29,30,31], 6: [31,31,32,32,33], 7: [33,33,34,34,35], 8: [38,39,40,40,41,41], 9: [50,50,50,50,50,50]
}

export const potenciaMt = {
    "1-5": 70,
    "6-7": 90,
    "8-9": "MAX",
}

const nuevasRutas = {
    1: ["ruta1","ruta2","ruta3"], 2: ["ruta4","ruta5","ruta6"], 3: ["ruta7","ruta8","ruta9"], 4: ["ruta10","ruta11","ruta12"], 
    5: ["ruta13","ruta14","ruta15"], 6: ["ruta16","ruta17","ruta18"], 7: ["ruta19","ruta20","ruta21"], 8: ["ruta22","ruta23","ruta24"]
}

const handicaps = {
	"3": "1 Pkm menos",
	"4": "Mostrar equipo",
	"5": "No objetos",
	"6": "Intercambio pkm",
	"7": "Elegir inicial",
	"8": "1 Pkm menos",
	"9": "No cambios",
	"10": "Rival x3",
};

export const normasRuta = {
    "evsMaximos": evsMaximos[getJornada()],
    "statsMaximos": statsMaximos[getJornada()],
    "nivelesPokemon": nivelesPokemon[getJornada()],
    "numeroPokemon": nivelesPokemon[getJornada()].length,
    "nuevasRutas": nuevasRutas[getJornada()]
}

export function getJornada() {
    const fechaActual = new Date();
    const posicionJornada = horarios_jornada.findIndex(([startDay, finalDay]) => fechaActual >= startDay && fechaActual <= finalDay);

    return posicionJornada === -1 ? -1 : posicionJornada + 1;
}

export const minHandicap = Object.keys(handicaps).reduce((a, b) => Math.min(a, b));

export function getHandicap(entero) {
    if(entero < minHandicap) return "Sin handicap";

    const highestHandicap = Object.keys(handicaps).reduce((a, b) => Math.max(a, b));
    if(entero > highestHandicap) entero = highestHandicap;

    let allHandicaps = "";
    for(let i = minHandicap; i <= entero; i++) {
        allHandicaps += `<p>${handicaps[i]}</p>`;
    }

    return allHandicaps;
}

export const API_URL = 'https://pokemon-league-api.herokuapp.com'
export const API_PKM = 'https://pokeapi.co/api/v2/pokemon'


