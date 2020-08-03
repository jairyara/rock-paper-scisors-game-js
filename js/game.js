var stone = 1;
var paper = 2;
var scisors = 3;

var user = parseInt(prompt("1. Piedra, 2. Papel; 3. Tijera"));

var cpu = Math.floor(Math.random() * (4 - 1)) + 1;

switch (cpu) {
    case 1:
        alert("CPU elige Piedra");
        break;
    case 2:
        alert("CPU elige Papel");
        break;
    case 3:
        alert("CPU elige Tijeras");
        break;
}

function play(user, cpu) {
    if (
        (user === 1 && cpu === 3) ||
        (user === 3 && cpu === 2) ||
        (user === 2 && cpu === 1)
    ) {
        alert("Usuario gana");
    } else if (user === cpu) {
        alert("Empate");
    } else {
        alert("Usuario pierde");
    }
}

play(user, cpu);