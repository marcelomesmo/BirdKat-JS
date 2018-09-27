var KEY = {
    SPACE: 32,
    X: 88
}

function KeyboardController()
{
    var keyPressed = {
        SPACE: false,
        X: false
    };

    this.Init = function()
    {

        //graph.getCanvas().addEventListener('keydown', OnKeyDown);
        document.addEventListener("keydown", this.OnKeyDown);
        document.addEventListener("keyup", this.OnKeyUp);

        console.log("Keyboard Input Initialized.");
    }

    this.Clear = function()
    {
        keyPressed.SPACE = false;
        keyPressed.X = false;
    }

    this.IsKeyPressed = function(e)
    {
        // Could handle this better with more time
        if(e == KEY.SPACE)
        {
            return keyPressed.SPACE;
        }

        if(e == KEY.X)
        {
            return keyPressed.X;
        }

        return false;
    }

    this.OnKeyDown = function(e)
    {
        var keyCode = e.keyCode;
        
        if (keyCode == KEY.SPACE) {
            keyPressed.SPACE = true;
        }
        else if (keyCode == KEY.X) {
            keyPressed.X = true;
        }

        //console.log("Keyboard pressed: " + String.fromCharCode(e.keyCode));
    }

    this.OnKeyUp = function(e)
    {
        var keyCode = e.keyCode;

        if (keyCode == KEY.SPACE) {
            keyPressed.SPACE = false;
        }
        else if (keyCode == KEY.X) {
            keyPressed.X = false;
        }
        //console.log("Keyboard relased: " + String.fromCharCode(e.keyCode));
    }
}