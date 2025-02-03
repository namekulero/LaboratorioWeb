class Tile implements TileInterface {
    private containsShip: boolean;
    public tile: string;

    constructor(flag: boolean) {
        this.containsShip = flag;
    }

    hasShip() { return this.containsShip; }


}