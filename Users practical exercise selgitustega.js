// JavaScripti praktiline kordamisülesanne
// Iga punkti juures on selgitatud, MIDA kood teeb ja MIKS

const users = [
  { id: 1, name: "Mari", age: 22, active: true },
  { id: 2, name: "Jüri", age: 17, active: false },
  { id: 3, name: "Kati", age: 31, active: true },
  { id: 4, name: "Martin", age: 19, active: false },
  { id: 5, name: "Laura", age: 26, active: true },
];

// ---------------------------------------------------------
// 3.1 Kuva console.log() abil kõikide kasutajate nimed
// ---------------------------------------------------------
// Mida kood teeb: käime .forEach() abil läbi kogu users massiivi
// ja prindime iga kasutaja objekti "name" omaduse eraldi.
users.forEach(user => console.log(user.name));


// ---------------------------------------------------------
// 3.2 Leia kõik aktiivsed kasutajad (.filter())
// ---------------------------------------------------------
// Mida kood teeb: .filter() käib läbi iga elemendi ja kontrollib
// tingimust (user.active === true). Kui tingimus on tõene, jääb
// element uude massiivi. Originaali "users" see ei muuda.
const activeUsers = users.filter(user => user.active);
console.log("3.2 Aktiivsed kasutajad:", activeUsers);


// ---------------------------------------------------------
// 3.3 Leia kõik vähemalt 18-aastased kasutajad (.filter())
// ---------------------------------------------------------
// Mida kood teeb: sama loogika mis eelmises punktis, aga
// tingimuseks on user.age >= 18. Tulemuseks uus massiiv,
// mis sisaldab ainult täisealisi kasutajaid.
const adultUsers = users.filter(user => user.age >= 18);
console.log("3.3 Täisealised kasutajad:", adultUsers);


// ---------------------------------------------------------
// 3.4 Uus massiiv ainult nimedega (.map())
// ---------------------------------------------------------
// Mida kood teeb: .map() käib läbi iga elemendi ja TEISENDAB
// selle uueks väärtuseks — siin võtame kogu kasutaja objekti
// asemel ainult tema "name" välja. Tulemuseks on sama pikkusega
// uus massiiv, mis sisaldab ainult stringe (nimesid).
const userNames = users.map(user => user.name);
console.log("3.4 Ainult nimed:", userNames);


// ---------------------------------------------------------
// 3.5 Leia kasutaja, kelle id on 3 (.find())
// ---------------------------------------------------------
// Mida kood teeb: .find() käib massiivi läbi ja tagastab
// ESIMESE elemendi, mis vastab tingimusele (user.id === 3).
// Kui midagi ei leita, tagastaks .find() undefined.
const userWithId3 = users.find(user => user.id === 3);
console.log("3.5 Kasutaja id-ga 3:", userWithId3);


// ---------------------------------------------------------
// 3.6 Tavaline funktsioon getUserStatus(user)
// ---------------------------------------------------------
// Mida kood teeb: funktsioon võtab sisse ühe kasutaja objekti
// ja tagastab stringi vastavalt sellele, kas user.active on
// true või false. Ternary operaator (? :) on lühem viis
// if/else asemel lihtsa kahevalikulise otsuse tegemiseks.
function getUserStatus(user) {
  return user.active ? "Aktiivne" : "Mitteaktiivne";
}
console.log("3.6 Mari staatus:", getUserStatus(users[0]));
console.log("3.6 Jüri staatus:", getUserStatus(users[1]));


// ---------------------------------------------------------
// 3.7 Arrow function getGreeting(user) template literal'iga
// ---------------------------------------------------------
// Mida kood teeb: nooleavaldis (arrow function) võtab kasutaja
// objekti ja koostab tervituslause. Template literal (backtick
// stringid koos ${} süntaksiga) lubab muutujaid otse teksti sisse
// panna, ilma stringide kokku liitmiseta (+).
const getGreeting = (user) => `Tere, ${user.name}! Sa oled ${user.age} aastat vana.`;
console.log("3.7", getGreeting(users[0]));


// ---------------------------------------------------------
// 3.8 Destructuring - name ja age välja võtmine
// ---------------------------------------------------------
// Mida kood teeb: objekti destruktureerimine lubab ühe reaga
// võtta objektist välja mitu omadust eraldi muutujatesse.
// { name, age } = users[0] on lühem viis kui eraldi kirjutada
// const name = users[0].name; const age = users[0].age;
const { name, age } = users[0];
console.log("3.8 Väljavõetud väärtused:", name, age);


// ---------------------------------------------------------
// 3.9 Spread-süntaks - uus kasutaja ilma originaali muutmata
// ---------------------------------------------------------
// Mida kood teeb: [...users, newUser] loob TÄIESTI UUE massiivi,
// mis sisaldab kõiki vanu elemente PLUSS uue kasutaja lõpus.
// Originaalset "users" massiivi see ei muuda — kui kasutaksime
// users.push(newUser), muudaks see originaali otse, mis pole soovitud.
const newUser = { id: 6, name: "Karl", age: 24, active: true };
const usersWithNewUser = [...users, newUser];
console.log("3.9 Uus massiiv (6 kasutajat):", usersWithNewUser.length);
console.log("3.9 Originaal muutumatu (5 kasutajat):", users.length);


// ---------------------------------------------------------
// 3.10 Valikuline address omadus + optional chaining + nullish coalescing
// ---------------------------------------------------------
// Mida kood teeb esimeses reas: lisame ühele kasutajale (Mari)
// uue omaduse "address", mis on omakorda objekt city väljaga.
users[0].address = { city: "Tallinn" };

// Mida kood teeb: user.address?.city loeb "city" väärtuse ohutult.
// Kui address puuduks, ei visata viga (TypeError), vaid tagastatakse
// lihtsalt undefined. Mari puhul on address olemas, seega tuleb "Tallinn".
console.log("3.10 Mari linn:", users[0].address?.city);

// Mida kood teeb: Jüril pole address omadust, seega user.address?.city
// annab undefined. ?? (nullish coalescing) asendab siis undefined/null
// väärtuse antud tagavaravariandiga "Linn puudub".
console.log("3.10 Jüri linn:", users[1].address?.city ?? "Linn puudub");


// ---------------------------------------------------------
// 3.11 forEach - nimi ja staatus iga kasutaja kohta
// ---------------------------------------------------------
// Mida kood teeb: .forEach() käib iga kasutaja objekti läbi
// ja prindib rea kujul "Nimi – Staatus", kasutades varem loodud
// getUserStatus() funktsiooni staatuse arvutamiseks.
users.forEach(user => {
  console.log(`3.11 ${user.name} – ${getUserStatus(user)}`);
});


// ---------------------------------------------------------
// 3.12 Sorteeritud vanuse järgi (noorimast vanimani)
// ---------------------------------------------------------
// Mida kood teeb: [...users] loob esmalt PINNAPEALSE KOOPIA
// massiivist, sest .sort() muudab massiivi, millel seda kutsutakse
// (mutating meetod). Kui sorteeriksime otse users peal, muutuks
// originaalne kasutajate järjekord — seda tahame vältida.
// .sort((a, b) => a.age - b.age) võrdleb iga paari vanuseid:
// kui tulemus on negatiivne, jääb "a" enne "b"-d (kasvav järjekord).
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log("3.12 Sorteeritud vanuse järgi:", sortedByAge.map(u => `${u.name} (${u.age})`));
