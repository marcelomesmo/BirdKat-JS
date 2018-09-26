

function MenuScene() {
    this.name = "Menu Scene";

    var bgMenu;
    
    var elapsedTime = 0;

    this.Update = function (delta)
    {
        if(Mouse.IsMouseDown()) game.AddScene(new GameScene());

        //if(Keyboard.IsPressed(KEY.SPACE)); //

        //if(Keyboard.IsPressed(KEY.X)); //
    }

    this.Draw = function ()
    {
        //graph.DrawRect(0, 0, graph.getWidth(), graph.getHeight());
        graph.Draw(bgMenu, 0, 0);
    }

    this.OnEnter = function()
    {
        bgMenu = loader.getFile("menu");
    }

    this.OnExit  = function()
    {

    }
}