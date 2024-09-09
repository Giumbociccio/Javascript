if (($(document).pathname = "/sito2.html")) {
  $("#api").on("click", function () {
    $.get("https://api.chucknorris.io/jokes/random", function (data) {
      // var dataTxt = JSON.stringify(data);
      $(".result").text(data.value);

      // alert( data + "\nho chiamato l'API di Chuck Norris");
    });
  });
}

// document.getElementById('bottone').onclick=function(){
//   (this).style.backgroundColor="red";
// }
var colore = "lightgrey";
$("#bottone").on("mousedown", function () {
  this.style.backgroundColor = "red";
});

$("#bottone").on("mouseup", function () {
  this.style.backgroundColor = colore;
});

document.getElementById("invio").onmouseover = function () {
  window.alert("sei passato sopra alla casella");
};

document.getElementById("bottone").ondblclick = function () {
  // alert("hai fatto doppio click")
  $(this).hide();
};

// document.getElementById('nome').onsubmit=function(){
//   window.alert("hai cliccato invio")
// }

//sarebbe interessante fare un progettino in cui devi fare slalom tra degli oggetti e quando colpisci un oggetto fa window.alert("hai perso") e ti riporta l'oggetto alla posizione iniziale

//inizio gioco

var ogg = $("#topo");
ogg.ondragstart = function (e) {
  e.dataTransfer.setData("text", e.target.id);
};

//fine gioco

var matrice = [
  [3, 4],
  [5, 6],
];
console.log(matrice);

do {
  console.log(matrice[0][0]);
} while (matrice[0][0] < 2);
{
  matrice[0][0]--;
}

class Persona {
  constructor(nome, cognome, eta, genere, interessi) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.genere = genere;
    this.interessi = interessi;
  }
    saluta () {
      console.log(
        `Ciao, sono ${this.nome} ${this.cognome}, ${this.genere == "M" ? "un ragazzo" : "una ragazza"} di ${this.eta} anni, e sono interessato a ${this.interessi.join(", ")}.`,
      );
    };
  get nome(){
    return this._nome;
  }
  set nome(value){
    this._nome = value;
  }
  get cognome(){
    return this._cognome;
  }
  set cognome(value){
    this._cognome = value;
  }
}
class Studente extends Persona{
  constructor(nome, cognome, eta, genere, interessi, matricola) {
    super(nome, cognome, eta, genere, interessi);
    this.matricola = matricola;
    this.saluta = function () {
      Persona.prototype.saluta.call(this);
      console.log(` Sono ${(this.genere == 'M') ? 'uno studente' : 'una studentessa'} con matricola ${this.matricola}.`);
    };
  }
  get matricola() {
    return this._matricola;
  }
  set matricola(value){
    this._matricola = value;
  }
}


var p1 = new Persona("Luca", "Rossi", 25, "M", ["sport", "musica"]);
var p2 = new Studente(
  "Anna",
  "Verdi",
  27,
  "F",
  ["cinema", "lettura"],
  "12345678",
);
console.log(p1.saluta());
console.log(p2.saluta());
console.log(`La matricola di ${p2._nome} ${p2._cognome} è ${p2.matricola}`)
procedura();

function procedura() {
  console.log("procedura");
}

// function Persona(nome, cognome, eta, genere, interessi) {
//   this.nome = nome;
//   this.cognome = cognome;
//   this.eta = eta;
//   this.genere = genere;
//   this.interessi = interessi;
//   this.saluta = function() {
//       console.log(`Ciao, sono ${this.nome} ${this.cognome}, ${(this.genere == 'M') ? 'un ragazzo' : 'una ragazza'} di ${this.eta} anni, e sono interessato a ${this.interessi.join(', ')}.`)
//     }
// }

