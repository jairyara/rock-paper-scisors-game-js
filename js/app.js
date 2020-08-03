var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scisors = document.getElementById("scisors");
var userScore = 0;
var cpuScore = 0;
var userScore_span = document.getElementById("result-user");
var cpuScore_span = document.getElementById("result-cpu");
var nameUser = document.getElementById("name-user");
var message_span = document.getElementById("message");
var name = prompt("Ingresa tu nombre");
nameUser.innerHTML = name;
userScore_span.innerHTML = userScore;
cpuScore_span.innerHTML = cpuScore;



function cpuChoice() {
    var cpu = Math.floor(Math.random() * (4 - 1)) + 1;

    if (cpu === 1) {
        cpuOption = "Piedra";
    } else if (cpu === 2) {
        cpuOption = "Papel";
    } else {
        cpuOption = "Tijeras";
    }
    return cpu;
}


function userChoice() {

    rock.addEventListener('click', function() {
        play(1);
    })
    paper.addEventListener('click', function() {
        play(2);
    })
    scisors.addEventListener('click', function() {
        play(3);
    })

}


function play(userChoice) {
    var message;

    const pc = cpuChoice();

    if (
        (userChoice === 1 && pc === 3) ||
        (userChoice === 3 && pc === 2) ||
        (userChoice === 2 && pc === 1)
    ) {
        alert("CPU ha elegido " + cpuOption);
        userScore += 1;
        userScore_span.innerHTML = userScore;
        message = name + " gana";
        message_span.innerHTML = message;
    } else if (userChoice === pc) {
        alert("CPU ha elegido " + cpuOption);
        userScore += 0;
        cpuScore += 0;
        message = "Se produjo un empate";
        message_span.innerHTML = message;

    } else {
        alert("CPU ha elegido " + cpuOption);
        cpuScore += 1;
        cpuScore_span.innerHTML = cpuScore;
        message = "CPU gana";
        message_span.innerHTML = message;
    }

}

userChoice();