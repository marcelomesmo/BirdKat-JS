

function SplashScene() {
    this.name = "Splash Scene";

    var splashImage;
    var playOnce = true;
    
    var elapsedTime = 0;

    this.Update = function (delta)
    {
        elapsedTime += delta;

        if(elapsedTime > 300 && playOnce){
            sfxScore.stop();
            sfxScore.play();
            playOnce = false;
        } 

        if(elapsedTime > 1500) game.AddScene(new MenuScene());
    }

    this.Draw = function ()
    {
        graph.DrawRect(0,0, graph.getWidth(), graph.getHeight());
        if(elapsedTime > 300) graph.Draw(splashImage, graph.getWidth()/2 - splashImage.width/2, graph.getHeight()/2 - splashImage.height/2);
    }

    this.OnEnter = function()
    {
        splashImage = loader.getFile("splash");
    }

    this.OnExit  = function()
    {

    }
}