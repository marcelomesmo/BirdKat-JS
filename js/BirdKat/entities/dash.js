
function Dash() {

	var image = loader.getFile("dash");

	var totalCharges = 1;
	var dashCharges = 1;

	var barWidth = 60;
	var barHeight = 10;

	var power = 100;

	var reloadTime = 0;

	var RELOAD_CD = 1500; //ms

	this.Update = function(delta)
	{
		reloadTime += delta;

		if(reloadTime > RELOAD_CD) 
		{
			dashCharges = 1;
			reloadTime = 0;
		}
	}

	this.Draw = function(x, y)
	{
		graph.Draw(image, x, y);

		if(dashCharges == totalCharges) graph.DrawRect(x + image.width + 10, y+4, barWidth, barHeight);
		else graph.DrawRect(x + image.width + 10, y+4, barWidth * reloadTime/RELOAD_CD, barHeight);
	}

	this.isAvailable = function()
	{
		if(dashCharges > 0) return true;
	}

	this.Use = function()
	{
		if(dashCharges > 0) dashCharges--;

		reloadTime = 0;
	}

	this.Reload = function()
	{
		dashCharges = totalCharges;
	}

	this.getPower = function()
	{
		return power;
	}
}