const miDiv = document.querySelector ("#mi-div");

const MAX_ITER      = 5;
const MAX_ITER_2    = 25

for (let i = 0; i < MAX_ITER ; i++) {

    miDiv.innerHTML += `<p>HOLA!!! - ${i+1}</p>`
} 

for (let i = MAX_ITER; i < MAX_ITER_2 ; i++) {

    miDiv.innerHTML += `<p>HOLA!!! - ${i+1+MAX_ITER}</p>`
} 