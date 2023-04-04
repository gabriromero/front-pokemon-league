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

export function getJornada() {
    const fechaActual = new Date();
    const posicionJornada = horarios_jornada.findIndex(([startDay, finalDay]) => fechaActual >= startDay && fechaActual <= finalDay);

    return posicionJornada === -1 ? -1 : posicionJornada + 1;
}

export const API_URL = 'http://127.0.0.1:5000'
export const API_PKM = 'https://pokeapi.co/api/v2/pokemon'
