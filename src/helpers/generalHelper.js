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

const evsMaximos = {
    1:100, 2:200, 3:300, 4:400, 
    5:500, 6:600, 7:700, 8:"MAX"
}

const statsMaximos = {
    1:100, 2:200, 3:300, 4:400, 
    5:500, 6:600, 7:700, 8:"MAX"
}

const nivelesPokemon = {
    1: [12], 2: [15,16,17], 3: [18,19,20], 4: [21,22,23,32,22,1], 
    5: [24,25,26], 6: [27,28,29], 7: [30,31,32], 8: [33,34,35]
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


