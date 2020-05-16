export class Persoon {
    public naam: string;
    private leeftijd: number;
    protected geslacht: string;
    public isStudent: boolean;
    public gemiddeldCijfer: number;

    // constructor-methode
    constructor (naam: string, leeftijd: number, geslacht: string) {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.geslacht = geslacht;
        console.log('Nieuw Persoon-object aangemaakt.');
        console.log('De property naam is ' + this.naam);
    }
}
