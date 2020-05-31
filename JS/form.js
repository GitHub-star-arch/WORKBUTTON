class Form {
    constructor(){
        this.input=createInput("name");
        this.button=createButton('play');
        this.greeting=createElement('h2');
    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);

        this.input.position(130,160);

        this.button.position(250,200);
        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
            var name = input.value();
            playerCount = playerCount + 1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hello"+name);
            this.greeting.position(130,160);
        });
    }
    hide () {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}