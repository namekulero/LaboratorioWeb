class Board implements BoardInterface {
    private board: Tile[][];
    private score: number = 0;

    constructor(rows: number, cols: number, shipArray: Ship[]) {
        this.board = new Tile[rows];

        for (let i = 0; i < rows; i++) { // Recorre cada fila del tablero.
            this.board[i] = Tile[cols] // Cada posición inicializada en la lista es otra lista.
            for (let j = 0; j < cols; j++) { // Recorre cada columna del tablero.
                this.board[i][j] = new Tile(false); // Llena el tablero con casillas desconocidas.
            }
        }

        for (let ship of shipArray) {
            let coords = ship.getCoords;
            if (coords.length == 2) { 
                this.board[coords[0]][coords[1]].setShip // Barco de una posición
            } else { 
                if (coords[0] === coords[2]) { // Barco de varias posiciones en 'y'
                    if (coords[1] < coords[3]) {
                        this.fillVerticalShip(coords[0], coords[1], coords[3])
                    } else {
                        this.fillVerticalShip(coords[0], coords[3], coords[1])
                    }
                } else { // Barco de varias posiciones en 'x'
                    if (coords[0] < coords[2]) {
                        this.fillHorizontalShip(coords[1], coords[0], coords[2])
                    } else {
                        this.fillHorizontalShip(coords[1], coords[2], coords[0])
                    }
                }
            }
        }
    }

    getBoard(): Tile[][] {
        return this.board;
    }

    public getScore(): number {
        return this.score;
    }

    fillVerticalShip(conCoord: number, y1: number, y2: number) {
        for (let i = y1; i <= y2; i++) {
            this.board[conCoord][i].setShip;
        }
    }
    
    fillHorizontalShip(conCoord: number, x1: number, x2: number) {
        for (let i = x1; i <= x2; i++) {
            this.board[i][conCoord].setShip;
        }
    }
}