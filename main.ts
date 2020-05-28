import { Persoon } from './Persoon';
let umut: Persoon = new Persoon('Umut', 18, 'M');
let demirel: Persoon = new Persoon('Demirel', 19, 'M');
let laurens: Persoon = new Persoon('Laurens', 19, 'M');
let thamara: Persoon = new Persoon('Thamara', 18, 'V');

demirel.setLeeftijd(24);
console.log('De leeftijd van Demirel is: ' + demirel.getLeeftijd());

thamara.setLeeftijd(19);
console.log('De leeftijd van Thamara is: ' + thamara.getLeeftijd());

console.log(thamara.getGegevens());
console.log(demirel.getGegevens());

thamara.setIsStudent(true);
thamara.setGemiddeldCijfer(8);
umut.setIsStudent(true);
umut.setGemiddeldCijfer(8);

let persoonsgegevens: string[] = [];
persoonsgegevens.push(JSON.stringify(thamara.gegevensOpslaan()));
persoonsgegevens.push(JSON.stringify(umut.gegevensOpslaan()));

persoonsgegevens.forEach(function (gegevens) {
    console.log('\n' + gegevens);
});
