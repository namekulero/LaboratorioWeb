/** Ejercicio de transpilación de Typescript a Javascript.
 Busco aplicar conceptos de OOP principalmente, junto a prácticas de 
 código limpio. **/

// Variables

let board_p1 = new Board

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Métodos y funciones

async function main() {
    console.log('o8<  Batalla Naval by Lero  >8o')











}

const fill = (matrix, rows, columns) => { // Función de llenado del tablero.
    for (let i = 0; i < rows; i++) { // Recorre cada fila del tablero.
        matrix[i] = [] // Cada posición inicializada en la lista es otra lista.
        for (let j = 0; j < columns; j++) { // Recorre cada columna del tablero.
            matrix[i][j] = { adjMines: 0, suspect: false, mine: false, tile: 'X' }; // Llena el tablero con casillas desconocidas.
        }
    };
}






