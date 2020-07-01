import { Product } from './Product';

export class Boek extends Product {
    public titel: string;
    public auteur: string;

    constructor(ID: string, titel: string, auteur: string, prijs: number, aantal: number) {
        super(ID, prijs, aantal);
        this.titel = titel;
        this.auteur = auteur;
    }

    public getOmschrijving(): string {
        return `${this.titel} ${this.auteur}`;
    }
}
