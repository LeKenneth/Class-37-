var database;
var gameState = 0;
var playerCount;
var game, form, player;

var car1, car2, car3, car4;
var cars;
var allPlayers;


function setup(){
    createCanvas(displayWidth - 20,displayHeight - 30);
    database = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if (playerCount === 4) {
        game.update(1)
    } 
    if (gameState === 1) {
        clear();
        game.play();
    }
}

