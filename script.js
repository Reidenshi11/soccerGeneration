let arrTeam = [
    {name: "FC Sassaki",
    city: "Moscow",
    players: [],
    },
    {name: "FC Gordon",
    city: "Voronesh",
    players: [],
    },
    {name: "FC Bicks",
    city: "Voronesh",
    players: [],
    },
    {name: "FC Pussys",
    city: "Voronesh",
    players: [],
    }
];

let arrPlayers = [
    {name: "Samuel Clarke",
    age: 30,
    },
    {name: "William Smith",
    age: 33,
    },
    {name: "Cory Simmons",
    age: 28,
    },
    {name: "George Thompson",
    age: 45,
    },
    {name: "Mark Young",
    age: 50,
    },
    {name: "Michael Holt",
    age: 31,
    },
    {name: "Kevin Kelley",
    age: 31,
    },
    {name: "Samuel Brown",
    age: 31,
    },
    {name: "David Roberts",
    age: 31,
    },
    {name: "Paul Washington",
    age: 31,
    },
    {name: "Jacob Gibson",
    age: 31,
    },
    {name: "James Rios",
    age: 31,
    },
    {name: "Thomas Baker",
    age: 31,
    },
    {name: "John Carroll",
    age: 31,
    },
    {name: "Michael Perez",
    age: 31,
    },
    {name: "Jerry Carter",
    age: 31,
    },
    {name: "Donald White",
    age: 31,
    },
    {name: "Mark Burke",
    age: 31,
    },
    {name: "Tom Simpson",
    age: 31,
    },
    {name: "Brad Garcia",
    age: 31,
    },
];

let team = [
    arrTeam[0],
    arrTeam[1],
    arrTeam[2],
    arrTeam[3]
]

let currentTour = 1;

const areaTest = document.querySelector('.test');
const calendarArea = document.querySelector('.main__calendar_header');
const btnGameTour = document.getElementById('btnGameTour');
const btnGeneration = document.getElementById('btnGen');
const btnRenameOk = document.getElementById('btnRenameOk');
const inputRenameTeam = document.querySelectorAll('.input__nameTeam');
const nameTeam = document.querySelectorAll('.team__name');
console.log('nameTeam: ', nameTeam);
console.log('nameTeam[0].textcontent: ', nameTeam[0].textContent);


function mathRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomValue;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
      // поменять элементы местами
      // мы используем для этого синтаксис "деструктурирующее присваивание"
      // подробнее о нём - в следующих главах
      // то же самое можно записать как:
      // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
    }
}

let randomPlayer = function(teams, players) {
    let currentPlayers = [];
    currentPlayers = players.slice();
    for(let k =0; k < +(teams.length); k++) {
        teams[k].players = [];
    }
    shuffle(currentPlayers);
    console.log("1");
    for(let i = 0; i < +(currentPlayers.length);) {
        shuffle(currentPlayers);
        console.log("2");
        for (let j = 0 ; j < +(teams.length); j++) {
            shuffle(currentPlayers);
            console.log("3");
            if (+(teams[j].players.length) <= Math.ceil(((arrPlayers.length) / +(team.length)) - 1)) {
                teams[j].players.push(currentPlayers[0]);
                currentPlayers.shift();
                console.log("4");
            }
        }
    }


    let outScreenTeamPlayers = function(arrTeam) {
        console.log("5");
        for(let i = 0; i < +(arrTeam.length); i++) {
            areaTest.innerHTML += `${teams[i].name}` + " : ";
            console.log("6");
            for(let j = 0; j < +(arrTeam[i].players.length); j++) {
            areaTest.innerHTML += `${teams[i].players[j].name}` + ", ";
            console.log("7");
            }

            areaTest.innerHTML += "<br>";
        }
    }

    outScreenTeamPlayers(teams);

}



btnGameTour.addEventListener('click', function() {
    if(currentTour <= ((+(team.length) * 2) - 2)){
        clndArea.insertAdjacentHTML('beforeend', `   
        <div class="calendar_tour"> 
                <div class="calendar_tour_header">Тур №${currentTour}</div>
                    <table class="calendar_tour_container">
                        <tr class="calendar_tour_tr">
                            <td class="calendar_tour_td">Team3</td>
                            <td class="calendar_tour_td">${mathRandom(0, 5)}</td>
                            <td class="calendar_tour_td">:</td>
                            <td class="calendar_tour_td">${mathRandom(0, 5)}</td>
                            <td class="calendar_tour_td">Team2</td>
                        </tr>
                        <tr class="calendar_tour_tr">
                            <td class="calendar_tour_td">Team1</td>
                            <td class="calendar_tour_td">${mathRandom(0, 5)}</td>
                            <td class="calendar_tour_td">:</td>
                            <td class="calendar_tour_td">${mathRandom(0, 5)}</td>
                            <td class="calendar_tour_td">Team4</td>
                        </tr>
                    </table>
            </div>
    `);
        currentTour++;
    }
})

btnGeneration.addEventListener('click', function() {
    areaTest.textContent = '';
    randomPlayer(team, arrPlayers);
});


inputRenameTeam.forEach(element => {
    console.log('inputRenameTeam: ', inputRenameTeam);
    btnRename.addEventListener('click', function() {
        element.classList.replace('hidden', 'visible');
        // element.value = 'Test';
        console.log('inputRenameTeam2: ', inputRenameTeam);
        console.log('element: ', element);
    })
});

// btnRenameOk.onclick = () => {
//     for(let i = 0; i < +(nameTeam.length); i++) {
//         nameTeam[i].textContent = inputRenameTeam[i].value;
//     }
//     inputRenameTeam.forEach(element => {
//         element.classList.replace('visible', 'hidden');
//     });
    
// }

btnRenameOk.addEventListener('click', function() {
    for(let i = 0; i < +(nameTeam.length); i++) {
        nameTeam[i].textContent = inputRenameTeam[i].value;
    }
    inputRenameTeam.forEach(element => {
        element.classList.replace('visible', 'hidden');
    }); 
})

// function renameTeam(nameTeamCurrent, nameTeamUser) {

// }
function renameTeam() {
    for(let i =0; i < +(nameTeam.length); i++) {
        inputRenameTeam[i].value = nameTeam[i].textContent;
    }
}

renameTeam()


console.log(arrTeam[0]);
console.log(arrTeam[1]);
console.log(arrTeam[2]);
console.log(arrTeam[3]);
