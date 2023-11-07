// creo una griglia dinamica, inserendo N elemnti .square nel container
let nCells = 100;

// mi prendo la mia griglia
let grid = document.querySelector('#grid');

// prendo il pulsante PLAY
const play = document.querySelector('#play');

// faccio apparire la mia griglia al click del play
play.addEventListener('click', function() {
    
    // FOR che mi cicla da 1 cella a nCells che ho impostato
    for (let i = 1; i <= nCells; i++) {
        
        // creo il mio div
        const cell = document.createElement('div');

        // aggiungo la mia classe al div
        cell.classList.add('square');

        // metto il div nel mio cell nella dabella grid
        grid.appendChild(cell);

        // creo il mio 


        // aggiungo un addEvenListener per ogni cella al click
        // voglio gestire ogni quadrato al click
        cell.addEventListener('click', function () {

            // al console log fa vedere che cella clicko
            console.log('cell N:', i);

            // this (si riferisce all'elemento dell'addEvenetListener)
            //  toggle (aggiunge e toglie la classe da un elemento)
            this.classList.toggle('highlight');
        });
        
    }
});
