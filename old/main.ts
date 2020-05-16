var scope = 'superscope';
var aantal = 0;
function testScope() {
    let scope = 'lokelescope';
    aantal++;
    console.log('\tDit is test nummer: ' + aantal);
    console.log('\tFunction scope is: ' + scope);
}
console.log('\tScript scope is: ' + scope);
testScope();
testScope();

let bericht;    // bericht is ongedefinieerd
let naam: string = 'Jurson';
let leeftijd: number = 17;
let leerplichtig: boolean = true;
let cijfers: number[] = [7, 8, 9];
console.log(`Hallo, mijn naam is ${naam}.`);

// declareer een tuple
let student: [string, number, boolean];
// initialiseer een tuple
student = ['Jurson', 17, true];

enum Cijfers { Vak1 = 7, Vak2 = 8, Vak3 = 9 };
for (let vak in Cijfers) {
    console.log(Cijfers[vak]);
}
