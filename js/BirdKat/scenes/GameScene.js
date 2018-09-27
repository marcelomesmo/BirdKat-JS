

function GameScene() {
    this.name = "Game Scene";

    // Bg
    var bgGame;
    // Foreground fire effect
    var fire;
    var fireX = 0;
    var tweenLeft = true;

    // Objects
	var bird;

    var pipes = [];
    var pipeSpawnTime = 0;
    var PIPE_SPAWN_TIME = 1700;

    // Game
    var restartTime = 0;
    var RESPAWN_TIME = 1000; // ms

    this.Update = function (delta)
    {
        bgGame.Update(delta);
        /*
            Bird life-cycle management
        */
        if(bird.IsDead())
        {
            if(restartTime < RESPAWN_TIME) restartTime += delta;
            else 
            {
                pipes.splice(0, pipes.length);    // Clear pipes. Performance is almost the same as pipes.length = 0. 
                bird.Rebirth();
                bgGame.Restart();
                restartTime = 0;
                score = 0;
            }
        }   
        else bird.Update(delta);

        if(bird.IsDashing()) 
        {
            pipeSpawnTime = 0;     // Stop pipes while dashing

            // Destroy pipes on screen 
            bird.Score(pipes.length);
            pipes.splice(0, pipes.length);    // Clear pipes. Performance is almost the same as pipes.length = 0. 
        }
        /*
            Pipe life-cycle management
        */
        if(pipeSpawnTime < PIPE_SPAWN_TIME) pipeSpawnTime += delta;
        else
        {
            // Create pipe line (top and bottom)
            var pipeLine = new Pipe();

            // Add to list
            pipes.push(pipeLine);

            pipeSpawnTime = 0;
        }

        for(let p of pipes)
        {
            p.Update(delta);
            //console.log("Pipe smoke " + pipes.indexOf(p) + " at " + p.X() + "x " + p.Y() + "y");

            // Check Dead & Score
            bird.checkCollision(p);

            // Check bullet colision
            bird.checkBullets(p);
        }

        // Clean pipes
        for(let p of pipes)
        {
            if(p.IsOutScreen() || p.IsDead()) 
            {
                var removePipe = pipes.indexOf(p);
                //console.log("Should remove pipe "+ removePipe + " at " + p.X());
                pipes.splice(removePipe, 1);

                if(p.IsDead()) bird.Score();
            }
        }


        // Draw Fire on screen
        if(!tweenLeft) fireX += (0.01) * delta;
        else fireX -= (0.01) * delta;

        if(fireX < -5) tweenLeft = false;
        if(fireX > 5) tweenLeft = true;
    }

    this.Draw = function ()
    {
        graph.FillScreen("#0095e9");
        bgGame.Draw();

        for(let p of pipes)
        {
            p.Draw();
        }

        bird.Draw();

        graph.Draw(fire, fireX, graph.getHeight() - fire.height);

        graph.DrawText("Score: "+ bird.getScore(), 200, 30, "white", "20px Verdana");
    }

    this.OnEnter = function()
    {
        bgGame = new ParallaxBg();

        fire = new Image();
        fire = loader.getFile("fire");

        bird = new Bird("bird", graph.getWidth() / 4, graph.getHeight() / 2);
    }

    this.OnExit  = function()
    {

    }
}