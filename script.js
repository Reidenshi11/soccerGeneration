let arrTeam = [
    {name: "Team Z",
    players: [],
    },
    {name: "Team V",
    players: [],
    },
    {name: "Team Y",
    players: [],
    },
    {name: "Team X",
    players: [],
    }
];


teamOne.textContent = `${arrTeam[0].name}`;
teamTwo.textContent = `${arrTeam[1].name}`;
teamThree.textContent = `${arrTeam[2].name}`;
teamFour.textContent = `${arrTeam[3].name}`;

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

console.log('arrTeam[0]: ', arrTeam[0].name);

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

function playTour() {
    function generationResult(team) {
        if(currentTour <= ((+(team.length) * 2) - 2)){
            let goalTeam1 = mathRandom(0, 5);
            let goalTeam2 = mathRandom(0, 5);
            let goalTeam3 = mathRandom(0, 5);
            let goalTeam4 = mathRandom(0, 5);
    
            let result = [
                {name: team[0].name, goal: goalTeam1},
                {name: team[1].name, goal: goalTeam2},
                {name: team[2].name, goal: goalTeam3},
                {name: team[3].name, goal: goalTeam4}
        ];
            
    
            tourToScreen(team[0],team[1],team[2],team[3],goalTeam1,goalTeam2,goalTeam3,goalTeam4);

            currentTour++;
        } else {
            clndArea.insertAdjacentHTML('beforeend', `   
            <h3>Все туры сыграны</h3>
        `);
        }
    }

    generationResult(team);

}

function winOrLose(goalTeam1, goalTeam2, team) {
    let classTeam1 = goalTeam1; 
    let classTeam2 = goalTeam2; 
    
    ////team //// 1 or 2

    if(goalTeam1 > goalTeam2) {
        classTeam1 = 'win';
        classTeam2 = 'lose';
        if (team == 1) {
            return classTeam1;
        } else if (team == 2) {
            return classTeam2;
        } else {
            console.log('winOrLose: error_1')
        }
    } else if(goalTeam1 < goalTeam2) {
        classTeam1 = 'lose';
        classTeam2 = 'win';
        if (team == 1) {
            return classTeam1;
        } else if (team == 2) {
            return classTeam2;
        } else {
            console.log('winOrLose: error_2')
        }
    } else {
        classTeam1 = 'draw';
        classTeam2 = 'draw';
        if (team == 1) {
            return classTeam1;
        } else if (team == 2) {
            return classTeam2;
        } else {
            console.log('winOrLose: error_3')
        }
    }
};


