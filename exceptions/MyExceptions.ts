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
}

// Uitvoeren
let myExceptions: MyExceptions = new MyExceptions();
myExceptions.creëerFile();
myExceptions.leesFile();
