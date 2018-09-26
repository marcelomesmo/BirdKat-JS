// CONST
var JUMPSTREGHT = -4;
var GRAVITY = 0.25;

// Game related
var score;

/*
	Our pretty much awesome BirdKat shooter.

*/
function Bird(imgName, sPosX, sPosY) {

	var image = loader.getFile(imgName);//new Image();//new Sprite("assets/bird.png");
	//this.image.src = "assets/bird.png";

	// Absolute positions
	var startPosX, startPosY;
	var currPosX, currPosY;

	var velX, velY;

	// Init positions
	this.startPosX = this.currPosX = sPosX;
	this.startPosY = this.currPosY = sPosY;

	console.log("Bird at X " + this.currPosX + " Y " + this.currPosY);

	this.Update = function()
	{
		// Update Bird speed and position
		this.velY += GRAVITY;
		this.currPosY += velocity;

		if(this.currPosY > height)
		{
			this.currPosY = height;
			this.Hover();
		}

		if(this.currPosY < 0)
		{
			this.currPosY = 0;
			this.Hover();
		}
	}
	
	/*this.Draw = function ()
	{
		//graph.Draw(this.image.getSprite(), this.currPosX, this.currPosY);
		this.image.Draw(this.currPosX, this.currPosY);
	}*/


	this.Hover = function()
	{
		this.velY = 0;
	}

	this.Flap = function()
	{
	   this.velY = JUMPSTREGHT;
	   println("Bird vel Y: ", this.velY);
	   // SFX
	   //soundJump.stop();
	   soundJump.play();
	}

	this.Dead = function()
	{

	}

	this.Dash = function()
	{

	}

	this.Shoot = function()
	{

	}

	//this.getSprite = function ()
	this.getImage = function ()
	{
		return image;//this.image.getSpriteImage();
	}
}