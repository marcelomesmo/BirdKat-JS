var KEY = {
    SPACE: 32,
    X: 88
}

function KeyboardController()
{

    var KeyPressed = [0, 0];    // Space and X

    this.Init = function()
    {
        var spacepress = false;
        var xpress = false;

        //graph.getCanvas().addEventListener('keydown', OnKeyDown);
        document.addEventListener("keydown", OnKeyDown);
        document.addEventListener("keyup", OnKeyUp);

        console.log("Keyboard Input Initialized.");
    }

    this.IsPressed = function(e)
    {
        // Could handle this better with more time
        if(e == KEY.SPACE && KeyPressed[0] == 1)
        {
            return true;
        }

        if(e == KEY.X && KeyPressed[1] == 1)
        {
            return true;
        }

        return false;
    }

    OnKeyDown = function(e)
    {
        var keyCode = e.keyCode;
        
        if (keyCode == KEY.SPACE) {
            spacepress = true;
            KeyPressed[0] = 1;
        }
        else if (keyCode == KEY.X) {
            xpress = true;
            KeyPressed[1] = 1;
        }

        //console.log("Keyboard pressed: " + String.fromCharCode(e.keyCode));
    }

    OnKeyUp = function(e)
    {
        KeyPressed = [0, 0];

        //console.log("Keyboard relased: " + String.fromCharCode(e.keyCode));
    }
}