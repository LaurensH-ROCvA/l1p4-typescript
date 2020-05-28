export class Persoon {
    public naam: string;
    private leeftijd: number;
    protected geslacht: string;
    public isStudent: boolean;
    public gemiddeldCijfer: number;

    // constructor-methode
    constructor(naam: string, leeftijd: number, geslacht: string) {
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

    public getNaam(): string {
        return this.naam;
    }
    public setNaam(naam: string): void {
        this.naam = naam;
    }

    public getLeeftijd(): number {
        return this.leeftijd;
    }
    public setLeeftijd(leeftijd: number): void {
        this.leeftijd = leeftijd;
    }

    public getIsStudent(): boolean {
        return this.isStudent;
    }
    public setIsStudent(isStudent: boolean): void {
        this.isStudent = isStudent;
    }

    public getGemiddeldCijfer(): number {
        return this.gemiddeldCijfer;
    }
    public setGemiddeldCijfer(gemiddeldCijfer: number): void {
        this.gemiddeldCijfer = gemiddeldCijfer;
    }

    public getGegevens(): string {
        let gegevens: string =
            "De gegevens van " + this.naam + " zijn: \n" +
            "Leeftijd: " + this.leeftijd + "\n" +
            "Geslacht: " + this.geslacht + "\n";
        return gegevens;
    }

    public toString(): string {
        return ("De gegevens van " + this.naam + " zijn: \n" +
            "Leeftijd: " + this.leeftijd + "\n" +
            "Geslacht: " + this.geslacht + "\n");
    }
}
