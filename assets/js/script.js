/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name = `Mario`;
const surname = `Rossi`;

console.log(`Ciao, mi chiamo ${name} ${surname}.`);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let firstNumber = 10;
let secondNumber = 3;

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`,
);

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const annoNascita = 1991;
const annoCorrente = 2026;
const etaOggi = annoCorrente - annoNascita;

console.log(
  `Oggi ho ${etaOggi}. Tra 10 anni, avrò ${etaOggi + 10}. 5 anni fa avevo ${etaOggi - 5}.`,
);

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let age = 25;
console.log(age >= 18);

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numberString = "5";
console.log(`${numberString} è di tipo: ${typeof numberString}`);

let numberNumber = 10;
console.log(`${numberNumber} è di tipo: ${typeof numberNumber}`);

let stringEquality = numberString === numberNumber;
console.log(numberString === numberNumber);
console.log(`${stringEquality} è di tipo: ${typeof stringEquality}`);

let undefinedValue;
console.log(undefinedValue);

let nullValue = null;
console.log(null); // perché abbiamo esplicitamente assegnato "null" alla variabile "nullValue"

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeroStringa = "10";
let numeroNumero = 10;

console.log(numeroStringa == numeroNumero); // esce fuori TRUE; confronta il valore o il xtipo
console.log(numeroStringa === numeroNumero); // esce fuori FALSE; confronta il valore e il tipo

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3 = 53
   - "5" - 3 = 2
   - true + 1 = 2
   - "10" * "2" = 20
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("5" + 3);
console.log("5" - 3);
console.log(true + 1);
console.log("10" * "2");

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numberN = 10;
let restoDivisione = numberN % 2;
let evenNumber = restoDivisione === 0;

console.log(`${numberN} è pari: ${evenNumber}`);

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function triangle(type) {}
let sideA = 3;
let sideB = 4;
let sideC = 5;
let perimeter = sideA + sideB + sideC;
let triangoloEquilatero = sideA === sideB && === sideC;
let triangoloIsoscele = sideA === sideB && !== sideC;
let triangoloScaleno = sideA !== sideB && !== sideC;

console.log(`perimetro ${perimeter}`);

console.log(`perimetro ${perimeter}`);

console.log(`perimetro ${perimeter}`);

