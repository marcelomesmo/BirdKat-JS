
function Dash() {

	var image = loader.getFile("dash");

	var totalCharges = 1;
	var dashCharges = 1;
//	var weaponCD = 0.3;
	var barW = 60;
	var barH = 14;

	var power = 100;

	var reloadTime = 0;

	this.Update = function(delta)
	{
		reloadTime += delta;

		if(reloadTime > 500) 
		{
			dashCharges = 1;
			reloadTime = 0;
		}
	}

	this.Draw = function(x, y)
	{
		graph.Draw(image, x, y);

		graph.DrawRect(x + image.width, y, barW * dashCharges/totalCharges, barH);
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
		if(dashCharges < totalCharges) dashCharges++;
	}

	this.getPower = function()
	{
		return power;
	}
}