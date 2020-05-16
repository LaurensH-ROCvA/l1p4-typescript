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
    
    public getGeslacht(): string {
        return this.geslacht;
    }
    public setGeslacht(geslacht: string): void {
        this.geslacht = geslacht;
    }

    public getLeeftijd(): number {
        return this.leeftijd;
    }
    public setLeeftijd(leeftijd: number): void {
        this.leeftijd = leeftijd;
    }
}
