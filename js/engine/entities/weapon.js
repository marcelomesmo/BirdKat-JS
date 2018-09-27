

function Weapon() {

	var image = loader.getFile("weapon");

	var totalCharges = 10;
	var weaponCharges = 10;
//	var weaponCD = 0.3;
	var barW = 60;
	var barH = 14;

	var reloadTime = 0;

	this.Update = function(delta)
	{
		reloadTime += delta;

		if(reloadTime > 700) 
		{
			weaponCharges = 10;
			reloadTime = 0;
		}
	}

	this.Draw = function(x, y)
	{
		graph.Draw(image, x, y);

		graph.DrawRect(x + image.width, y, barW * weaponCharges/totalCharges, barH);
	}

	this.Shoot = function()
	{
		if(weaponCharges > 0) weaponCharges--;

		reloadTime = 0;
	}


	this.Reload = function()
	{
		if(weaponCharges < totalCharges) weaponCharges++;
	}

}