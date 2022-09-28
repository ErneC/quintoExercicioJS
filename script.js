
// Método appendChild = onde consigo colocar um elemento dentro do outro.

let p = document.createElement("p");
let p1 = document.createElement("p");
let idMensagem = document.getElementById("mensagem");

p.innerHTML = "Criando um elemento..."; 
p1.innerHTML = "Criando outro elemento..."; 

idMensagem.appendChild(p);
idMensagem.appendChild(p1);