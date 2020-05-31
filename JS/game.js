class Game {
    constructor() {}
    getState () {
        var readState = database.ref('gameState');
        readState.on("value",function(data){
            gameState=data.val();
        })
    }
    update (state) {
        data.ref('/').update({
            gameState : state
        })
    }
    async start () {
        if (gameState === 0) {
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value");
            if (playerCountref.exists()) {
                playerCount = playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }
    play () {
        form.hide();
        textSize(30);
        text("gameStart",120,100);
        player.playerInfo();
        if (allPlayers!== undefined) {
            for (var plar in allPlayers) {
                if (plar === "player"+player.index) {
                    fill("red");
                } else {
                    fill("black");
                }
            var displayPosition = 130;
            displayPosition+= 20;
            textSize(15);
            text(allPlayers[plar].name+":"+allPlayers[plar].distance,120,displayPosition);
            }
        }
        if (keyIsDown(UP_ARROW) && player.index!== null) {
            player.distance+= 50;
            player.update();
        }
    }
}