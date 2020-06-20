class MyExceptions {
    // importeer hier de File System module
    private fs = require('fs');
    constructor() { };
    creëerFile() {
        this.fs.writeFile('file.txt', '{"naam":"Juist","e_mail":"juist@gmail.com"}',
            function (err) {
                if (err) {
                    return console.error(err);
                }
                console.log('Bestand was aangemaakt!');
            });
    }
    leesFile() {
        this.fs.readFile('filexx.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log(data.toString());
        });
    }

    public delen(a: number, b: number): number {
        if (b == 0) {
            throw new Error('\nDeler kan niet 0 zijn');
        } else {
            return a / b;
        }
    }
}

// Uitvoeren
let myExceptions: MyExceptions = new MyExceptions();
// myExceptions.creëerFile();
// myExceptions.leesFile();

let resultaat: number = 0;
try {
    resultaat = myExceptions.delen(1, 0);
} catch (e) {
    console.log(e.message);
}
