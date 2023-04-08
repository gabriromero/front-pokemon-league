import {getActualJornada} from '@/api/shared'

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
    1:40, 2:70, 3:100, 4:160, 
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
    1: [10,11,12], 2: [18,19,20], 3: [25,26,27], 4: [30,31,32,33], 
    5: [40,41,42,43], 6: [43,43,44,44,45], 7: [45,45,46,46,47], 8: [50,50,50,50,50,50], 9: [50,50,50,50,50,50]
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
    1: [["Pueblo Paleta", "http://en.pokemmo.shoutwiki.com/wiki/Pallet_Town"],
        ["Ruta 1", "http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_1"],
        ["Ciudad Verde", "http://en.pokemmo.shoutwiki.com/wiki/Viridian_City"],
        ["Ruta 22", "http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_22"],
        ["Ruta 2", "http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_2"],
        ["Bosque Verde", "http://en.pokemmo.shoutwiki.com/wiki/Viridian_Forest"],
        ["Ciudad Plateada", "http://en.pokemmo.shoutwiki.com/wiki/Pewter_City"]], 
    2: [
        ["Ruta 3", "http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_3"],
        ["Monte Moon", "http://en.pokemmo.shoutwiki.com/wiki/Mt._Moon"],
        ["Ruta 4", "http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_4"],
        ["Ciudad celeste", "http://en.pokemmo.shoutwiki.com/wiki/Cerulean_City"],
        ["Ruta 24", "http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_24"],
        ["Ruta 25", "http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_25"]],
    3: [
        ["Ruta 5", "http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_5"],
        ["Ruta 6", "http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_6"],
        ["Ciudad Carmín", "http://en.pokemmo.shoutwiki.com/wiki/Vermilion_City"],
        ["Ruta 11", "http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_11"],
        ["Cueva Diglett", "http://en.pokemmo.shoutwiki.com/wiki/Diglett%27s_Cave"]], 
    4: [
        ["Ruta 9", "http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_9"],
        ["Ruta 10", "http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_10"],
        ["Túnel roca", "http://en.pokemmo.shoutwiki.com/wiki/Rock_Tunnel"],
        ["Pueblo Lavanda", "http://en.pokemmo.shoutwiki.com/wiki/Lavender_Town"],
        ["Ruta 8", "http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_8"],
        ["Ruta 7", "http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_7"],
        ["Ciudad Azulona", "http://en.pokemmo.shoutwiki.com/wiki/Celadon_City"]], 
    5: [
        ["Torre Pokémon","http://en.pokemmo.shoutwiki.com/wiki/Pokémon_Tower"],["Ruta 12","http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_12"],["Ruta 13","http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_13"],["Ruta 14","http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_14"],
        ["Ruta 15","http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_15"],["Ruta 18","http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_18"],["Ruta 17","http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_17"],["Ruta 16","http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_16"],
        ["Ciudad Fucsia","http://en.pokemmo.shoutwiki.com/wiki/Fuchsia_City"],["Zona Safari","http://en.pokemmo.shoutwiki.com/wiki/Safari_Zone/Kanto"]],
    6: [["Ciudad Azafrán","http://en.pokemmo.shoutwiki.com/wiki/Saffron_City"]],
    7: [["Ruta 21","http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_21"],["Isla Canela","http://en.pokemmo.shoutwiki.com/wiki/Cinnabar_Island"],["Mansión Pokémon","http://en.pokemmo.shoutwiki.com/wiki/Pokémon_Mansion"]],
    8: [["Isla Prima","http://en.pokemmo.shoutwiki.com/wiki/One_Island"],["Camino Candente","http://en.pokemmo.shoutwiki.com/wiki/Treasure_Beach"],["Playa Tesoro","http://en.pokemmo.shoutwiki.com/wiki/Treasure_Beach"],["Monte Ascuas","https://www.wikidex.net/wiki/Monte_ascuas"],
        ["Isla Secunda","http://en.pokemmo.shoutwiki.com/wiki/Two_Island"],["Cabo extremo","http://en.pokemmo.shoutwiki.com/wiki/Cape_Brink"],["Isla Tera","http://en.pokemmo.shoutwiki.com/wiki/Three_Island"],["Puente Unión","http://en.pokemmo.shoutwiki.com/wiki/Bond_Bridge"],
        ["Bosque Baya","http://en.pokemmo.shoutwiki.com/wiki/Berry_Forest"],["Ruta 19","http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_19"],["Ruta 20","http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_20"],["Islas Espuma","http://en.pokemmo.shoutwiki.com/wiki/Sevii_Islands#Knot_Island"],["Central Energía","http://en.pokemmo.shoutwiki.com/wiki/Power_Plant"]],
    9: [["Ruta 23","http://en.pokemmo.shoutwiki.com/wiki/Kanto_Route_23"],["Calle Victoria","http://en.pokemmo.shoutwiki.com/wiki/Victory_Road"],["Cueva Celeste","http://en.pokemmo.shoutwiki.com/wiki/Cerulean_Cave"],["Isla Quarta","http://en.pokemmo.shoutwiki.com/wiki/Four_Island"],["Cueva Glaciada","http://en.pokemmo.shoutwiki.com/wiki/Icefall_Cave"],
        ["Isla Inta","http://en.pokemmo.shoutwiki.com/wiki/One_Island"],["Prado Isla Inta","http://en.pokemmo.shoutwiki.com/wiki/Kindle_Road"],["Pilar Recuerdo","http://en.pokemmo.shoutwiki.com/wiki/Tanoby_Ruins"],["Aquarinto","http://en.pokemmo.shoutwiki.com/wiki/Outcast_Island"],
        ["Lugar de recreo","http://en.pokemmo.shoutwiki.com/wiki/Resort_Gorgeous"],["Cueva perdida","http://en.pokemmo.shoutwiki.com/wiki/Lost_Cave"],["Isla Exta","http://en.pokemmo.shoutwiki.com/wiki/Expedition_Island"],["Isla Aislada","http://en.pokemmo.shoutwiki.com/wiki/Tanoby_Chamber"],
        ["Cueva cambiante","http://en.pokemmo.shoutwiki.com/wiki/Altering_Cave"],["Via Verde","http://en.pokemmo.shoutwiki.com/wiki/Sevii_Vault"],["Bosquejo","http://en.pokemmo.shoutwiki.com/wiki/Treasure_Beach"],["Isla Sétima","http://en.pokemmo.shoutwiki.com/wiki/Seven_Island"],["Torre desafío","http://en.pokemmo.shoutwiki.com/wiki/Trainer_Tower"],
        ["Entrada al cañón","http://en.pokemmo.shoutwiki.com/wiki/Canyon_Entrance"],["Cañón Sétano","http://en.pokemmo.shoutwiki.com/wiki/Sevault_Canyon"],["Ruinas Sete","http://en.pokemmo.shoutwiki.com/wiki/Tanoby_Chamber"],["Valle ruinas","http://en.pokemmo.shoutwiki.com/wiki/Tanoby_Ruins"],["Cueva Punteada","http://en.pokemmo.shoutwiki.com/wiki/Pattern_Bush"]],
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

async function getNormasRuta() {
    const jornada = await getJornada();
    return {
        evsMaximos: evsMaximos[jornada],
        statsMaximos: statsMaximos[jornada],
        nivelesPokemon: nivelesPokemon[jornada],
        numeroPokemon: nivelesPokemon[jornada].length,
        nuevasRutas: nuevasRutas[jornada]
    };
}


export async function getJornada() {
    /*
    POR FECHA
    const fechaActual = new Date();
    const posicionJornada = horarios_jornada.findIndex(([startDay, finalDay]) => fechaActual >= startDay && fechaActual <= finalDay);

    return posicionJornada === -1 ? -1 : posicionJornada + 1;
    */
    let jornadaActual = await getActualJornada();
    return jornadaActual.data;
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

export { getNormasRuta };