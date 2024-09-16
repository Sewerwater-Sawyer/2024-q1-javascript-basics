//@ts-check

let playerControls = document.getElementById("player-controls");

let isGameOver = false

let weapons = [
    {
        type: "Rock",
        beats: "Scissors"
    },
    {
        type: "Paper",
        beats: "Rock"
    },
    {
        type: "Scissors",
        beats: "Paper"
    }
];

function pickRandomWeapons(weapons) {
    let rnjesus = Math.floor(Math.random() * weapons.length);
    return weapons[rnjesus];
}

function determineOutCome(playerWeapon, computerWeapon) {
    if (playerWeapon.type === computerWeapon.type) {
        return "Its a tie! Try again";
    }

    if (playerWeapon.beats === computerWeapon.type) {
        
        isGameOver = true;

        return `Player wins! ${playerWeapon.type} beats ${computerWeapon.type}`;
    }

    return `Computer wins! ${computerWeapon.type} beats ${playerWeapon.type}`;
}

 function playerControlHandler(e) {
//     if(isGameOver) {
//         return;
//    }

    let weaponName = e.target.innerText;
    let playerWeapon = weapons.find(w => w.type === weaponName);

    if (!playerWeapon) {
        console.log("ERROR! Player weapon undefined");
        return;
    }



    console.log(result);

    console.log(weaponName,  "was selected");
}

playerControls?.addEventListener("click", playerControlHandler);
