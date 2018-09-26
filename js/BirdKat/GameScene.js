

function GameScene() {
    this.name = "Game Scene";

    var bgGame;

	var bird;
    
    var elapsedTime = 0;

    this.Update = function (delta)
    {
        
    }

    this.Draw = function ()
    {
        graph.Draw(bgGame, 0, 0);
        graph.Draw(bird.getImage(), bird.currPosX, bird.currPosY);
    }

    this.OnEnter = function()
    {
        bgGame = loader.getFile("bg");
        bird = new Bird("bird", graph.getWidth() / 4, graph.getHeight() / 2);
    }

    this.OnExit  = function()
    {

    }
}