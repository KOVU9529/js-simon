/*Ciao ragazzi,
Esercizio di oggi: Simon Says
nome repo: js-simon
Descrizione:
Visualizzare in un alert 5 numeri casuali.
------------------------------------------
30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
------------------------------------------
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
------------------------------------------
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.*/

//Variabile array dove verrano visualizzati i 5 numeri random
const generateArrayRandom=generateNumb(5,1,100);
alert('Numeri random:'+' '+generateArrayRandom);

//Questo array conterrà solo i numeri dati dall'utente uguali a quelli generati random
let arrayFinal=[];

//TIMER
//il timer parte solo dopo aver chiuso l'alert iniziale
//segue 30 secondi di attesa
//successiva richiesta di 5 numeri
//il risultato finale saranno i numeri dettati dall'utente uguali a quelli random
 setTimeout(function(){
     //imposto la ripretizione della domanda per immettere i numeri
     for(i=0; i<5; i++){
         //Chiedere i numeri all'utente
         const userNumber=parseInt(prompt('Dimmi uno dei 5 numeri visualizzati 30 secondi fa'));
         //Imposto le condizioni di aggiunta all'arrayFinal
         if(generateArrayRandom.includes(userNumber)){
            arrayFinal.push(userNumber);
         }else{}
     } 
     alert('Numeri esattamente ricordati:'+' '+arrayFinal);
 },30000);

//Funzioni

//Impostazioni della funzione(Tipologia aggiunta nell'array)
function generateNumb(numbElement,rangeMin,rangeMax){
    const numbArray=[];
    //Ciclo while per il popolamento dell'array
    while(numbArray.length < numbElement){
        //Aggiorno gli argomenti
        const numbRandom=getRndInteger(rangeMin, rangeMax);
        //imposto le condizioni
        if(!numbArray.includes(numbRandom)){
            numbArray.push(numbRandom);
        }
    }
    return numbArray;
 }
 
 //Genero numeri random
 function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

