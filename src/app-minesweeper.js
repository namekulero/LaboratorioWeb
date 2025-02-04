let board = [] // Inicializa el tablero como una lista.

const SIZE = { // Inicializa un objeto 'SIZE' con las filas y columnas del tablero.
    rows: 5,
    columns: 5,
    length: () => SIZE.rows * SIZE.columns // Cantidad de casillas del tablero.
}

const nMines = Math.floor(Math.random() * (SIZE.length() / 2)) + 1

const readLine = require('readline');

let selRow, selCol; // Definición de fila y columna seleccionada 
let gameOver = false; // Boolean para finalizar el juego
let possibleMines; // Minas posibles; representa cuántas casillas faltan por tocar en el juego
let actualMines; // Cuántas minas realmente hay

const reader = readLine.createInterface({ // Lector de entrada por consola
    input: process.stdin,
    output: process.stdout
});

function askForTile(query) {
    return new Promise(answer => {
        reader.question(query, answer);
    })
}


// ----------------------------------------------------------------------------------


async function main() { // Función principal
    console.log('<3 Buscaminas by Lero <>')


    fill(board, SIZE.rows, SIZE.columns) // Se genera el tablero desconocido
    print(board)

    selRow = parseInt(await askForTile('Fila de casilla inicial: '));
    selCol = parseInt(await askForTile('Columna de casilla inicial: '));

    fillMines(board, nMines, selRow - 1, selCol - 1); // Solo se puede hacer el llamado a 
    // llenar minas tras haber seleccionado la primera casilla.
    showTiles(board, selRow - 1, selCol - 1); // Muestra la casilla seleccionada.

    while (!gameOver) { // Continuación del juego; si sale de este 'while', se acaba el juego.
        try {
            actualMines = 0;
            possibleMines = SIZE.length();
            selRow = parseInt(await askForTile('Fila de la casilla: '));
            selCol = parseInt(await askForTile('Columna de la casilla: '));
            showTiles(board, selRow - 1, selCol - 1); // Muestra la casilla seleccionada.
        } catch (error) { console.error('Oops!'); }
    }

    console.log('¡Gracias por jugar!')
}

const fill = (matrix, rows, columns) => { // Función de llenado del tablero.
    for (let i = 0; i < rows; i++) { // Recorre cada fila del tablero.
        matrix[i] = [] // Cada posición inicializada en la lista es otra lista.
        for (let j = 0; j < columns; j++) { // Recorre cada columna del tablero.
            matrix[i][j] = { adjMines: 0, suspect: false, mine: false, tile: 'X' }; // Llena el tablero con casillas desconocidas.
        }
    };
}

const fillMines = (matrix, n, row, col) => { // Función de llenado de casillas de minas.
    for (let i = 0; i < n; i++) {
        const x = Math.floor(Math.random() * (SIZE.rows)) // Genera una fila y columna aleatoria para generar una mina ahí.
        const y = Math.floor(Math.random() * (SIZE.columns))
        if (x != row && y != col && !matrix[x][y].mine) { // No puede generar una mina en la casilla inicial ni repetir bomba en la casilla.
            matrix[x][y].mine = true; actualMines++;
            for (let xx = x - 1; xx <= x + 1; xx++) {
                for (let yy = y - 1; yy <= y + 1; yy++) {
                    if ((xx >= 0 && xx < SIZE.rows) && (yy >= 0 && yy < SIZE.rows)) { matrix[xx][yy].adjMines++; }
                }
            }
        }
    }
}

function print(matrix) { // Función para imprimir el tablero.
    for (let i = -1; i < SIZE.columns; i++) {
        let line = "";
        for (let j = -1; j < SIZE.rows; j++) { // Recorre cada casila individual
            if (i === -1) {
                line = line + (j + 1) + " ";
            } else if (j === -1) {
                line = line + (i + 1) + " ";
            } else {
                line = line + matrix[i][j].tile + ' '
            }
        }
        console.log(line)
    };
}

// ---------------------------------------------------------------------------------------------------------

function showTiles(matrix, row, col) {
    if (matrix[row][col].mine) {
        matrix[row][col].tile = 'M';
        console.log('\nPERDISTE - Fin del juego\n')
        gameOver = true;
    } else {
        matrix[row][col].tile = matrix[row][col].adjMines;
        possibleMines--;
        if (possibleMines === actualMines) {
            console.log('\nGANASTE - Fin del juego\n')
            gameOver = true;
        }
    }
    print(matrix);
}

main(); // Llamado a la función principal