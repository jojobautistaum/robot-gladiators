var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Wou you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight ==="fight" || promptFight ==="FIGHT") {
            enemyHealth = enemyHealth - playerAttack;
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
            if (enemyHealth <= 0){
                window.alert(enemyName + " has died!");
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");

            }
            playerHealth = playerHealth - enemyAttack;
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }  
        } else if (promptFight === "skip" || promptFight ==="SKIP"){
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                endGame();
            } else {
                fight();
            }
            window.alert(playerName + " has chosen to skip the fight!");
        } else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
};

// function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    //player is either out of health or enemies to fight
    endGame();
};

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if(playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");
    if(playAgainConfirm){
        // restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        exit();
    }
}

// start the game when the page loads
startGame();