class Board implements BoardInterface {
    private board: Tile[]; 
    private score: number = 0;

    constructor(rows: number, cols: number) {


        for (let i = -1; i < rows; i++) { // Recorre cada fila del tablero.
            matrix[i+1] = [] // Cada posición inicializada en la lista es otra lista.
            for (let j = -1; j < cols; j++) { // Recorre cada columna del tablero.
    
                if (i === -1) {
                    matrix[i+1][j+1] = { tile: j+1 };
                } else if (j === -1) {
                    matrix[i+1][j+1] = { tile: i+1 };
                } else {
                    matrix[i+1][j+1] = { adjMines: 0, suspect: false, mine: false, tile: 'X' }; // Llena el tablero con casillas desconocidas.
                }
            }
        };
    }

    getBoard(): Tile[] {
        return this.board;
    }

    public getScore(): number {
        return this.score;
    }

    
}