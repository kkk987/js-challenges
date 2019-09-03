// Write a method that will take an array player scores for a series of games
// and return the name of the player with the highest total score.
// Test your solution:
// npm test

class Player {
    constructor(name, scores) {
        this.name = name
        this.scores = scores
    }
}


function findWinner(players) {
    // Your code here
    // console.log(`first player: ${players[0].name} ${players[0].scores}`);
    let winer, preHigh = 0, curHigh = 0;

    for(let i = 0; i < players.length; i++) {
        curHigh = players[i].scores.reduce((preVal, curVal, i) => preVal + curVal);
        if(curHigh > preHigh) {
            winer = players[i].name;
            preHigh = curHigh;
        }
    }
    console.log(`winer: ${winer}`);
    return winer;
}
let player = [];
players = [new Player('James', [50, 100, 85]), new Player('Nathan', [40, 90, 86])];
findWinner(players);

module.exports = {
    findWinner
}