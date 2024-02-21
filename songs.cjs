// rana
// each array is an array of sounds
const frog = ['brr', 'birip', 'brrah', 'croac']
// libelula
const dragonfly = ['fiu', 'plop', 'pep']
// grillo
const cricket = ['cric-cric', 'trri-trri', 'bri-bri']

console.log("Prueba Logica - El lago musical");
// print the animal songs
console.log("Sonidos de los animales: ");
console.log("Rana: ", frog);
console.log("Libelula: ", dragonfly);
console.log("Grillo: ", cricket);

// ask for some string by console
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
// print the question
readline.question("\nIngrese el sonido del animal: ", (sound) => {
  // print the answer
  // console.log("El sound es: ", sound);
  // console.log("El sonido es: ", sound);
  // close the console
  readline.close()
  // complete the sound
  completeTheSong(sound);
})

// the song array has 4 sounds
// each array is a song
const song1 = ['brr', 'fiu', 'cric-cric', 'brrah']
const song2 = ['pep', 'birip', 'trri-trri', 'croac']
const song3 = ['bri-bri', 'plop', 'cric-cric', 'brrah']

//  create a function that receive as parameter a sound of any song like 'brr',
// then search in each array of songs if exists the sound, if exists, 
// then print only the first song where exits but from the next sound 
// in the array of the song.
// If the sound is 'brrah' or 'croac' then print an empty string.
// If the sound is not found in any song, then print the message
// "No se encontro el sonido"
function completeTheSong(sound) {
  // search in the song1
  if (song1.includes(sound)) {
    if (sound === 'brrah' || sound === 'croac') {
      console.log("");
    } else {
      console.log("La cancion es: ", song1.slice(song1.indexOf(sound) + 1));
      console.log("Cancion:", song1);
    }
  } else if (song2.includes(sound)) {
    if (sound === 'brrah' || sound === 'croac') {
      console.log("");
    } else {
      console.log("La cancion es: ", song2.slice(song2.indexOf(sound) + 1));
      console.log("Cancion:", song2);
    }
  } else if (song3.includes(sound)) {
    if (sound === 'brrah' || sound === 'croac') {
      console.log("");
    } else {
      console.log("La cancion es: ", song3.slice(song3.indexOf(sound) + 1));
      console.log("Cancion:", song3);
    }
  } else {
    console.log("No se encontro el sonido");
  }
}

