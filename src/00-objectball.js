// src/00-objectball.js

function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

// Helper function to find a player by name
function findPlayer(playerName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
        }
    }
    return null;
}

// 1. Find the number of points scored by a player
function numPointsScored(playerName) {
    let player = findPlayer(playerName);
    return player ? player.points : null;
}

// 2. Find the shoe size of a player
function shoeSize(playerName) {
    let player = findPlayer(playerName);
    return player ? player.shoe : null;
}

// 3. Get team colors
function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return null;
}

// 4. Return an array of team names
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// 5. Get player numbers for a team
function playerNumbers(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return Object.values(game[team].players).map(player => player.number);
        }
    }
    return null;
}

// 6. Get player stats
function playerStats(playerName) {
    return findPlayer(playerName);
}

// 7. Find rebounds of the player with the biggest shoe
function bigShoeRebounds() {
    const game = gameObject();
    let biggestShoe = 0;
    let rebounds = 0;

    for (let team in game) {
        for (let player in game[team].players) {
            let playerData = game[team].players[player];
            if (playerData.shoe > biggestShoe) {
                biggestShoe = playerData.shoe;
                rebounds = playerData.rebounds;
            }
        }
    }
    return rebounds;
}

// 8. Find the player with the most points
function mostPointsScored() {
    const game = gameObject();
    let mostPoints = 0;
    let topPlayer = "";

    for (let team in game) {
        for (let player in game[team].players) {
            let playerData = game[team].players[player];
            if (playerData.points > mostPoints) {
                mostPoints = playerData.points;
                topPlayer = player;
            }
        }
    }
    return topPlayer;
}

// 9. Find the team with the most points
function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    for (let player in game.home.players) {
        homePoints += game.home.players[player].points;
    }
    for (let player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }

    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

// 10. Find the player with the longest name
function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";

    for (let team in game) {
        for (let player in game[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    return longestName;
}

// 11. Check if the player with the longest name has the most steals
function doesLongNameStealATon() {
    const longestNamePlayer = playerWithLongestName();
    const game = gameObject();
    let maxSteals = 0;

    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].steals > maxSteals) {
                maxSteals = game[team].players[player].steals;
            }
        }
    }

    return findPlayer(longestNamePlayer).steals === maxSteals;
}

// TESTING FUNCTIONS
console.log(numPointsScored("Mason Plumlee")); // 26
console.log(shoeSize("Ben Gordon")); // 15
console.log(teamColors("Brooklyn Nets")); // ["Black", "White"]
console.log(teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]
console.log(playerNumbers("Charlotte Hornets")); // [4, 0, 2, 8, 33]
console.log(playerStats("Jason Terry"));
console.log(bigShoeRebounds()); // 12
console.log(mostPointsScored()); // "Ben Gordon"
console.log(winningTeam()); // "Charlotte Hornets"
console.log(playerWithLongestName()); // "Brendan Haywood"
console.log(doesLongNameStealATon()); // true

