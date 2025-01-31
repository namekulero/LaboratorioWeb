class Ship {
    private _x1: string; private _y1: number; 
    private _x2: string | null; private _y2: number | null;
    // Coordenadas iniciales y finales de la nave.

    constructor(x1: string, x2: string, y1: number, y2: number) {
        this._x1 = x1; this._x2 = x2; // Instanciación de 
        if (x2 != null && y2 != null) { this._y1 = y1; this._y2 = y2; }
        
        
    }
}