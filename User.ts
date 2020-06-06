import { Persoon } from './Persoon';
export class User extends Persoon {
    private e_mail: string;
    private wachtwoord: string;
    private rol: string;
    static usernummer: number = 1;

    constructor(naam: string, leeftijd: number, geslacht: string, e_mail: string, wachtwoord: string, rol: string) {
        super(naam, leeftijd, geslacht);
        this.e_mail = e_mail;
        this.wachtwoord = wachtwoord;
        this.rol = rol;
        console.log(`Nieuw User nummer: ${User.usernummer++} extends Persoon`);
    }

    public setEmail(e_mail: string): void {
        this.e_mail = e_mail;
    }
    public setWachtwoord(wachtwoord: string): void {
        this.wachtwoord = wachtwoord;
    }
    public setRol(rol: string): void {
        this.rol = rol;
    }
    public getEmail(): string {
        return this.e_mail;
    }
    public getWachtwoord(): string {
        return this.wachtwoord;
    }
    public getRol(): string {
        return this.rol;
    }

    // overschrijven de toString() methode
    // zodat alle gegevens van Persoon worden geprint.
    public toString(): string {
        return (super.toString() +
            'E_mail: ' + this.e_mail + '\n' +
            'Wachtwoord: ' + this.wachtwoord + '\n' +
            'Rol: ' + this.rol + '\n');
    }
}
