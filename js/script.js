//Scrivi un programma che stampi i numeri da 1 a 100, 
//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. 
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//----------Scomponiamo il problema----------
 //- Definiamo la variabile contatore
 //- Aggiungiamo istruzione di fine ciclo 
 //- Incrementiamo variabile contatore
 //- Controlliamo se i è multiplo di 3 e 5
 //- Controlliamo se i è solo multiplo di 3 
 //- Controlliamo se i è solo multiplo di 5




 for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    }
    else if(i % 3 === 0){
        console.log('Fizz');
    }
    else if(i % 5 === 0){
        console.log('Buzz');
    }
    else{
        console.log(i);
    }
}

