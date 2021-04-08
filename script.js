/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

var yourTrip = parseInt(prompt("Quanti km è lungo il tuo viaggio?"));
var yourAge = parseInt(prompt("How old are you?"));

console.log(yourTrip + " km" + " lunghezza del viaggio.");
console.log(yourAge + " età");

if ((yourTrip < 1) || (yourAge < 1)) {
    alert('devi inserire un numero da 1 in su!')

} else if ((Number.isNaN(yourTrip)) || (Number.isNaN(yourAge))) {
    alert('devi inserire un numero maggiore di 0!!!');
} else {
    var ticketKmCost = 0.21; // € al km

    var totTicketEuro = (ticketKmCost * yourTrip).toFixed(2);

    if ((yourAge >= 18) && (yourAge < 65)) {
        console.log(totTicketEuro + "€" + " costo del biglietto.");
        document.getElementById('ticketPrice').innerHTML= totTicketEuro + " €" + " costo del biglietto.";
        
    } else if (yourAge < 18) {
        var totTicketEuroTeen = ((totTicketEuro) - ((totTicketEuro * 20) / 100)).toFixed(2);
        console.log(totTicketEuroTeen + "€" + " costo del biglietto.");
        document.getElementById('ticketPrice').innerHTML= totTicketEuroTeen + " €" + " costo del biglietto.";

    } else if (yourAge >= 65) {
        var totTicketEuroSenior = ((totTicketEuro) - ((totTicketEuro * 40) / 100)).toFixed(2);
        console.log(totTicketEuroSenior + "€" + " costo del biglietto.");
        document.getElementById('ticketPrice').innerHTML= totTicketEuroSenior + " €" + " costo del biglietto.";

    }
}