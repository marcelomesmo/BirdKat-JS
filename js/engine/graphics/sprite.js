function Sprite(source)
{
	var spriteimage = new Image();
	spriteimage.src = source;

	var width, height;
	
	spriteimage.onload = function() {
		this.width = spriteimage.clientWidth;
		this.height = spriteimage.clientHeight;
	}

	//this.width = spriteimage.clientWidth;
	//this.height = spriteimage.clientHeight;

	//console.log("Created image " + spriteimage.src + " w: " + this.width + " h: " + this.height);

	this.getImage = function()
	{
		return spriteimage;
	}

	this.getSpriteWidth = function()
	{
		return this.width;
	}

	this.getSpriteHeight = function()
	{
		return this.height;
	}
	/*this.Draw = function(x, y)
	{
		graph.Draw(this.spriteimage, x, y);
	}*/
}
