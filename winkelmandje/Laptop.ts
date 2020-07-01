import { Product } from './Product';

export class Laptop extends Product {
    public merk: string;
    public model: string;

    constructor(ID: string, merk: string, model: string, prijs: number, aantal: number) {
        super(ID, prijs, aantal);
        this.merk = merk;
        this.model = model;
    }

    public getOmschrijving(): string {
        return `${this.merk} ${this.model}`;
    }
}
