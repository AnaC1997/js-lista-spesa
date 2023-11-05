//Array con lista spesa
const listaDellaSpesa = [
'Pane',
'Latte',
'Uova',
'Frutta',
'Verdura',
'Carne',
'Pasta',
'Riso',
'Formaggio',
'Sapone',
'Dentifricio',]

console.log(listaDellaSpesa);
//Variabile che cercare l'elemento html con  id: lista
const ul = document.getElementById("lista");

// Inizializzara per scorrere l'array in 0 (prima posizione)
let i = 0;

//Aggiungera gli elementi dell'array alla lista in pagina
while (i <listaDellaSpesa.length){
    // Creara un elemento <li> per ogni elemento dell'array
    const li = document.createElement("li");
    li.textContent = listaDellaSpesa[i];
    // Aggiungere l'elemento <li> all'elemento <ul>
    ul.appendChild(li);
    
    // Incrementare la lista dell'array
    i++;
}



