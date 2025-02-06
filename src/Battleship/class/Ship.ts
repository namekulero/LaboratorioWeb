class Ship {
    private x1: number; private y1: number; 
    private x2: number | undefined; private y2: number | undefined;
    // Coordenadas iniciales y finales de la nave.

    constructor(x1: number, x2: number, y1: number, y2: number) {
        this.x1 = x1; this.y1 = y1; // Instanciación de variables
        if (x2 != null && y2 != null) { this.x2 = x2; this.y2 = y2; }
    }

    getCoords(coords: number[]) {
        if (this.x2 === undefined) {
            return [this.x1, this.y1]
        } else {
            return [this.x1, this.y1, this.x2, this.y2]
        }
    }
}


