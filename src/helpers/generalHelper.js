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
    1:389, 2:419, 3:449, 4:499, 
    5:499, 6:559, 7:559, 8:559, 9:"MAX"
}

/*
JOHTO:
export const statsMaximos = {
    1:389, 2:419, 3:449, 4:449, 
    5:499, 6:499, 7:549, 8:549, 9:"MAX"
}
*/

export const nivelesPokemon = {
    1: [12,13,14], 2: [19,20,21], 3: [22,23,24], 4: [26,27,28,29], 
    5: [40,41,42,43], 6: [42,43,43,44,45], 7: [45,46,46,47,47], 8: [48,48,49,49,50,50], 9: [50,50,50,50,50,50]
}

/*
JOHTO:
export const nivelesPokemon = {
    1: [11,12,13], 2: [15,16,17], 3: [17,18,19], 4: [22,23,24,25], 
    5: [28,29,30,31], 6: [31,31,32,32,33], 7: [33,33,34,34,35], 8: [38,39,40,40,41,41], 9: [50,50,50,50,50,50]
}
*/

export const potenciaMt = {
    "1-5": 70,
    "6-7": 90,
    "8-9": "MAX",
}

const nuevasRutas = {
    1: [["Pueblo Paleta","https://www.wikidex.net/wiki/Pueblo_Paleta"],["Ruta 1","https://www.wikidex.net/wiki/Ruta_1_(Kanto)"],["Ciudad Verde","https://www.wikidex.net/wiki/Ciudad_Verde"],
        ["Ruta 22","https://www.wikidex.net/wiki/Ruta_22_(Kanto)"],["Ruta 2","https://www.wikidex.net/wiki/Ruta_2_(Kanto)"],["Bosque Verde","https://www.wikidex.net/wiki/Bosque_verde"],
        ["Ciudad Plateada","https://www.wikidex.net/wiki/Ciudad_plateada"]], 
    2: [["Ruta 3","https://www.wikidex.net/wiki/Ruta_3_(Kanto)"],["Monte Moon","https://www.wikidex.net/wiki/Monte_moon"],["Ruta 4","https://www.wikidex.net/wiki/Ruta_4_(Kanto)"],["Ciudad celeste","https://www.wikidex.net/wiki/Ciudad_celeste"],
        ["Ruta 24","https://www.wikidex.net/wiki/Ruta_24_(Kanto)"],["Ruta 25","https://www.wikidex.net/wiki/Ruta_25_(Kanto)"]],
    3: [["Ruta 5","https://www.wikidex.net/wiki/Ruta_5_(Kanto)"],["Ruta 6","https://www.wikidex.net/wiki/Ruta_6_(Kanto)"],["Ciudad Carmín","https://www.wikidex.net/wiki/Ciudad_Carmín"],["Ruta 11","https://www.wikidex.net/wiki/Ruta_11_(Kanto)"],["Cueva Diglett","https://www.wikidex.net/wiki/Cueva_diglett"]], 
    4: [["Ruta 9","https://www.wikidex.net/wiki/Ruta_9_(Kanto)"],["Ruta 10","https://www.wikidex.net/wiki/Ruta_10_(Kanto)"],["Túnel roca","https://www.wikidex.net/wiki/tunel_roca"],["Pueblo Lavanda","https://www.wikidex.net/wiki/Pueblo_lavanda"],
        ["Ruta 8","https://www.wikidex.net/wiki/Ruta_8_(Kanto)"],["Ruta 7","https://www.wikidex.net/wiki/Ruta_7_(Kanto)"],["Ciudad Azulona","https://www.wikidex.net/wiki/Ciudad_Azulona"]], 
    5: [["Torre Pokémon","https://www.wikidex.net/wiki/torre_pokemon"],["Ruta 12","https://www.wikidex.net/wiki/Ruta_12_(Kanto)"],["Ruta 13","https://www.wikidex.net/wiki/Ruta_13_(Kanto)"],["Ruta 14","https://www.wikidex.net/wiki/Ruta_14_(Kanto)"],
        ["Ruta 15","https://www.wikidex.net/wiki/Ruta_15_(Kanto)"],["Ruta 18","https://www.wikidex.net/wiki/Ruta_18_(Kanto)"],["Ruta 17","https://www.wikidex.net/wiki/Ruta_17_(Kanto)"],["Ruta 16","https://www.wikidex.net/wiki/Ruta_16_(Kanto)"],
        ["Ciudad Fucsia","https://www.wikidex.net/wiki/Ciudad_Fucsia"],["Zona Safari","https://www.wikidex.net/wiki/Zona_safari_(Kanto)"]],
    6: [["Ciudad Azafrán","https://www.wikidex.net/wiki/Ciudad_azafran"]],
    7: [["Ruta 21","https://www.wikidex.net/wiki/Ruta_21_(Kanto)"],["Isla Canela","https://www.wikidex.net/wiki/Isla_canela"],["Mansión Pokémon","https://www.wikidex.net/wiki/Mansion_Pokemon"]],
    8: [["Isla Prima","https://www.wikidex.net/wiki/Isla_prima"],["Camino Candente","https://www.wikidex.net/wiki/Camino_candente"],["Playa Tesoro","https://www.wikidex.net/wiki/Playa_tesoro"],["Monte Ascuas","https://www.wikidex.net/wiki/Monte_ascuas"],
        ["Isla Secunda","https://www.wikidex.net/wiki/Isla_secunda"],["Cabo extremo","https://www.wikidex.net/wiki/Cabo_extremo"],["Isla Tera","https://www.wikidex.net/wiki/Isla_tera"],["Puente Unión","https://www.wikidex.net/wiki/Puente_union"],
        ["Bosque Baya","https://www.wikidex.net/wiki/Bosque_baya"],["Ruta 19","https://www.wikidex.net/wiki/Ruta_19_(Kanto)"],["Ruta 20","https://www.wikidex.net/wiki/Ruta_20_(Kanto)"],["Islas Espuma","https://www.wikidex.net/wiki/Islas_espuma"],["Central Energía","https://www.wikidex.net/wiki/Central_energia"]],
    9: [["Ruta 23","https://www.wikidex.net/wiki/Ruta_23_(Kanto)"],["Calle Victoria","https://www.wikidex.net/wiki/Calle_Victoria_(Kanto)"],["Cueva Celeste","https://www.wikidex.net/wiki/Cueva_celeste"],["Isla Quarta","https://www.wikidex.net/wiki/Isla_Quarta"],["Cueva Glaciada","https://www.wikidex.net/wiki/Cueva_glaciada"],
        ["Isla Inta","https://www.wikidex.net/wiki/Isla_inta"],["Prado Isla Inta","https://www.wikidex.net/wiki/Prado_isla_inta"],["Pilar Recuerdo","https://www.wikidex.net/wiki/Pilar_recuerdo"],["Aquarinto","https://www.wikidex.net/wiki/aquarinto"],
        ["Lugar de recreo","https://www.wikidex.net/wiki/Lugar_de_recreo"],["Cueva perdida","https://www.wikidex.net/wiki/Cueva_perdida"],["Isla Exta","https://www.wikidex.net/wiki/Isla_Exta"],["Isla Aislada","https://www.wikidex.net/wiki/Isla_Aislada"],
        ["Cueva cambiante","https://www.wikidex.net/wiki/Cueva_cambiante"],["Via Verde","https://www.wikidex.net/wiki/Via_verde"],["Bosquejo","https://www.wikidex.net/wiki/Bosquejo"],["Isla Sétima","https://www.wikidex.net/wiki/Isla_Sétima"],["Torre desafío","https://www.wikidex.net/wiki/Torre_Desafio"],
        ["Entrada al cañón","https://www.wikidex.net/wiki/Entrada_al_cañon"],["Cañón Sétano","https://www.wikidex.net/wiki/Cañon_setano"],["Ruinas Sete","https://www.wikidex.net/wiki/Ruinas_sete"],["Valle ruinas","https://www.wikidex.net/wiki/Valle_ruinas"],["Cueva Punteada","https://www.wikidex.net/wiki/Cueva_punteada"]],
}

