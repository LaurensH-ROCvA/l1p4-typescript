import { IProduct } from './IProduct';

export abstract class Product implements IProduct {
    protected ID: string;
    protected prijs: number;
    protected aantal: number;

    constructor(ID: string, prijs: number, aantal: number) {
        this.ID = ID;
        this.prijs = prijs;
        this.aantal = aantal;
    }

    public getID(): string {
        return this.ID;
    }
    public getPrijs(): string {
        return this.prijs.toString();
    }
    public getAantal(): string {
        return this.aantal.toString();
    }
    abstract getOmschrijving(): string;
}