function tourToScreen(team1, team2, team3, team4, resT1, resT2, resT3, resT4) {

    
    // clndArea.insertAdjacentHTML('beforeend', `   
    //     <div class="calendar_tour"> 
    //             <div class="calendar_tour_header">Тур №${currentTour}</div>
    //                 <table class="calendar_tour_container">
    //                     <tr class="calendar_tour_tr">
    //                         <td class="${winOrLose(resT1, resT2, 1)}" class="calendar_tour_td">${team1}</td>
    //                         <td class="calendar_tour_td">${resT1}</td>
    //                         <td class="calendar_tour_td">:</td>
    //                         <td class="calendar_tour_td">${resT2}</td>
    //                         <td class="${winOrLose(resT1, resT2, 2)}" class="calendar_tour_td">${team2}</td>
    //                     </tr>
    //                     <tr class="calendar_tour_tr">
    //                         <td class="${winOrLose(resT3, resT4, 1)}" class="calendar_tour_td">${team3}</td>
    //                         <td class="calendar_tour_td">${resT3}</td>
    //                         <td class="calendar_tour_td">:</td>
    //                         <td class="calendar_tour_td">${resT4}</td>
    //                         <td class="${winOrLose(resT3, resT4, 2)}" class="calendar_tour_td">${team4}</td>
    //                     </tr>
    //                 </table>
    //         </div>
    // `);


    function goalPlayer(club, quality, tour, idDom) { //team - arr

        let idDomDiv = document.querySelector(`#${idDom}_${tour}`);
        

        for (let i = 0; i < +quality; i++) {
            // let randomPlayer = mathRandom(0, );
            let x = +club.players.length;
            console.log('x : ', x );
            let pl =  club.players[(mathRandom(0, (x - 1)))].name;
            idDomDiv.insertAdjacentHTML('beforeend', `<p>${pl}</p>`);
        }
    }

    clndArea.insertAdjacentHTML('beforeend', `   
                    <div class="calendar_tour"> 
                        <div class="calendar_tour_header">Тур №${currentTour}</div>
                            <div class="calendar_tour_container">
                                <div class="result__match">
                                    <div class="calendar_tour_tr">
                                        <div class="${winOrLose(resT1, resT2, 1)}" class="calendar_tour_td">${team1.name}</div>
                                        <div class="calendar_tour_td">${resT1}</div>
                                        <div class="calendar_tour_td">:</div>
                                        <div class="calendar_tour_td">${resT2}</div>
                                        <div class="${winOrLose(resT1, resT2, 2)}" class="calendar_tour_td">${team2.name}</div>
                                    </div>
                                    <details open="open">
                                        <summary>Итоги матча:</summary>
                                            <div class="res__match">
                                                <div class="player__goal" id="resTeamGoal1_${currentTour}">
                                                </div>

                                                <div class="player__goal" id="resTeamGoal2_${currentTour}">
                                                </div>
                                            </div>
                                    </details>
                                </div>

                                <div class="result__match">
                                    <div class="calendar_tour_tr">
                                        <div class="${winOrLose(resT3, resT4, 1)}" class="calendar_tour_td">${team3.name}</div>
                                        <div class="calendar_tour_td">${resT3}</div>
                                        <div class="calendar_tour_td">:</div>
                                        <div class="calendar_tour_td">${resT4}</div>
                                        <div class="${winOrLose(resT3, resT4, 2)}" class="calendar_tour_td">${team4.name}</div>
                                    </div>
                                    <details open="open">
                                        <summary>Итоги матча:</summary>
                                            <div class="res__match">
                                                <div class="player__goal" id="resTeamGoal3_${currentTour}">
                                                </div>

                                                <div class="player__goal" id="resTeamGoal4_${currentTour}">
                                                </div>
                                            </div>
                                    </details>
                                </div>

                            </div>
                    </div>
    `);

    goalPlayer(team1, resT1, currentTour, 'resTeamGoal1');
    goalPlayer(team2, resT2, currentTour, 'resTeamGoal2');
    goalPlayer(team3, resT3, currentTour, 'resTeamGoal3');
    goalPlayer(team4, resT4, currentTour, 'resTeamGoal4');

}



btnGameTour.addEventListener('click', playTour)

// btnGameTour.addEventListener('click', function() {
//     if(currentTour <= ((+(team.length) * 2) - 2)){
//         clndArea.insertAdjacentHTML('beforeend', `   
//         <div class="calendar_tour"> 
//                 <div class="calendar_tour_header">Тур №${currentTour}</div>
//                     <table class="calendar_tour_container">
//                         <tr class="calendar_tour_tr">
//                             <td class="calendar_tour_td">Team3</td>
//                             <td class="calendar_tour_td">${mathRandom(0, 5)}</td>
//                             <td class="calendar_tour_td">:</td>
//                             <td class="calendar_tour_td">${mathRandom(0, 5)}</td>
//                             <td class="calendar_tour_td">Team2</td>
//                         </tr>
//                         <tr class="calendar_tour_tr">
//                             <td class="calendar_tour_td">Team1</td>
//                             <td class="calendar_tour_td">${mathRandom(0, 5)}</td>
//                             <td class="calendar_tour_td">:</td>
//                             <td class="calendar_tour_td">${mathRandom(0, 5)}</td>
//                             <td class="calendar_tour_td">Team4</td>
//                         </tr>
//                     </table>
//             </div>
//     `);
//         currentTour++;
//     }
// })

btnGeneration.addEventListener('click', function() {
    areaTest.textContent = '';
    randomPlayer(team, arrPlayers);
});

randomPlayer(team, arrPlayers);
console.log('team: ', team);
console.log('team[0]: ', team[0]);

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


// function renameTeam() {
//     for(let i =0; i < +(nameTeam.length); i++) {
//         inputRenameTeam[i].value = nameTeam[i].textContent;
//     }
// }

// renameTeam()


console.log(arrTeam[0]);
console.log(arrTeam[1]);
console.log(arrTeam[2]);
console.log(arrTeam[3]);
