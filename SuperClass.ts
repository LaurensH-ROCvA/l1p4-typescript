class SuperClass {
    protected voornaam: string;
    protected achternaam: string = 'Delmar';
    private creditcard: string = 'Visa';

    constructor(voornaam: string) {
        this.voornaam = voornaam;
    }

    public getAchternaam(): string {
        return this.achternaam;
    }
}

class SubClass extends SuperClass {
    constructor(voornaam: string) {
        super(voornaam);
        this.voornaam = voornaam;
    }
}
let shireen: SubClass = new SubClass('Shireen');
console.log('Shireens\' geërfde achternaam: ' + shireen.getAchternaam());
