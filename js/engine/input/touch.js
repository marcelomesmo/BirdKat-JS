function TouchController()
{
  var X = 0;
  var Y = 0;

  var touchpress = false;

  this.Init = function()
  {
      graph.getCanvas().addEventListener("touchstart", OnTouchStart);
      graph.getCanvas().addEventListener("touchend", OnTouchEnd);

      console.log("Touch Input Initialized.");
  }

  this.IsTouching = function()
  {
    return this.touchpress;
  }

  OnTouchStart = function()
  {
    Touch.touchpress = true;
  }

  OnTouchEnd = function() 
  {
    Touch.touchpress = false;
  }
}