/*
JOHTO:
const nuevasRutas = {
    1: [["Pueblo Primavera","https://www.wikidex.net/wiki/Pueblo_Primavera"],["Ruta 29","https://www.wikidex.net/wiki/Ruta_29"],["Ruta 46","https://www.wikidex.net/wiki/Ruta_46"],
        ["Ciudad Cerezo","https://www.wikidex.net/wiki/Ciudad_Cerezo"],["Ruta 30","https://www.wikidex.net/wiki/Ruta_30"],["Ruta 31","https://www.wikidex.net/wiki/Ruta_31"],
        ["Cueva Oscura","https://www.wikidex.net/wiki/Cueva_Oscura"],["Ciudad Malva","https://www.wikidex.net/wiki/Ciudad_Malva"],["Torre Bellsprout","https://www.wikidex.net/wiki/Torre_Bellsprout"]], 
    2: [["Ruta 32","https://www.wikidex.net/wiki/Ruta_32"],["Ruta 33","https://www.wikidex.net/wiki/Ruta_33"],["Pozo Slowpoke","https://www.wikidex.net/wiki/Pozo_Slowpoke"],["Pueblo Azalea","https://www.wikidex.net/wiki/Pueblo_Azalea"]],
    3: [["Encinar","https://www.wikidex.net/wiki/Encinar"],["Ruta 34","https://www.wikidex.net/wiki/Ruta_34"],["Ciudad Trigal","https://www.wikidex.net/wiki/Ciudad_Trigal"]], 
    4: [["Ruta 35","https://www.wikidex.net/wiki/Ruta_35"],["Parque Nacional","https://www.wikidex.net/wiki/Parque_Nacional"],["Ruta 36","https://www.wikidex.net/wiki/Ruta_36"],["Ruinas Alfa","https://www.wikidex.net/wiki/Ruinas_Alfa"],
        ["Ruta 37","https://www.wikidex.net/wiki/Ruta_37"],["Torre Quemada","https://www.wikidex.net/wiki/Torre_Quemada"],["Ciudad Iris","https://www.wikidex.net/wiki/Ciudad_Iris"]], 
    5: [["Ruta 38","https://www.wikidex.net/wiki/Ruta_38"],["Ruta 39","https://www.wikidex.net/wiki/Ruta_39"],["Ciudad Olivo","https://www.wikidex.net/wiki/Ciudad_Olivo"],
        ["Ruta 40","https://www.wikidex.net/wiki/Ruta_40"],["Ruta 41","https://www.wikidex.net/wiki/Ruta_41"],["Islas remolino","https://www.wikidex.net/wiki/Islas_Remolino"],["Ciudad Orquídea","https://www.wikidex.net/wiki/Ciudad_Orqu%C3%ADdea"]],
    6: ["No hay rutas nuevas","https://www.wikidex.net/"],
    7: [["Paso Acantilado","https://www.wikidex.net/wiki/Paso_Acantilado"],["Ruta 47","https://www.wikidex.net/wiki/Ruta_47"],["Ruta 48","https://www.wikidex.net/wiki/Ruta_48"],
        ["Zona Safari","https://www.wikidex.net/wiki/Zona_Safari"],["Ruta 42","https://www.wikidex.net/wiki/Ruta_42"],["Monte Mortero","https://www.wikidex.net/wiki/Monte_Mortero"],["Pueblo Caoba","https://www.wikidex.net/wiki/Pueblo_Caoba"],
        ["Ruta 43","https://www.wikidex.net/wiki/Ruta_43"],["Lago de la Furia","https://www.wikidex.net/wiki/Lago_de_la_Furia"]], 
    8: [["Ruta 44","https://www.wikidex.net/wiki/Ruta_44"],["Ruta Helada","https://www.wikidex.net/wiki/Ruta_Helada"],["Ciudad Endrino","https://www.wikidex.net/wiki/Ciudad_Endrino"],["Ruta 45","https://www.wikidex.net/wiki/Ruta_45"]],
    9: [["Guarida Dragón","https://www.wikidex.net/wiki/Guarida_Drag%C3%B3n"],["Ruta 27","https://www.wikidex.net/wiki/ruta_27"],["Ruta 26","https://www.wikidex.net/wiki/Ruta_26"],["Cataratas Tohjo","https://www.wikidex.net/wiki/Cataratas_Tohjo"],
        ["Calle Victoria","https://www.wikidex.net/wiki/Calle_Victoria_(Kanto)"],["Monte Plateado","https://www.wikidex.net/wiki/Monte_Plateado"]],
}
*/

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


