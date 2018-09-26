// SOUND


var fly = new Audio();
var scor = new Audio();

fly.src = "assets/sounds/sfx_wing.ogg";
scor.src = "assets/sounds/sfx_point.ogg";



var volume = 30;

var sfxJump = new buzz.sound("assets/sounds/sfx_wing.ogg", { preload: true, loop: false});
var sfxScore = new buzz.sound("assets/sounds/sfx_point.ogg", { preload: true, loop: false});
var sfxHit = new buzz.sound("assets/sounds/sfx_hit.ogg");
var sfxDie = new buzz.sound("assets/sounds/sfx_die.ogg");
var musicMenu = new buzz.sound("assets/sounds/sfx_swooshing.ogg");

buzz.all().setVolume(volume);
