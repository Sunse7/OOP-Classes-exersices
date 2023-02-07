// 1. Object Literals
const home = {
  title: "Villa Villekulla",
  adress: "Bråkmakargatan 11",
  occupants: 1,
  writeInfo: function() {
    return `Det bor ${this.occupants} person i ${this.title} för tillfället`
  },
  writeAdress: function() {
    return `The adress is: ${this.adress}`
  }
}
// 1. Kalla på funktionen writeInfo
console.log(home.writeInfo());
// 2. Skriv en till funktion i objektet som skriver ut adressen
// 3. Kalla på den nya funktionen
console.log(home.writeAdress());
// 4. Skriv ut alla värden på de olika propertys som finns i objektet. Det skall se ut så här efteråt:
// ["Villa Villekulla", "Bråkmakargatan 11", 1, f, f]
console.log(Object.values(home));
// 5. Skriv ut alla propertys som finns i objektet. Det skall se ut så här efteråt:
// ["title", "adress", "occupants", "writeInfo", "<din nya funktion>"]
console.log(Object.keys(home));
// 6. Skriv din egen version av home-objektet. Med till exempel color, actor, user etc
const doggy = {
    name: 'Lucky',
    breed: 'Keeshond',
    age: '7',
    isFluffy: true,
    writeStuff: function() {
        return `${this.name} is a ${this.breed} and loves naps`
    }
}
// 2. Constructor
// Exempel på en basic constructor:

function Home(color, buildYear, isCozy) {
    this.color = color,
    this.buildYear = buildYear,
    this.isCozy = isCozy
}

const home2 = new Home('Purple', '1980', true);
console.log(home2);
// 1. Skriv en ny constructor som tar in 3st parametrar och sparar de som värden i ett nytt objekt. Använd dig av this
// 2. Skapa din egen version av Home-constructorn nu.

// 3. Prototypes
// 1. Lägg till (manuellt) en ny property under home.prototype på din constructor som innehåller en funktion. Så det ser ut som i övning 1.1 med
// home.writeInfo.
Home.prototype.writeThings = function() {
    return `My house is ${this.color} and i love it!`
}
// 2. Kalla på din nya funktion och se vad som skrivs ut
console.log(home2.writeThings());
// 3. Skriv en till liknande property med valfritt värde
Home.prototype.size = '100';

// 4. Klasser
// 1. Skapa en klass som har propertys 'name', 'year', 'likes'. Klassen skall använda sig av en constructor som tar in parametrar som kan läggas
// som värden på dina propertys.

class MyClass {
    constructor(name, year, likes) {
        this.name = name,
        this.year = year,
        this.likes = likes
    }
}

// 2. Skapa en ny variabel som använder sig av din nya klass och skickar in värden till den.

const coolClass = new MyClass('Lucky', '2023', '500');
console.log(coolClass);