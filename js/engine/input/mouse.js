function MouseController()
{
	// var X = 0;
	// var Y = 0;

	var mousepress = false;

	this.Init = function()
	{
	    graph.getCanvas().addEventListener("mousedown", OnMouseDown);
	    graph.getCanvas().addEventListener("mouseup", OnMouseUp);

	    console.log("Mouse Input Initialized.");
	}

	this.IsMouseDown = function()
	{
		return this.mousepress;
	}

	OnMouseDown = function()
	{
		Mouse.mousepress = true;
	}

	OnMouseUp = function() 
	{
		Mouse.mousepress = false;
	}
}
