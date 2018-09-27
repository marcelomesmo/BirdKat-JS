// CONST
var JUMPSTREGHT = -2;
var GRAVITY = 0.1;

// Game related
var score = 0;

/*
	Our pretty much awesome BirdKat shooter.

*/

function Bird(imgName, sPosX, sPosY) {

	var image = loader.getFile(imgName);

	var weapon = new Weapon();

	var dash = new Dash();
	var isDashing;
	var dashTime;

	// Absolute positions
	var startPosX, startPosY;
	var currPosX, currPosY;

	var velX;
	var velY;

	this.velX = this.velY = 0;

	// Init positions
	this.startPosX = this.currPosX = sPosX;
	this.startPosY = this.currPosY = sPosY;

	this.isDashing = false;
	this.dashTime = 0;

	//console.log("Bird at X " + this.currPosX + " Y " + this.currPosY);

	// Update Bird speed and position
	this.Update = function(delta)
	{

		/*
			#### DASH POWER ####
		*/
		this.velX = 0;

			if(/*Mouse.IsMouseSwiped(SWIPE.RIGHT) ||*/ Keyboard.IsKeyPressed(KEY.X))
			{
				this.Dash();
			}
			
		if(this.isDashing)
			{
				if(this.dashTime > 300) this.velX = -100;

			}

		this.currPosX += this.velX * delta/10;

		if(this.isDashing)
			{
				if(this.currPosX < this.startPosX) {
			this.currPosX = this.startPosX;
			this.isDashing = false;
			this.dashTime = 0;
		 	}

		this.dashTime += delta;
		}

		
		if(!this.isDashing)
		{
			

			/*
			#### JUMP&SHOOT POWER ####
			*/
			this.velY += GRAVITY;

			if(Mouse.IsMousePressed() || Keyboard.IsKeyPressed(KEY.SPACE))
			{
				this.Flap();
				this.Shoot();
			}

			this.currPosY += this.velY * delta/10;

		    /*
		    	#### DYING ####
		    */
			if(this.currPosY > graph.getHeight())
			{
				this.Dead();
			}

			/*
				#### HIT THE CEILING ####
			*/
			if(this.currPosY < 0)
			{
				this.currPosY = 0;
				this.Hover();
			}

			weapon.Update(delta);
		}

		dash.Update(delta);
	}

	this.Draw = function ()
	{
		graph.Draw(image, this.currPosX, this.currPosY);

		weapon.Draw(10, 10);
		dash.Draw(10, 26);
	}


	this.Hover = function()
	{
		this.velY = 0;
	}

	this.Flap = function()
	{
		this.velY = JUMPSTREGHT;
		// SFX
		sfxJump.stop();
		sfxJump.play();
	}

	this.Dead = function()
	{
		// SFX
	   	sfxDie.stop();
	   	sfxDie.play();
	}

	this.Dash = function()
	{
		if(dash.isAvailable())
		{
			this.isDashing = true;
			this.velX = dash.getPower();
			dash.Use();
		}
		// SFX
	   	sfxJump.stop();
	   	sfxJump.play();
	}

	this.Shoot = function()
	{
		weapon.Shoot();
		// SFX
	   	sfxHit.stop();
	   	sfxHit.play();
	}

	this.getImage = function ()
	{
		return image;
	}
}