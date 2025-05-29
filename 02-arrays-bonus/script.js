const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

//Creo un ciclo FOR per ripetere l'iterazione per tutti gli item di teachers
for (i = 0; i < teachers.length; i++) {

  //dichiaro una variabile di appoggio in cui mettere l'elemento 'selezionato'
  const element = teachers[i]
  //se la lughezza dei caratteri dell'elemento selezionato nell'array teachers è maggiore o uguale a 5
  if (element.length >= 5){
    //aggiungo l'elemento 'selezionato'
    longNames.push(element)
  }
}
console.log(longNames);




// 3. Rimuovi 'Ed' dall'array teachers
console.log(teachers);
teachers.splice(5,1)
console.log(teachers);



// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let result = null
const isFabioPresent = result;

for (let i = 0; i < teachers.length; i++) {
  const element = teachers[i];

  if (element == "Fabio") {
    result = true
  }
}
console.log(result);



// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = teachers.join(',');
console.log(teachersString);



