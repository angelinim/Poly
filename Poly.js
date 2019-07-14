(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,1130);


(lib.RoundedRectangle1 = function() {
	this.initialize(img.RoundedRectangle1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.RoundedRectangle2copy = function() {
	this.initialize(img.RoundedRectangle2copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,125);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Slidersvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4.7,2,1).p("Ax5hSMAjzAAAIAAClMgjzAAAg");
	this.shape.setTransform(116.875,10.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#363636").s().p("Ax5BTIAAilMAjzAAAIAAClg");
	this.shape_1.setTransform(116.875,10.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,233.8,21.2);


(lib.padsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pad.svg
	this.instance = new lib.RoundedRectangle1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.9997,0.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.pad_Upsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pad_Up.svg
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.999,0.999);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.9,124.9);


(lib.Knobsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Knob.svg
	this.instance = new lib.RoundedRectangle2copy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.9868,0.9868);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.5,123.4);


(lib.sliderRail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Slidersvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(114.6,8.35,1,1,0,0,0,116.9,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sliderRail, new cjs.Rectangle(-2.3,-2.3,233.8,21.3), null);


(lib.slider = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Knobsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18.8,61.6,1,1,0,0,0,18.8,61.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.slider, new cjs.Rectangle(0,0,37.5,123.4), null);


(lib.padz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.padx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.padw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.padv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.padt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.pads = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.padr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.padq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.padg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.padf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.pade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.padd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.padc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.padb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.pada = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.pad5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.pad4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.pad3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.pad2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.pad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pad_Upsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.4,62.4,1,1,0,0,0,62.4,62.4);

	this.instance_1 = new lib.padsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


// stage content:
(lib.Poly2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		voiceSlider = new lib.slider();
		voiceBase = new lib.sliderRail();
		
		detuneSlider = new lib.slider();
		detuneBase = new lib.sliderRail();
		
		gainSlider = new lib.slider();
		gainBase = new lib.sliderRail();
		
		attackSlider = new lib.slider();
		attackBase = new lib.sliderRail();
		
		decaySlider = new lib.slider();
		decayBase = new lib.sliderRail();
		
		sustainSlider = new lib.slider();
		sustainBase = new lib.sliderRail();
		
		releaseSlider = new lib.slider();
		releaseBase = new lib.sliderRail();
		
		
		//==========Left Side++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		detuneSLIDER = new createjs.Container();
		detuneSLIDER.x = 50;
		detuneSLIDER.y = 578;
		detuneSLIDER.addChild(detuneSlider);
		
		detuneBASE = new createjs.Container();
		detuneBASE.x = 50;
		detuneBASE.y = 633;
		detuneBASE.addChild(detuneBase);
		
		voiceSLIDER = new createjs.Container();
		voiceSLIDER.x = 50;
		voiceSLIDER.y = 716;
		voiceSLIDER.addChild(voiceSlider);
		
		voiceBASE = new createjs.Container();
		voiceBASE.x = 50;
		voiceBASE.y = 771;
		voiceBASE.addChild(voiceBase);
		
		gainSLIDER = new createjs.Container();
		gainSLIDER.x = 50;
		gainSLIDER.y = 854;
		gainSLIDER.addChild(gainSlider);
		
		gainBASE = new createjs.Container();
		gainBASE.x = 50;
		gainBASE.y = 909;
		gainBASE.addChild(gainBase);
		
		
		//================Right Side++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		attackSLIDER = new createjs.Container();
		attackSLIDER.x = 426;
		attackSLIDER.y = 578;
		attackSLIDER.addChild(attackSlider);
		
		attackBASE = new createjs.Container();
		attackBASE.x = 425;
		attackBASE.y = 633;
		attackBASE.addChild(attackBase);
		
		decaySLIDER = new createjs.Container();
		decaySLIDER.x = 426;
		decaySLIDER.y = 716;
		decaySLIDER.addChild(decaySlider);
		
		decayBASE = new createjs.Container();
		decayBASE.x = 426;
		decayBASE.y = 771;
		decayBASE.addChild(decayBase);
		
		sustainSLIDER = new createjs.Container();
		sustainSLIDER.x = 426;
		sustainSLIDER.y = 854;
		sustainSLIDER.addChild(sustainSlider);
		
		sustainBASE = new createjs.Container();
		sustainBASE.x = 426;
		sustainBASE.y = 909;
		sustainBASE.addChild(sustainBase);
		
		releaseSLIDER = new createjs.Container();
		releaseSLIDER.x = 426;
		releaseSLIDER.y = 992;
		releaseSLIDER.addChild(releaseSlider);
		
		releaseBASE = new createjs.Container();
		releaseBASE.x = 426;
		releaseBASE.y = 1047;
		releaseBASE.addChild(releaseBase);
		
		stage.addChild(
			detuneBASE,
			detuneSLIDER,
			voiceBASE,
			voiceSLIDER,
			gainBASE,
			gainSLIDER, 
			attackBASE,
			attackSLIDER,
			decayBASE,
			decaySLIDER,
			sustainBASE,
			sustainSLIDER,
			releaseBASE,
			releaseSLIDER);
		
		
		
		//===========detune++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		detuneSLIDER.on("mousedown", function (evt) {
			this.parent.addChild(this);
			this.offset = {
				x: this.x - evt.stageX
			};
		});
		
		detuneSLIDER.on("mouseover ", function (evt){
			stage.preventSelection = true;
			});
		
		detuneSLIDER.on("mouseout ", function (evt) {
			stage.preventSelection = false;
			});
		
		detuneSLIDER.on("pressmove", function (evt) {
			this.x = evt.stageX + this.offset.x;
			isMouseDown = true;
		});
		
		detuneSLIDER.on("pressup", function (evt) {isMouseDown = false;});
		
		createjs.Ticker.addEventListener("tick", handleTick);
		
		function handleTick(event) {
			if (detuneSLIDER.x < 50) {// To prevent slider moving left side beyond the base
				detuneSLIDER.x = 50;
				stage.update();
			}
			if (detuneSLIDER.x > 250) {// To prevent slider moving right  side beyond the base
				detuneSLIDER.x = 250;
				stage.update();
			}
			if (isMouseDown == true) {
				detuneValue = ((detuneSLIDER.x - 15) / 5);
				//console.log(sliderValue);
			}
		}
		//=========Voices+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		voiceSLIDER.on("mousedown", function (evt) {
			this.parent.addChild(this);
			this.offset = {
				x: this.x - evt.stageX
			};
		});
		
		voiceSLIDER.on("mouseover ", function (evt){
			stage.preventSelection = true;
			});
		
		voiceSLIDER.on("mouseout ", function (evt) {
			stage.preventSelection = false;
			});
		
		voiceSLIDER.on("pressmove", function (evt) {
			this.x = evt.stageX + this.offset.x;
			isMouseDown = true;
		});
		
		voiceSLIDER.on("pressup", function (evt) {isMouseDown = false;});
		createjs.Ticker.addEventListener("tick", handleTickVoice);
		
		function handleTickVoice(event) {
			if (voiceSLIDER.x < 50) { // To prevent slider moving left side beyond the base
				voiceSLIDER.x = 50;
				stage.update();
			}
			if (voiceSLIDER.x > 250) { // To prevent slider moving right  side beyond the base
				voiceSLIDER.x = 250;
				stage.update();
			}
			if (isMouseDown == true) {
				voiceValue =  Math.ceil((voiceSLIDER.x - 49) / 50);
				//console.log(sliderValue);
			}
		}
		
		//============gain+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		
		gainSLIDER.on("mousedown", function (evt) {
			this.parent.addChild(this);
			this.offset = {
				x: this.x - evt.stageX
			};
		});
		
		gainSLIDER.on("mouseover ", function (evt){
			stage.preventSelection = true;
			});
		
		gainSLIDER.on("mouseout ", function (evt) {
			stage.preventSelection = false;
			});
		
		gainSLIDER.on("pressmove", function (evt) {
			this.x = evt.stageX + this.offset.x;
			isMouseDown = true;
		});
		
		gainSLIDER.on("pressup", function (evt) {isMouseDown = false;});
		createjs.Ticker.addEventListener("tick", handleTickGain);
		
		function handleTickGain(event) {
			if (gainSLIDER.x < 50) { // To prevent slider moving left side beyond the base
				gainSLIDER.x = 50;
				stage.update();
			}
			if (gainSLIDER.x > 250) { // To prevent slider moving right  side beyond the base
				gainSLIDER.x = 250;
				stage.update();
			}
			if (isMouseDown == true) {
				gainValue = ((gainSLIDER.x - 14) / 500);
				//console.log(gainValue);
			}
		}
		
		//===========attack+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		
		attackSLIDER.on("mousedown", function (evt) {
			this.parent.addChild(this);
			this.offset = {
				x: this.x - evt.stageX
			};
		});
		
		attackSLIDER.on("mouseover ", function (evt){
			stage.preventSelection = true;
			});
		
		attackSLIDER.on("mouseout ", function (evt) {
			stage.preventSelection = false;
			});
		
		attackSLIDER.on("pressmove", function (evt) {
			this.x = evt.stageX + this.offset.x;
			isMouseDown = true;
		});
		
		attackSLIDER.on("pressup", function (evt) {isMouseDown = false;});
		createjs.Ticker.addEventListener("tick", handleTickAttack);
		
		function handleTickAttack(event) {
			if (attackSLIDER.x < 426) { // To prevent slider moving left side beyond the base
				attackSLIDER.x = 426;
				stage.update();
			}
			if (attackSLIDER.x > 615) { // To prevent slider moving right  side beyond the base
				attackSLIDER.x = 615;
				stage.update();
			}
			if (isMouseDown == true) {
				attackValue = ((attackSLIDER.x - 422) / 200);
				//console.log(attackValue);
			}
		}
		
		//============decay+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		decaySLIDER.on("mousedown", function (evt) {
			this.parent.addChild(this);
			this.offset = {
				x: this.x - evt.stageX
			};
		});
		
		decaySLIDER.on("mouseover ", function (evt){
			stage.preventSelection = true;
			});
		
		decaySLIDER.on("mouseout ", function (evt) {
			stage.preventSelection = false;
			});
		
		decaySLIDER.on("pressmove", function (evt) {
			this.x = evt.stageX + this.offset.x;
			isMouseDown = true;
		});
		
		decaySLIDER.on("pressup", function (evt) {isMouseDown = false;});
		createjs.Ticker.addEventListener("tick", handleTickDecay);
		
		function handleTickDecay(event) {
			if (decaySLIDER.x < 426) { // To prevent slider moving left side beyond the base
				decaySLIDER.x = 426;
				stage.update();
			}
			if (decaySLIDER.x > 615) { // To prevent slider moving right  side beyond the base
				decaySLIDER.x = 615;
				stage.update();
			}
			if (isMouseDown == true) {
				decayValue = ((decaySLIDER.x - 390) / 250);
				//console.log(decayValue);
			}
		}
		
		//===========sustain+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		sustainSLIDER.on("mousedown", function (evt) {
			this.parent.addChild(this);
			this.offset = {
				x: this.x - evt.stageX
			};
		});
		
		sustainSLIDER.on("mouseover ", function (evt){
			stage.preventSelection = true;
			});
		
		sustainSLIDER.on("mouseout ", function (evt) {
			stage.preventSelection = false;
			});
		
		sustainSLIDER.on("pressmove", function (evt) {
			this.x = evt.stageX + this.offset.x;
			isMouseDown = true;
		});
		
		sustainSLIDER.on("pressup", function (evt) {isMouseDown = false;});
		createjs.Ticker.addEventListener("tick", handleTickSustain);
		
		function handleTickSustain(event) {
			if (sustainSLIDER.x < 426) { // To prevent slider moving left side beyond the base
				sustainSLIDER.x = 426;
				stage.update();
			}
			if (sustainSLIDER.x > 615) { // To prevent slider moving right  side beyond the base
				sustainSLIDER.x = 615;
				stage.update();
			}
			if (isMouseDown == true) {
				sustainValue = ((sustainSLIDER.x - 380) / 250);
				//console.log(sustainValue);
			}
		}
		
		//============release+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		releaseSLIDER.on("mousedown", function (evt) {
			this.parent.addChild(this);
			this.offset = {
				x: this.x - evt.stageX
			};
		});
		
		releaseSLIDER.on("mouseover ", function (evt){
			stage.preventSelection = true;
			});
		
		releaseSLIDER.on("mouseout ", function (evt) {
			stage.preventSelection = false;
			});
		
		releaseSLIDER.on("pressmove", function (evt) {
			this.x = evt.stageX + this.offset.x;
			isMouseDown = true;
		});
		
		releaseSLIDER.on("pressup", function (evt) {isMouseDown = false;});
		createjs.Ticker.addEventListener("tick", handleTickrelease);
		
		function handleTickrelease(event) {
			if (releaseSLIDER.x < 426) { // To prevent slider moving left side beyond the base
				releaseSLIDER.x = 426;
				stage.update();
			}
			if (releaseSLIDER.x > 615) { // To prevent slider moving right  side beyond the base
				releaseSLIDER.x = 615;
				stage.update();
			}
			if (isMouseDown == true) {
				releaseValue = ((releaseSLIDER.x - 390) / 250);
				//console.log(releaseValue);
			}
		}
		
		oscillators = {};
		gains = {};
		var keyPresses = [];
		
		for (i = 0; i < 91; i++) {
			keyPresses[i] = false;
		}
		
		
		function startOsc(note, frequency) {
		
			this.now = context.currentTime;
			this.volume = gainValue;
			this.attack = attackValue;
			this.decay = decayValue;
			this.voices = voiceValue;
			this.detune = detuneValue;
			this.oscType = oscType;
			this.i = 1;
		
			gains[note] = context.createGain();
			gains[note].connect(context.destination);
		
			for (; i <= this.voices; i++) {
				oscillators[note] = context.createOscillator();
				oscillators[note].type = this.oscType;
				oscillators[note].frequency.value = frequency;
		
				oscillators[note].detune.value = -this.detune + i * 2 * this.detune / (this.voices);
				oscillators[note].start(this.now);
				oscillators[note].connect(gains[note]);
				//console.log(oscillators);
			}
		
		
			gains[note].gain.setValueAtTime(0, this.now);
			gains[note].gain.linearRampToValueAtTime(this.volume, this.now + this.attack);
			gains[note].gain.linearRampToValueAtTime(this.volume - 0.1, this.now + this.attack + this.decay);
			//console.log(oscillators);
		
		}
		
		function stopOsc(note) {
		
			this.now = context.currentTime;
			this.release = releaseValue;
			this.sustain = sustainValue;
			this.release = releaseValue;
			this.volume = gainValue;
			this.sustain = sustainValue;
		
			try {
				gains[note].gain.cancelAndHoldAtTime(context.currentTime);
				gains[note].gain.linearRampToValueAtTime(this.volume, this.now + this.sustain);
				gains[note].gain.linearRampToValueAtTime(0, this.now + this.sustain + this.release);
				oscillators[note].stop(this.now + this.sustain + this.release);
			} catch (err) {
				gains[note].gain.setValueAtTime(gains[note].gain.value, context.currentTime);
				gains[note].gain.cancelScheduledValues(context.currentTime);
				gains[note].gain.linearRampToValueAtTime(this.volume, this.now + this.sustain);
				gains[note].gain.linearRampToValueAtTime(0, this.now + this.sustain + this.release);
				oscillators[note].stop(this.now + this.sustain + this.release);
			}
		
		
		
			console.log(oscillators);
		
		}
		
		window.addEventListener("keydown", doKeyDown.bind(this));
		window.addEventListener("keyup", doKeyUp.bind(this));
		function doKeyDown(e) {
			var key = e.keyCode
			console.log(key)
			console.log(keyPresses[key])
			if (key == 49 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("a3", 220.0)
			}
			if (key == 50 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("a#3", 233.8)
			}
			if (key == 51 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("b3", 246.94)
			}
			if (key == 52 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("c4", 261.63)
			}
			if (key == 53 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("c#4", 277.18)
			}
			/////////////////////////////////////
			if (key == 81 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("d4", 293.66)
			}
			if (key == 87 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("d#4", 311.13)
			}
			if (key == 69 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("e4", 329.63)
			}
			if (key == 82 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("f4", 349.23)
			}
			if (key == 84 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("f#4", 369.99)
			}
			/////////////////////////////////////
			if (key == 65 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("g4", 392.0)
			}
			if (key == 83 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("g#4", 415.30)
			}
			if (key == 68 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("a4", 440.0)
			}
			if (key == 70 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("a#4", 466.16)
			}
			if (key == 71 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("b4", 493.88)
			}
			/////////////////////////////////////
			if (key == 90 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("c5", 523.25)
			}
			if (key == 88 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("c#5", 554.37)
			}
			if (key == 67 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("d5", 587.33)
			}
			if (key == 86 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("d#5", 622.25)
			}
			if (key == 66 && keyPresses[parseInt(key)] === false) {
				keyPresses[parseInt(key)] = true
				startOsc("e5", 659.25)
			}
		
		}
		
		function doKeyUp(e) {
			var key = e.keyCode
			if (key == 49 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("a3");
			}
			if (key == 50 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("a#3");
			}
			if (key == 51 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("b3");
			}
			if (key == 52 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("c4");
			}
			if (key == 53 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("c#4");
			}
			//////////////////////////////////////////row2//////
		
			if (key == 81 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("d4");
			}
			if (key == 87 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("d#4");
			}
			if (key == 69 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("e4");
			}
			if (key == 82 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("f4");
			}
			if (key == 84 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("f#4");
			}
			//////////////////////////////////////////row3//////
		
			if (key == 65 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("g4");
			}
			if (key == 83 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("g#4");
			}
			if (key == 68 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("a4");
			}
			if (key == 70 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("a#4");
			}
			if (key == 71 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("b4");
			}
			//////////////////////////////////////////row4//////
		
			if (key == 90 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("c5");
			}
			if (key == 88 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("c#5");
			}
			if (key == 67 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("d5");
			}
			if (key == 86 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("d#5");
			}
			if (key == 66 && keyPresses[parseInt(key)] === true) {
				keyPresses[parseInt(key)] = false
				stopOsc("e5");
			}
		}
		
		this.pad_1.on("mousedown", function (evt) {
			startOsc("a3", 220.0)
		});
		
		this.pad_1.on("pressup", function (evt) {
		
			stopOsc("a3");
		});
		
		this.pad_2.on("mousedown", function (evt) {
			startOsc("a#3", 233.8)
		});
		
		this.pad_2.on("pressup", function (evt) {
			stopOsc("a#3");
		});
		
		this.pad_3.on("mousedown", function (evt) {
			startOsc("b3", 246.94)
		});
		
		this.pad_3.on("pressup", function (evt) {
		
			stopOsc("b3");
		});
		
		this.pad_4.on("mousedown", function (evt) {
			startOsc("c4", 261.63)
		});
		
		this.pad_4.on("pressup", function (evt) {
		
			stopOsc("c4");
		});
		
		this.pad_5.on("mousedown", function (evt) {
			startOsc("c#4", 277.18)
		});
		
		this.pad_5.on("pressup", function (evt) {
		
			stopOsc("c#4");
		});
		
		this.pad_q.on("mousedown", function (evt) {
			startOsc("d4", 293.66)
		});
		
		this.pad_q.on("pressup", function (evt) {
		
			stopOsc("d4");
		});
		
		this.pad_w.on("mousedown", function (evt) {
			startOsc("d#4", 311.13)
		});
		
		this.pad_w.on("pressup", function (evt) {
			stopOsc("d#4");
		});
		
		this.pad_e.on("mousedown", function (evt) {
			startOsc("e4", 329.63)
		});
		
		this.pad_e.on("pressup", function (evt) {
			stopOsc("e4");
		});
		
		this.pad_r.on("mousedown", function (evt) {
			startOsc("f4", 349.23)
		});
		
		this.pad_r.on("pressup", function (evt) {
			stopOsc("f4");
		});
		
		this.pad_t.on("mousedown", function (evt) {
			startOsc("f#4", 369.99)
		});
		
		this.pad_t.on("pressup", function (evt) {
			stopOsc("f#4");
		});
		
		this.pad_a.on("mousedown", function (evt) {
			startOsc("g4", 392.0)
		});
		
		this.pad_a.on("pressup", function (evt) {
			stopOsc("g4");
		});
		
		this.pad_s.on("mousedown", function (evt) {
			startOsc("g#4", 415.30)
		});
		
		this.pad_s.on("pressup", function (evt) {
			stopOsc("g#4");
		});
		
		this.pad_d.on("mousedown", function (evt) {
			startOsc("a4", 440.0)
		});
		
		this.pad_d.on("pressup", function (evt) {
			stopOsc("a4");
		});
		
		this.pad_f.on("mousedown", function (evt) {
			startOsc("a#4", 466.16)
		});
		
		this.pad_f.on("pressup", function (evt) {
			stopOsc("a#4");
		});
		
		this.pad_g.on("mousedown", function (evt) {
			startOsc("b4", 493.88)
		});
		
		this.pad_g.on("pressup", function (evt) {
			stopOsc("b4");
		});
		
		this.pad_z.on("mousedown", function (evt) {
			startOsc("c5", 523.25)
		});
		
		this.pad_z.on("pressup", function (evt) {
			stopOsc("c5");
		});
		
		this.pad_x.on("mousedown", function (evt) {
			startOsc("c#5", 554.37)
		});
		
		this.pad_x.on("pressup", function (evt) {
			stopOsc("c#5");
		});
		
		this.pad_c.on("mousedown", function (evt) {
			startOsc("d5", 587.33)
		});
		
		this.pad_c.on("pressup", function (evt) {
			stopOsc("d5");
		});
		
		this.pad_v.on("mousedown", function (evt) {
			startOsc("d#5", 622.25)
		});
		
		this.pad_v.on("pressup", function (evt) {
			stopOsc("d#5");
		});
		
		this.pad_b.on("mousedown", function (evt) {
			startOsc("e5", 659.25)
		});
		
		this.pad_b.on("pressup", function (evt) {
			stopOsc("e5");
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AieDTIAAmlIB9AAQAtAAAXADQAXAEAVALQAXAMALATQAKATAAAbQAAAegPAVQgQAVgZANIAAACQArAJAYAcQAZAcAAAsQAAAfgLAZQgNAYgUAPQgYATgcAIQgdAIgrAAgAhmCjIBKAAQAkAAAYgEQAXgEAPgKQAQgLAIgOQAHgOAAgXQAAgZgIgPQgIgPgUgLQgNgHgTgCQgUgCgaAAIhZAAgAhmgoIBJAAQAaAAAOgDQAQgDAOgIQANgJAGgNQAFgOAAgSQAAgPgFgLQgFgKgMgHQgNgHgTgCQgSgCgcAAIhDAAg");
	this.shape.setTransform(624.75,489.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkDTIiamlIA8AAICDFyICFlyIA5AAIiaGlg");
	this.shape_1.setTransform(486.575,489.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgzDOQglgNgcgbQgbgbgQgqQgPgpAAg3QAAg0APgpQAPgpAbgcQAbgcAmgOQAngPAtAAQAiAAAiAJQAhAIAqAVIAABDIgFAAQgigegjgNQgigNgnAAQgfgBgZALQgaAKgUAWQgUAVgLAhQgKAggBAqQABAsAMAgQALAgATAUQAUAVAbAKQAaAKAcAAQApAAAkgNQAjgPAfgcIAEAAIAABDIgcAMQgNAGgUAGQgRAGgUAEQgVADgYABQguAAglgNg");
	this.shape_2.setTransform(348,485.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AByDTIhyiuIh1CuIg+AAICTjTIiQjSIBBAAIBxCrIB0irIA9AAIiRDQICRDVg");
	this.shape_3.setTransform(214.7,489.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AikDTIAAg0IECk/Ij4AAIAAgyIE4AAIAAAzIkEFAIELAAIAAAyg");
	this.shape_4.setTransform(75.125,489.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag4DNQgpgNgdgbQgdgcgQgpQgQgpAAg3QAAhlA7g6QA7g7BmAAQAkAAAmAJQAlAJAsAUIAABDIgFAAIgagSQgRgLgQgHQgTgJgZgGQgZgGggAAQhFAAgpAuQgqAtAABOQAABRArAtQAsAuBIAAQAcAAAbgGQAbgFAUgJIAAhnIhwAAIAAgwICoAAIAAC0QgiAPgqAMQgpAMgmAAQgwAAgpgOg");
	this.shape_5.setTransform(625.25,354.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiGDTIAAmlIENAAIAAAyIjVAAIAAB3IC3AAIAAAxIi3AAIAADLg");
	this.shape_6.setTransform(492.175,354.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AixDTIAAmlIBpAAQA+AAAkAJQAkAJAZAPQArAbAYAtQAYAtAAA8QAAA6gZAvQgZAugqAaQgcASgkAIQgjAIg6AAgAh5CjIA1AAQAoAAAdgGQAegGAagQQAfgVAQggQAQghAAgxQAAgxgSgiQgRgigigUQgZgOgbgFQgcgGgnAAIg1AAg");
	this.shape_7.setTransform(354.375,354.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhYDSQgkgJglgQIAAhGIADAAQAhAbApAOQAqAOAlAAQAzAAAdgTQAdgUAAggQAAgcgNgOQgOgNgdgIQgVgFgYgEIg0gJQg4gMgbgbQgbgeAAguQAAg1AsghQAugjBFABQArAAAlAIQAlAJAdAMIAABCIgEAAQgZgUgmgNQgogOgoAAQgtAAgbATQgbASAAAeQAAAaANAPQANAQAjAHIAyAKQAiAGAXAFQAvANAYAYQAYAaAAAsQAAAagMAYQgMAXgUARQgXASgeAKQgeAKgqAAQgtABglgJg");
	this.shape_8.setTransform(214.95,354.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ACDDTIgph2Ii2AAIgpB2Ig5AAICamlIBJAAICaGlgAhLAtICTAAIhIjOg");
	this.shape_9.setTransform(74.925,354.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbDTIAAlzIiXAAIAAgyIFlAAIAAAyIiXAAIAAFzg");
	this.shape_10.setTransform(627.325,215.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABmDTIiNioIhPAAIAACoIg4AAIAAmlIB2AAQAnAAAYAFQAaAFAUANQAXAOANAWQANAWAAAiQAAAtgXAfQgXAegoAPICfC5gAh2gDIA6AAQAaAAAUgEQATgFAOgNQAMgMAHgPQAFgPAAgYQABgSgHgOQgGgOgPgKQgMgIgQgDQgRgEgWAAIhDAAg");
	this.shape_11.setTransform(489.15,215.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiKDTIAAmlIEVAAIAAAyIjdAAIAABzIDdAAIAAAxIjdAAIAACdIDdAAIAAAyg");
	this.shape_12.setTransform(350.6,215.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABYDTIhYldIhWFdIg+AAIhwmlIA6AAIBYFeIBYleIA4AAIBYFhIBYlhIA3AAIhuGlg");
	this.shape_13.setTransform(212.775,215.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AA2D0QgegbgCgzIgOACIgLAAQgtAAgkgOQglgPgZgcQgZgcgOgpQgOgpAAgzQAAgzAOgpQAOgpAZgeQAZgcAmgOQAkgPAsAAQAsAAAkAPQAlAPAZAbQAaAcANAqQAOApAAA0QAABMggA1QgfA1g1AWQAAAgAOARQAPASAlAAQAMAAAQgDIAXgHIAHAAIAAA0QgRAEgQACQgRACgRAAQgyAAgdgbgAhoixQgkAtAABSQAABSAlAsQAlAsA/AAQA+AAAlgsQAmgsgBhSQABhSgmgtQgkgsg/AAQhAAAglAsg");
	this.shape_14.setTransform(72.35,221.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhSDQQgggHgWgLIAAg7IAEAAQAXAOAfALQAfAKAeAAQATAAATgGQATgFAPgOQAMgNAHgRQAGgRAAgWQAAgWgHgPQgIgPgNgJQgPgLgVgDQgUgEgaAAQgZAAgXADIgoAGIAAjYID9AAIAAAxIjHAAIAABwIAZgBIAXgBQAhAAAaAGQAZAGAWAOQAWAQANAYQAMAYAAAlQAAAegKAbQgLAbgTASQgUAUgcALQgdAKgkAAQgiAAgggHg");
	this.shape_15.setTransform(627.425,75.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAqDTIAAh3IjIAAIAAhBIDLjtIA0AAIAAEBIA+AAIAAAtIg+AAIAAB3gAh4AvICiAAIAAi+g");
	this.shape_16.setTransform(484.175,75.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhSDTQgigIgWgKIAAg7IAEAAQAYAQAhAKQAhALAeAAQARAAAUgGQAUgGAMgMQANgMAHgPQAGgPAAgXQAAgXgHgPQgHgPgNgIQgNgJgSgDQgSgEgUAAIgaAAIAAguIAUAAQAqAAAagRQAagTAAgiQAAgPgHgMQgGgLgMgIQgMgHgOgDQgOgDgRAAQgaAAgfAKQgeAKgbARIgDAAIAAg7QAUgKAigIQAhgJAgAAQAeAAAXAGQAYAGATAMQAUAOALATQAKATAAAaQAAAjgZAaQgYAagiAHIAAAEQANACASAIQASAHAMAKQANAMAJASQAJATAAAdQAAAdgLAYQgKAYgTASQgVAUgdAJQgdAKghAAQgjAAgigJg");
	this.shape_17.setTransform(349.525,75.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AiODXIAAg7IA8gzQAegZAagaQA1g0AUgeQAUgfAAgkQAAghgVgTQgWgSgmAAQgaAAgeAJQgeAJgcATIgDAAIAAg8QAUgKAigIQAhgIAfAAQBAAAAlAfQAlAfAAA2QAAAYgGAVQgGAVgMASQgLARgPARQgPARgVAVQgeAdggAcIg8A0IDiAAIAAAwg");
	this.shape_18.setTransform(213.725,74.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhxDUIAAgsIBYAAIAAkZIhYAAIAAgnQASAAAUgDQAVgDAKgFQANgIAIgKQAHgLABgSIArAAIAAF6IBWAAIAAAsg");
	this.shape_19.setTransform(59.825,74.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("Ag5BXIAAitIBzAAIAAAUIhbAAIAAAwIBbAAIAAAUIhbAAIAABBIBbAAIAAAUg");
	this.shape_20.setTransform(634.05,1016.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AgjBXQgPgEgQgHIAAgdIACAAQANALARAGQASAGAPAAQAUAAAMgIQAMgIAAgNQAAgMgFgFQgGgGgMgDIgTgEIgUgEQgYgFgLgKQgLgMAAgTQAAgWATgOQASgOAcAAQASAAAPADQAQAEALAFIAAAbIgBAAQgKgIgQgGQgRgFgQAAQgSAAgLAHQgMAIAAAMQAAALAGAGQAFAHAPADIAUAEIAXAFQAUAFAKAJQAJALAAASQAAALgEAKQgFAKgJAGQgJAIgMAEQgNAEgQAAQgTAAgPgDg");
	this.shape_21.setTransform(617.825,1016.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AA2BXIgRgwIhLAAIgRAwIgXAAIBAitIAdAAIBACtgAgeATIA8AAIgehVg");
	this.shape_22.setTransform(601.45,1016.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("Ag4BXIAAitIByAAIAAAUIhcAAIAAAwIBcAAIAAAUIhcAAIAABBIBcAAIAAAUg");
	this.shape_23.setTransform(586.15,1016.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("Ag2BXIAAitIAXAAIAACZIBWAAIAAAUg");
	this.shape_24.setTransform(572.575,1016.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("Ag4BXIAAitIBxAAIAAAUIhbAAIAAAwIBbAAIAAAUIhbAAIAABBIBbAAIAAAUg");
	this.shape_25.setTransform(557.6,1016.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AAqBXIg5hFIghAAIAABFIgXAAIAAitIAxAAQAPAAAKACQAKACAJAFQAJAGAGAJQAFAJAAAOQAAATgJANQgKAMgRAGIBCBMgAgwAAIAXAAQALAAAJgCQAHgCAFgGQAGgFACgGQADgGAAgKQAAgIgDgFQgCgGgHgEQgFgEgGgBQgGgBgKAAIgbAAg");
	this.shape_26.setTransform(542.375,1016.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AAmBXIhSibIAACbIgWAAIAAitIAkAAIBLCNIAAiNIAVAAIAACtg");
	this.shape_27.setTransform(630.1,874.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCCCC").s().p("AghBXIAAgSIAWAAIAAiJIgWAAIAAgSIBDAAIAAASIgWAAIAACJIAWAAIAAASg");
	this.shape_28.setTransform(616.05,874.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AA2BXIgRgwIhKAAIgSAwIgXAAIBAitIAdAAIBACtgAgeATIA8AAIgehVg");
	this.shape_29.setTransform(602.8,874.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCCCCC").s().p("AgLBXIAAiZIg+AAIAAgUICTAAIAAAUIg+AAIAACZg");
	this.shape_30.setTransform(588.6,874.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CCCCCC").s().p("AgjBXQgPgEgQgHIAAgdIACAAQANALARAGQASAGAPAAQAUAAAMgIQAMgIAAgNQAAgMgFgFQgGgGgMgDIgTgEIgUgEQgYgFgLgKQgLgMAAgTQAAgWATgOQASgOAcAAQASAAAPADQAQAEALAFIAAAbIgBAAQgKgIgQgGQgRgFgQAAQgSAAgLAHQgMAIAAAMQAAALAGAGQAFAHAPADIAUAEIAXAFQAUAFAKAJQAJALAAASQAAALgEAKQgFAKgJAGQgJAIgMAEQgNAEgQAAQgTAAgPgDg");
	this.shape_31.setTransform(573.075,874.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CCCCCC").s().p("AgcBVQgMgEgJgJQgJgKgEgNQgEgOAAgUIAAhnIAXAAIAABoQAAAPACAIQACAIAFAHQAFAHAIAFQAJADAMAAQAMAAAJgDQAJgFAFgHQAFgHABgIQADgJAAgNIAAhpIAXAAIAABnQAAAUgEAOQgFANgJAKQgJAJgMAEQgMAEgQAAQgQAAgMgEg");
	this.shape_32.setTransform(556.05,874.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CCCCCC").s().p("AgjBXQgPgEgQgHIAAgdIACAAQANALARAGQASAGAPAAQAUAAAMgIQAMgIAAgNQAAgMgFgFQgGgGgMgDIgTgEIgUgEQgYgFgLgKQgLgMAAgTQAAgWATgOQASgOAcAAQASAAAPADQAQAEALAFIAAAbIgBAAQgKgIgQgGQgRgFgQAAQgSAAgLAHQgMAIAAAMQAAALAGAGQAFAHAPADIAUAEIAXAFQAUAFAKAJQAJALAAASQAAALgEAKQgFAKgJAGQgJAIgMAEQgNAEgQAAQgTAAgPgDg");
	this.shape_33.setTransform(539.125,874.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CCCCCC").s().p("AgKBXIAAhKIg+hjIAaAAIAuBOIAwhOIAZAAIg9BhIAABMg");
	this.shape_34.setTransform(620.275,744.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CCCCCC").s().p("AA2BXIgRgwIhKAAIgRAwIgYAAIA/itIAfAAIA/CtgAgfATIA9AAIgehVg");
	this.shape_35.setTransform(605.65,744.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCCCCC").s().p("AgUBVQgQgFgLgMQgMgLgGgRQgGgRAAgXQAAgUAGgRQAGgRALgMQAMgLAPgGQAQgGASAAQAOAAAOADQAOADARAJIAAAbIgBAAQgPgMgOgFQgOgGgQAAQgMAAgLAFQgLAEgIAJQgIAJgFANQgEAOAAAQQAAATAFANQAFANAIAIQAIAJALAEQAKAEAMAAQARAAAOgFQAPgGANgMIABAAIAAAcIgLAFIgOAFIgPAEQgJABgKAAQgSAAgPgFg");
	this.shape_36.setTransform(589.275,744.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CCCCCC").s().p("Ag5BXIAAitIByAAIAAAUIhbAAIAAAwIBbAAIAAAUIhbAAIAABBIBbAAIAAAUg");
	this.shape_37.setTransform(573.6,744.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CCCCCC").s().p("AhJBXIAAitIAsAAQAZAAAOAEQAPADALAHQASALAKASQAKATAAAYQAAAYgLATQgKAUgRAKQgMAIgPADQgOADgYAAgAgyBDIAWAAQARAAALgCQANgDAKgGQANgJAHgNQAGgOAAgUQAAgUgHgOQgHgOgOgIQgKgGgLgCQgMgCgQAAIgWAAg");
	this.shape_38.setTransform(556.725,744.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CCCCCC").s().p("AAoBXIhEhNIgSASIAAA7IgXAAIAAitIAXAAIAABaIBUhaIAcAAIhNBSIBRBbg");
	this.shape_39.setTransform(624.375,614.475);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CCCCCC").s().p("AgUBVQgQgFgLgMQgMgLgGgRQgGgRAAgXQAAgUAGgRQAGgRALgMQAMgLAPgGQAQgGASAAQAOAAAOADQAOADARAJIAAAbIgBAAQgPgMgOgFQgOgGgQAAQgMAAgLAFQgLAEgIAJQgIAJgFANQgEAOAAAQQAAATAFANQAFANAIAIQAIAJALAEQAKAEAMAAQARAAAOgFQAPgGANgMIABAAIAAAcIgLAFIgOAFIgPAEQgJABgKAAQgSAAgPgFg");
	this.shape_40.setTransform(606.825,614.475);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CCCCCC").s().p("AA3BXIgSgwIhLAAIgRAwIgXAAIBAitIAdAAIBACtgAgfATIA9AAIgehVg");
	this.shape_41.setTransform(590.05,614.475);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CCCCCC").s().p("AgKBXIAAiZIg/AAIAAgUICTAAIAAAUIg/AAIAACZg");
	this.shape_42.setTransform(575.85,614.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CCCCCC").s().p("AgKBXIAAiZIg/AAIAAgUICTAAIAAAUIg+AAIAACZg");
	this.shape_43.setTransform(561.85,614.475);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CCCCCC").s().p("AA3BXIgSgwIhLAAIgRAwIgXAAIBAitIAdAAIBACtgAgeATIA8AAIgehVg");
	this.shape_44.setTransform(547.65,614.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	// Draw Sliders
	this.instance = new lib.slider();
	this.instance.parent = this;
	this.instance.setTransform(969.25,384.15,1,1,0,0,0,18.8,61.6);

	this.instance_1 = new lib.sliderRail();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1064.95,494.55,1,1,0,0,0,114.5,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Draw Pads
	this.instance_2 = new lib.padsvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1012.95,637.2,1,1,0,0,0,62.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// pad_3
	this.pad_3 = new lib.pad3();
	this.pad_3.name = "pad_3";
	this.pad_3.parent = this;
	this.pad_3.setTransform(289,13);
	new cjs.ButtonHelper(this.pad_3, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_3).wait(1));

	// pad_1
	this.pad_1 = new lib.pad();
	this.pad_1.name = "pad_1";
	this.pad_1.parent = this;
	this.pad_1.setTransform(13,13);
	new cjs.ButtonHelper(this.pad_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_1).wait(1));

	// pad_5
	this.pad_5 = new lib.pad5();
	this.pad_5.name = "pad_5";
	this.pad_5.parent = this;
	this.pad_5.setTransform(565,13);
	new cjs.ButtonHelper(this.pad_5, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_5).wait(1));

	// pad_g
	this.pad_g = new lib.padg();
	this.pad_g.name = "pad_g";
	this.pad_g.parent = this;
	this.pad_g.setTransform(565,289);
	new cjs.ButtonHelper(this.pad_g, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_g).wait(1));

	// pad_b
	this.pad_b = new lib.padb();
	this.pad_b.name = "pad_b";
	this.pad_b.parent = this;
	this.pad_b.setTransform(565,427);
	new cjs.ButtonHelper(this.pad_b, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_b).wait(1));

	// pad_v
	this.pad_v = new lib.padv();
	this.pad_v.name = "pad_v";
	this.pad_v.parent = this;
	this.pad_v.setTransform(427,427);
	new cjs.ButtonHelper(this.pad_v, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_v).wait(1));

	// pad_c
	this.pad_c = new lib.padc();
	this.pad_c.name = "pad_c";
	this.pad_c.parent = this;
	this.pad_c.setTransform(289,427);
	new cjs.ButtonHelper(this.pad_c, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_c).wait(1));

	// pad_x
	this.pad_x = new lib.padx();
	this.pad_x.name = "pad_x";
	this.pad_x.parent = this;
	this.pad_x.setTransform(151,427);
	new cjs.ButtonHelper(this.pad_x, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_x).wait(1));

	// pad_z
	this.pad_z = new lib.padz();
	this.pad_z.name = "pad_z";
	this.pad_z.parent = this;
	this.pad_z.setTransform(13,427);
	new cjs.ButtonHelper(this.pad_z, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_z).wait(1));

	// pad_f
	this.pad_f = new lib.padf();
	this.pad_f.name = "pad_f";
	this.pad_f.parent = this;
	this.pad_f.setTransform(427,289);
	new cjs.ButtonHelper(this.pad_f, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_f).wait(1));

	// pad_d
	this.pad_d = new lib.padd();
	this.pad_d.name = "pad_d";
	this.pad_d.parent = this;
	this.pad_d.setTransform(289,289);
	new cjs.ButtonHelper(this.pad_d, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_d).wait(1));

	// pad_s
	this.pad_s = new lib.pads();
	this.pad_s.name = "pad_s";
	this.pad_s.parent = this;
	this.pad_s.setTransform(151,289);
	new cjs.ButtonHelper(this.pad_s, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_s).wait(1));

	// pad_a
	this.pad_a = new lib.pada();
	this.pad_a.name = "pad_a";
	this.pad_a.parent = this;
	this.pad_a.setTransform(13,289);
	new cjs.ButtonHelper(this.pad_a, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_a).wait(1));

	// pad_w
	this.pad_w = new lib.padw();
	this.pad_w.name = "pad_w";
	this.pad_w.parent = this;
	this.pad_w.setTransform(151,151);
	new cjs.ButtonHelper(this.pad_w, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_w).wait(1));

	// pad_r
	this.pad_r = new lib.padr();
	this.pad_r.name = "pad_r";
	this.pad_r.parent = this;
	this.pad_r.setTransform(427,151);
	new cjs.ButtonHelper(this.pad_r, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_r).wait(1));

	// pad_e
	this.pad_e = new lib.pade();
	this.pad_e.name = "pad_e";
	this.pad_e.parent = this;
	this.pad_e.setTransform(289,151);
	new cjs.ButtonHelper(this.pad_e, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_e).wait(1));

	// pad_q
	this.pad_q = new lib.padq();
	this.pad_q.name = "pad_q";
	this.pad_q.parent = this;
	this.pad_q.setTransform(13,151);
	new cjs.ButtonHelper(this.pad_q, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_q).wait(1));

	// pad_t
	this.pad_t = new lib.padt();
	this.pad_t.name = "pad_t";
	this.pad_t.parent = this;
	this.pad_t.setTransform(565,151);
	new cjs.ButtonHelper(this.pad_t, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_t).wait(1));

	// pad_4
	this.pad_4 = new lib.pad4();
	this.pad_4.name = "pad_4";
	this.pad_4.parent = this;
	this.pad_4.setTransform(427,13);
	new cjs.ButtonHelper(this.pad_4, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_4).wait(1));

	// pad_2
	this.pad_2 = new lib.pad2();
	this.pad_2.name = "pad_2";
	this.pad_2.parent = this;
	this.pad_2.setTransform(151,13);
	new cjs.ButtonHelper(this.pad_2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.pad_2).wait(1));

	// Layer_4
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#090909").ss(7.5,1,1).p("AhEAAICJAA");
	this.shape_45.setTransform(814.625,558.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#202020").ss(7.5,1,1).p("AAChSIgDCl");
	this.shape_46.setTransform(821.375,566.425);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#202020").s().p("EhEcgHCIAAhlMCI5AAAIgXRPg");
	this.shape_47.setTransform(369.6,613.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).wait(1));

	// Layer_3
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CCCCCC").s().p("AgIAKIAAgTIARAAIAAATg");
	this.shape_48.setTransform(173.125,1109.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CCCCCC").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_49.setTransform(168.35,1104.55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CCCCCC").s().p("AgaAkQgIgIAAgLQAAgJAEgGQAEgFAIgDQAHgDALgCIAVgBIAAgCQAAgFgBgDIgFgFIgHgCIgIgBIgMACQgHABgHADIAAAAIAAgOIALgDIAPgBQAIAAAGABQAHACAEADQAFAEACAFQADAFAAAIIAAA3IgOAAIAAgJIgFAEIgGADIgIADQgDABgGAAQgLAAgIgHgAAGAAIgMABQgGACgEADQgDAEAAAGQAAAHAEAEQAEADAJAAQAGAAAGgDQAGgCAFgEIAAgWIgPABg");
	this.shape_50.setTransform(161.525,1106.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CCCCCC").s().p("AgGA3IAAhRIANAAIAABRgAgHgoIAAgOIAPAAIAAAOg");
	this.shape_51.setTransform(155.275,1104.75);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CCCCCC").s().p("AgZApIAAhRIAPAAIAAANQAHgHAGgDQAGgDAHAAIAFAAIAFABIAAAOIgBAAIgGgBIgHAAQgHAAgFACIgKAIIAAA5g");
	this.shape_52.setTransform(150.7,1106.15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CCCCCC").s().p("AgZAgQgLgLAAgVQAAgTALgLQALgMAQAAQARAAAJAJQAJALAAARIAAAGIg7AAQAAAIACAGQADAFADAEQAEADAGACQAEACAGAAQAIAAAJgEQAIgDAEgDIAAAAIAAAPIgOAFQgHACgIAAQgTAAgMgLgAgPgYQgHAGAAAKIAuAAQgBgLgFgGQgFgGgLABQgLgBgGAHg");
	this.shape_53.setTransform(142.35,1106.15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CCCCCC").s().p("AgJAvQgGgHAAgOIAAgrIgKAAIAAgMIAKAAIAAgXIANAAIAAAXIAcAAIAAAMIgcAAIAAAkIABAKQAAAEABADQABADADABQADABAGAAIAHgBIAFgBIABAAIAAAMIgJACIgIABQgLgBgHgGg");
	this.shape_54.setTransform(134.975,1105.05);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CCCCCC").s().p("AgaAkQgIgIAAgLQAAgJAEgGQAEgFAIgDQAHgDALgCIAVgBIAAgCQAAgFgBgDIgFgFIgHgCIgIgBIgMACQgHABgHADIAAAAIAAgOIALgDIAPgBQAIAAAGABQAHACAEADQAFAEACAFQADAFAAAIIAAA3IgOAAIAAgJIgFAEIgGADIgIADQgDABgGAAQgLAAgIgHgAAGAAIgMABQgGACgEADQgDAEAAAGQAAAHAEAEQAEADAJAAQAGAAAGgDQAGgCAFgEIAAgWIgPABg");
	this.shape_55.setTransform(127.175,1106.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CCCCCC").s().p("AAuAqIAAguIgBgKIgCgIQgBgDgDgBQgEgCgFAAQgGAAgGADIgMAIIABADIAAAFIAAAzIgNAAIAAguIAAgKIgCgIQgCgDgDgBQgDgCgGAAQgGAAgGADQgFADgGAEIAAA8IgOAAIAAhRIAOAAIAAAKQAHgGAGgDQAGgDAIAAQAIAAAGAEQAFADACAGQAJgHAHgDQAHgDAHAAQAOAAAGAIQAHAIAAAPIAAA0g");
	this.shape_56.setTransform(115.675,1106.05);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CCCCCC").s().p("AAUAqIAAguIAAgKQgBgFgCgDQgBgDgEgBQgDgCgGAAQgEAAgHADQgGADgFAEIAAA8IgOAAIAAhRIAOAAIAAAKQAGgGAHgDQAGgDAHAAQANAAAHAIQAHAIAAAPIAAA0g");
	this.shape_57.setTransform(98.375,1106.05);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CCCCCC").s().p("AgZAgQgLgLAAgVQAAgTALgLQAKgMARAAQARAAAJAJQAJALAAARIAAAGIg7AAQAAAIACAGQADAFADAEQAEADAFACQAFACAGAAQAIAAAJgEQAIgDAEgDIAAAAIAAAPIgOAFQgHACgIAAQgTAAgMgLgAgPgYQgHAGAAAKIAuAAQAAgLgGgGQgFgGgLABQgLgBgGAHg");
	this.shape_58.setTransform(89.15,1106.15);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CCCCCC").s().p("AgJAvQgGgHAAgOIAAgrIgKAAIAAgMIAKAAIAAgXIANAAIAAAXIAcAAIAAAMIgcAAIAAAkIABAKQAAAEABADQABADADABQADABAGAAIAHgBIAFgBIABAAIAAAMIgJACIgIABQgLgBgHgGg");
	this.shape_59.setTransform(81.775,1105.05);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CCCCCC").s().p("AgJAvQgGgHAAgOIAAgrIgKAAIAAgMIAKAAIAAgXIANAAIAAAXIAcAAIAAAMIgcAAIAAAkIABAKQAAAEABADQABADADABQADABAGAAIAHgBIAFgBIABAAIAAAMIgJACIgIABQgLgBgHgGg");
	this.shape_60.setTransform(75.875,1105.05);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CCCCCC").s().p("AgGA3IAAhRIANAAIAABRgAgHgoIAAgOIAPAAIAAAOg");
	this.shape_61.setTransform(70.825,1104.75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CCCCCC").s().p("AgYApIAAhRIANAAIAAANQAJgHAFgDQAGgDAGAAIAGAAIAEABIAAAOIAAAAIgGgBIgHAAQgGAAgGACIgLAIIAAA5g");
	this.shape_62.setTransform(66.25,1106.15);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CCCCCC").s().p("AAVApIgVg+IgUA+IgNAAIgVhRIAOAAIAPA/IAUg/IALAAIAVA/IAOg/IAOAAIgVBRg");
	this.shape_63.setTransform(56.2,1106.15);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CCCCCC").s().p("AgWA4IAQgiIghhNIAPAAIAYA8IAag8IAOAAIgvBvg");
	this.shape_64.setTransform(45.65,1107.65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CCCCCC").s().p("AgjA5IAAhvIAOAAIAAAJQAFgFAHgDQAHgDAHAAQAOAAAJALQAIAMAAATQAAAKgDAIQgCAIgGAGQgFAEgGADQgHAEgHAAQgFgBgFgBQgGgBgFgDIAAAigAgJgoQgHACgFAFIAAAtIAKADIAKABQAKAAAHgHQAGgJAAgOQAAgPgFgGQgFgIgLAAQgEAAgGADg");
	this.shape_65.setTransform(36.85,1107.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CCCCCC").s().p("AgbAfQgKgLAAgUQAAgTAKgMQAKgLARAAQARAAAKALQALAMAAATQAAAUgLALQgKAMgRAAQgRAAgKgMgAgRgXQgGAIAAAPQAAAPAGAIQAHAIAKAAQALAAAGgIQAGgIAAgPQAAgPgGgIQgGgHgLAAQgKAAgHAHg");
	this.shape_66.setTransform(27.375,1106.175);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CCCCCC").s().p("AgIAoQgIgDgFgFQgFgFgDgIQgDgIAAgLQAAgTALgMQALgLARAAQAHAAAHACQAHACAFADIAAAPIAAAAQgHgFgGgCQgHgDgHAAQgKAAgHAIQgHAIAAAOQAAAPAHAIQAGAIALAAIAJgBIAIgDIAFgEIAFgDIAAAAIAAAQIgNAFQgGACgHAAQgIAAgHgDg");
	this.shape_67.setTransform(19.075,1106.175);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CCCCCC").s().p("AgbAfQgKgLAAgUQAAgTAKgMQAKgLARAAQARAAAKALQALAMAAATQAAAUgLALQgKAMgRAAQgRAAgKgMgAgRgXQgGAIAAAPQAAAPAGAIQAHAIAKAAQALAAAGgIQAGgIAAgPQAAgPgGgIQgGgHgLAAQgKAAgHAHg");
	this.shape_68.setTransform(352.725,1085.925);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CCCCCC").s().p("AAUAqIAAguIAAgKQgBgFgCgDQgBgDgEgBQgDgCgGAAQgEAAgHADQgGADgFAEIAAA8IgOAAIAAhRIAOAAIAAAKQAGgGAHgDQAGgDAHAAQANAAAHAIQAHAIAAAPIAAA0g");
	this.shape_69.setTransform(343.425,1085.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CCCCCC").s().p("AgSApIgNgFIAAgQIABAAQAGAGAJACQAHADAIABQAHgBAGgDQAFgDAAgGQAAgFgDgCQgCgCgJgCIgGgCIgJgCQgKgCgFgFQgEgGgBgIQAAgFACgEQADgFAEgEQAEgDAGgCQAGgCAIAAQAHAAAIACIAMAEIAAAPIgBAAQgFgEgIgCQgIgDgGAAQgHAAgGADQgEACAAAHQAAAEACADQAEACAGACIAIACIAIABQAJACAGAFQAFAFAAAKQAAAKgJAIQgJAHgQAAQgIAAgIgCg");
	this.shape_70.setTransform(329.6,1085.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CCCCCC").s().p("AgZAgQgLgLAAgVQAAgTALgLQALgMAQAAQARAAAJAJQAJALAAARIAAAGIg7AAQAAAIACAGQACAFAEAEQAEADAFACQAFACAGAAQAIAAAIgEQAJgDAEgDIABAAIAAAPIgPAFQgHACgIAAQgUAAgLgLgAgPgYQgHAGAAAKIAtAAQABgLgGgGQgFgGgLABQgLgBgGAHg");
	this.shape_71.setTransform(321.15,1085.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CCCCCC").s().p("AgSApIgNgFIAAgQIABAAQAGAGAJACQAHADAHABQAIgBAGgDQAFgDAAgGQAAgFgDgCQgCgCgJgCIgGgCIgJgCQgLgCgEgFQgEgGgBgIQAAgFACgEQACgFAFgEQAEgDAGgCQAHgCAHAAQAHAAAHACIANAEIAAAPIgBAAQgFgEgIgCQgIgDgGAAQgHAAgGADQgEACAAAHQAAAEACADQAEACAGACIAIACIAIABQAKACAFAFQAFAFAAAKQAAAKgJAIQgKAHgPAAQgIAAgIgCg");
	this.shape_72.setTransform(312.85,1085.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CCCCCC").s().p("AgaAiQgHgIAAgPIAAg0IANAAIAAAuIABAKQABAFACADQACADADABQADACAGAAQAEAAAHgDIALgHIAAg8IAOAAIAABRIgOAAIAAgJQgHAFgGADQgGADgHAAQgNAAgHgIg");
	this.shape_73.setTransform(304.075,1086.025);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CCCCCC").s().p("AgJAvQgGgHAAgOIAAgrIgKAAIAAgMIAKAAIAAgXIANAAIAAAXIAcAAIAAAMIgcAAIAAAkIABAKQAAAEABADQABADADABQADABAGAAIAHgBIAFgBIABAAIAAAMIgJACIgIABQgLgBgHgGg");
	this.shape_74.setTransform(291.225,1084.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CCCCCC").s().p("AgUA2IAAgKIAOAAIAAhXIgOAAIAAgLIAqAAIAAALIgOAAIAABXIAOAAIAAAKg");
	this.shape_75.setTransform(285,1084.55);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CCCCCC").s().p("AgIAKIAAgTIARAAIAAATg");
	this.shape_76.setTransform(273.875,1088.95);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CCCCCC").s().p("AgGA3IAAhRIANAAIAABRgAgHgoIAAgOIAPAAIAAAOg");
	this.shape_77.setTransform(269.125,1084.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CCCCCC").s().p("AgjA5IAAhvIAOAAIAAAJQAGgFAGgDQAHgDAHAAQAPAAAIALQAIAMAAATQAAAKgDAIQgCAIgGAGQgFAEgGADQgHAEgHAAQgFgBgFgBQgGgBgFgDIAAAigAgJgoQgHACgFAFIAAAtIAKADIAKABQAKAAAHgHQAGgJAAgOQAAgPgFgGQgFgIgLAAQgEAAgGADg");
	this.shape_78.setTransform(262.65,1087.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CCCCCC").s().p("AgaAkQgIgIAAgLQAAgJAEgGQAEgFAIgDQAHgDALgCIAVgBIAAgCQAAgFgBgDIgFgFIgHgCIgIgBIgMACQgHABgHADIAAAAIAAgOIALgDIAPgBQAIAAAGABQAHACAEADQAFAEACAFQADAFAAAIIAAA3IgOAAIAAgJIgFAEIgGADIgIADQgDABgGAAQgLAAgIgHgAAGAAIgMABQgGACgEADQgDAEAAAGQAAAHAEAEQAEADAJAAQAGAAAGgDQAGgCAFgEIAAgWIgPABg");
	this.shape_79.setTransform(252.925,1085.925);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CCCCCC").s().p("AgbAfQgKgLAAgUQAAgTAKgMQAKgLARAAQARAAAKALQALAMAAATQAAAUgLALQgKAMgRAAQgRAAgKgMgAgRgXQgGAIAAAPQAAAPAGAIQAHAIAKAAQALAAAGgIQAGgIAAgPQAAgPgGgIQgGgHgLAAQgKAAgHAHg");
	this.shape_80.setTransform(238.925,1085.925);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CCCCCC").s().p("AgGA3IAAhRIANAAIAABRgAgHgoIAAgOIAPAAIAAAOg");
	this.shape_81.setTransform(232.325,1084.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CCCCCC").s().p("AgaAvQgJgMAAgUQAAgKADgHQADgIAFgGQAFgFAGgDQAHgDAGAAQAHAAAEABQAFABAGADIAAgjIAOAAIAABxIgOAAIAAgJQgGAFgGADQgHADgGAAQgPAAgIgLgAgPgHQgGAHAAAPQAAAPAFAHQAFAIALAAQAFAAAGgDQAGgCAFgEIAAguIgKgEIgKgBQgKAAgHAIg");
	this.shape_82.setTransform(225.3,1084.425);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CCCCCC").s().p("AgaAiQgHgIAAgPIAAg0IANAAIAAAuIABAKQABAFACADQACADADABQADACAGAAQAEAAAHgDIALgHIAAg8IAOAAIAABRIgOAAIAAgJQgHAFgGADQgGADgHAAQgNAAgHgIg");
	this.shape_83.setTransform(216.125,1086.025);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CCCCCC").s().p("AgaAkQgIgIAAgLQAAgJAEgGQAEgFAIgDQAHgDALgCIAVgBIAAgCQAAgFgBgDIgFgFIgHgCIgIgBIgMACQgHABgHADIAAAAIAAgOIALgDIAPgBQAIAAAGABQAHACAEADQAFAEACAFQADAFAAAIIAAA3IgOAAIAAgJIgFAEIgGADIgIADQgDABgGAAQgLAAgIgHgAAGAAIgMABQgGACgEADQgDAEAAAGQAAAHAEAEQAEADAJAAQAGAAAGgDQAGgCAFgEIAAgWIgPABg");
	this.shape_84.setTransform(206.625,1085.925);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CCCCCC").s().p("AgLA4IgKgEIgBAEIgNAAIAAhxIAOAAIAAApQAGgFAGgDQAHgDAHAAQAPAAAHALQAJALAAATQAAAKgDAJQgDAIgEAFQgGAGgGADQgGADgIAAQgFAAgGgCgAgKgMQgGADgFAEIAAAuIAKAEIAKABQAKAAAHgIQAGgHAAgQQAAgPgFgHQgFgHgLAAQgEAAgHACg");
	this.shape_85.setTransform(192.75,1084.425);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CCCCCC").s().p("AgZAgQgLgLAAgVQAAgTALgLQALgMAQAAQARAAAJAJQAJALAAARIAAAGIg7AAQAAAIACAGQACAFAEAEQAEADAFACQAFACAGAAQAIAAAIgEQAJgDAEgDIABAAIAAAPIgPAFQgHACgIAAQgUAAgLgLgAgPgYQgGAGgBAKIAtAAQABgLgGgGQgFgGgLABQgKgBgHAHg");
	this.shape_86.setTransform(183.35,1085.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CCCCCC").s().p("AAVApIgVg+IgUA+IgMAAIgWhRIAOAAIAPA/IAVg/IAKAAIAVA/IAOg/IAOAAIgWBRg");
	this.shape_87.setTransform(172.7,1085.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CCCCCC").s().p("AgZAgQgLgLAAgVQAAgTALgLQAKgMASAAQAQAAAJAJQAJALAAARIAAAGIg7AAQAAAIACAGQADAFADAEQAEADAGACQAEACAGAAQAIAAAJgEQAIgDADgDIABAAIAAAPIgOAFQgHACgIAAQgTAAgMgLgAgPgYQgGAGgBAKIAuAAQgBgLgFgGQgFgGgLABQgLgBgGAHg");
	this.shape_88.setTransform(156.85,1085.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CCCCCC").s().p("AAUA5IAAgvIAAgKQgBgEgCgDQgBgDgEgBQgDgCgGAAQgEAAgHADQgGADgFAEIAAA8IgOAAIAAhxIAOAAIAAAqQAGgGAHgDQAGgDAHAAQANAAAHAIQAHAIAAAOIAAA1g");
	this.shape_89.setTransform(147.625,1084.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CCCCCC").s().p("AgJAvQgGgHAAgOIAAgrIgKAAIAAgMIAKAAIAAgXIANAAIAAAXIAcAAIAAAMIgcAAIAAAkIABAKQAAAEABADQABADADABQADABAGAAIAHgBIAFgBIABAAIAAAMIgJACIgIABQgLgBgHgGg");
	this.shape_90.setTransform(139.975,1084.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CCCCCC").s().p("AAuAqIAAguIgBgKIgCgIQgBgDgDgBQgEgCgFAAQgGAAgGADIgMAIIABADIAAAFIAAAzIgNAAIAAguIAAgKIgCgIQgCgDgDgBQgDgCgGAAQgGAAgGADQgFADgGAEIAAA8IgOAAIAAhRIAOAAIAAAKQAHgGAGgDQAGgDAIAAQAIAAAGAEQAFADACAGQAJgHAHgDQAHgDAHAAQAOAAAGAIQAHAIAAAPIAAA0g");
	this.shape_91.setTransform(124.425,1085.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CCCCCC").s().p("AgbAfQgKgLAAgUQAAgTAKgMQAKgLARAAQARAAAKALQALAMAAATQAAAUgLALQgKAMgRAAQgRAAgKgMgAgRgXQgGAIAAAPQAAAPAGAIQAHAIAKAAQALAAAGgIQAGgIAAgPQAAgPgGgIQgGgHgLAAQgKAAgHAHg");
	this.shape_92.setTransform(112.575,1085.925);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CCCCCC").s().p("AgYApIAAhRIANAAIAAANQAIgHAGgDQAGgDAGAAIAGAAIAFABIAAAOIgBAAIgGgBIgHAAQgHAAgFACIgLAIIAAA5g");
	this.shape_93.setTransform(105.5,1085.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CCCCCC").s().p("AgQA5IAAhFIgJAAIAAgMIAJAAIAAgCQAAgPAHgIQAIgHAMAAIAJAAIAGABIAAANIAAAAIgGgCIgHAAQgJAAgEAEQgDADAAALIAAACIAYAAIAAAMIgXAAIAABFg");
	this.shape_94.setTransform(99.475,1084.275);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CCCCCC").s().p("AgaAvQgJgMAAgUQAAgKADgHQADgIAFgGQAFgFAGgDQAHgDAGAAQAHAAAEABQAFABAGADIAAgjIAOAAIAABxIgOAAIAAgJQgGAFgGADQgHADgGAAQgPAAgIgLgAgPgHQgGAHAAAPQAAAPAFAHQAFAIALAAQAFAAAGgDQAGgCAFgEIAAguIgKgEIgJgBQgLAAgHAIg");
	this.shape_95.setTransform(86.15,1084.425);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CCCCCC").s().p("AgZAgQgLgLAAgVQAAgTALgLQAKgMASAAQAQAAAJAJQAJALAAARIAAAGIg7AAQAAAIACAGQADAFADAEQAEADAGACQAEACAGAAQAIAAAJgEQAIgDADgDIABAAIAAAPIgOAFQgHACgIAAQgUAAgLgLgAgPgYQgGAGgBAKIAuAAQgBgLgFgGQgFgGgLABQgKgBgHAHg");
	this.shape_96.setTransform(77.3,1085.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#CCCCCC").s().p("AgJAvQgGgHAAgOIAAgrIgKAAIAAgMIAKAAIAAgXIANAAIAAAXIAcAAIAAAMIgcAAIAAAkIABAKQAAAEABADQABADADABQADABAGAAIAHgBIAFgBIABAAIAAAMIgJACIgIABQgLgBgHgGg");
	this.shape_97.setTransform(69.925,1084.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CCCCCC").s().p("AgaAkQgIgIAAgLQAAgJAEgGQAEgFAIgDQAHgDALgCIAVgBIAAgCQAAgFgBgDIgFgFIgHgCIgIgBIgMACQgHABgHADIAAAAIAAgOIALgDIAPgBQAIAAAGABQAHACAEADQAFAEACAFQADAFAAAIIAAA3IgOAAIAAgJIgFAEIgGADIgIADQgDABgGAAQgLAAgIgHgAAGAAIgMABQgGACgEADQgDAEAAAGQAAAHAEAEQAEADAJAAQAGAAAGgDQAGgCAFgEIAAgWIgPABg");
	this.shape_98.setTransform(62.125,1085.925);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#CCCCCC").s().p("AgZApIAAhRIAPAAIAAANQAHgHAGgDQAGgDAHAAIAFAAIAFABIAAAOIgBAAIgGgBIgHAAQgHAAgFACIgKAIIAAA5g");
	this.shape_99.setTransform(55.65,1085.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#CCCCCC").s().p("AgZAgQgLgLAAgVQAAgTALgLQAKgMARAAQARAAAJAJQAJALAAARIAAAGIg7AAQAAAIACAGQACAFAEAEQAEADAFACQAFACAGAAQAIAAAJgEQAIgDAEgDIAAAAIAAAPIgOAFQgHACgIAAQgTAAgMgLgAgPgYQgHAGAAAKIAuAAQAAgLgGgGQgFgGgLABQgLgBgGAHg");
	this.shape_100.setTransform(47.3,1085.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#CCCCCC").s().p("AAUAqIAAguIAAgKQgBgFgCgDQgBgDgEgBQgDgCgGAAQgEAAgHADQgGADgFAEIAAA8IgOAAIAAhRIAOAAIAAAKQAGgGAHgDQAGgDAHAAQANAAAHAIQAHAIAAAPIAAA0g");
	this.shape_101.setTransform(38.075,1085.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CCCCCC").s().p("AgZAgQgLgLAAgVQAAgTALgLQAKgMARAAQARAAAJAJQAJALAAARIAAAGIg7AAQAAAIACAGQADAFADAEQAEADAFACQAFACAGAAQAIAAAJgEQAIgDAEgDIAAAAIAAAPIgOAFQgHACgIAAQgTAAgMgLgAgPgYQgHAGAAAKIAuAAQAAgLgGgGQgFgGgLABQgLgBgGAHg");
	this.shape_102.setTransform(28.85,1085.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#CCCCCC").s().p("AgPA4IgMgCIAAgOIABAAIALADQAHACAIAAQAFAAAFgCQAFgBACgEQADgCABgEIABgJIAAgHQgGAEgGADQgFACgIABQgPAAgJgLQgIgLAAgSQAAgLADgIQADgHAFgGQAEgFAIgDQAGgCAGAAQAHgBAFACIAKAEIABgEIANAAIAABIQAAAVgKAJQgJAKgSAAIgOgBgAgPglQgGAIAAAOQAAAPAFAGQAFAGALAAQAFAAAGgCQAGgCAFgEIAAgrIgKgEIgKgBQgKAAgHAHg");
	this.shape_103.setTransform(19.4,1087.35);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CCCCCC").s().p("AgSApIgNgFIAAgQIABAAQAHAGAHACQAIADAHABQAJgBAFgDQAFgDAAgGQAAgFgDgCQgDgCgHgCIgHgCIgJgCQgKgCgFgFQgFgGABgIQAAgFACgEQACgFAEgEQAEgDAHgCQAGgCAGAAQAIAAAHACIANAEIAAAPIgBAAQgFgEgIgCQgHgDgIAAQgGAAgFADQgGACAAAHQAAAEAEADQACACAIACIAHACIAIABQAJACAGAFQAFAFAAAKQAAAKgJAIQgJAHgPAAQgKAAgHgCg");
	this.shape_104.setTransform(362.85,1065.65);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#CCCCCC").s().p("AgZApIAAhRIAPAAIAAANQAHgHAGgDQAGgDAHAAIAFAAIAFABIAAAOIgBAAIgGgBIgHAAQgHAAgFACIgKAIIAAA5g");
	this.shape_105.setTransform(356.35,1065.65);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#CCCCCC").s().p("AgbAfQgKgLAAgUQAAgTAKgMQAKgLARAAQARAAAKALQALAMAAATQAAAUgLALQgKAMgRAAQgRAAgKgMgAgRgXQgGAIAAAPQAAAPAGAIQAHAIAKAAQALAAAGgIQAGgIAAgPQAAgPgGgIQgGgHgLAAQgKAAgHAHg");
	this.shape_106.setTransform(347.925,1065.675);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CCCCCC").s().p("AgJAvQgGgHAAgOIAAgrIgKAAIAAgMIAKAAIAAgXIANAAIAAAXIAcAAIAAAMIgcAAIAAAkIABAKQAAAEABADQABADADABQADABAGAAIAHgBIAFgBIABAAIAAAMIgJACIgIABQgLgBgHgGg");
	this.shape_107.setTransform(340.475,1064.55);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#CCCCCC").s().p("AgaAkQgIgIAAgLQAAgJAEgGQAEgFAIgDQAHgDALgCIAVgBIAAgCQAAgFgBgDIgFgFIgHgCIgIgBIgMACQgHABgHADIAAAAIAAgOIALgDIAPgBQAIAAAGABQAHACAEADQAFAEACAFQADAFAAAIIAAA3IgOAAIAAgJIgFAEIgGADIgIADQgDABgGAAQgLAAgIgHgAAGAAIgMABQgGACgEADQgDAEAAAGQAAAHAEAEQAEADAJAAQAGAAAGgDQAGgCAFgEIAAgWIgPABg");
	this.shape_108.setTransform(332.675,1065.675);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#CCCCCC").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_109.setTransform(326.4,1064.05);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CCCCCC").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_110.setTransform(322.3,1064.05);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CCCCCC").s().p("AgGA3IAAhRIANAAIAABRgAgHgoIAAgOIAPAAIAAAOg");
	this.shape_111.setTransform(318.225,1064.25);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#CCCCCC").s().p("AgIAoQgIgDgFgFQgFgFgDgIQgDgIAAgLQAAgTALgMQALgLARAAQAHAAAHACQAHACAFADIAAAPIAAAAQgHgFgGgCQgHgDgHAAQgKAAgHAIQgHAIAAAOQAAAPAHAIQAGAIALAAIAJgBIAIgDIAFgEIAFgDIAAAAIAAAQIgNAFQgGACgHAAQgIAAgHgDg");
	this.shape_112.setTransform(312.425,1065.675);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#CCCCCC").s().p("AgSApIgNgFIAAgQIABAAQAHAGAIACQAIADAGABQAJgBAFgDQAFgDAAgGQAAgFgDgCQgDgCgHgCIgHgCIgJgCQgLgCgEgFQgEgGAAgIQAAgFABgEQACgFAFgEQAEgDAGgCQAGgCAIAAQAHAAAHACIANAEIAAAPIgBAAQgFgEgIgCQgHgDgIAAQgGAAgGADQgEACgBAHQABAEADADQACACAIACIAHACIAIABQAJACAGAFQAFAFAAAKQAAAKgJAIQgJAHgQAAQgJAAgHgCg");
	this.shape_113.setTransform(304.55,1065.65);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#CCCCCC").s().p("AgbAfQgKgLAAgUQAAgTAKgMQAKgLARAAQARAAAKALQALAMAAATQAAAUgLALQgKAMgRAAQgRAAgKgMgAgRgXQgGAIAAAPQAAAPAGAIQAHAIAKAAQALAAAGgIQAGgIAAgPQAAgPgGgIQgGgHgLAAQgKAAgHAHg");
	this.shape_114.setTransform(296.025,1065.675);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#CCCCCC").s().p("AgOA4IgNgCIAAgOIABAAIALADQAHACAHAAQAHAAAEgCQAFgBACgEQADgCABgEIABgJIAAgHQgGAEgFADQgHACgHABQgPAAgJgLQgIgLAAgSQAAgLADgIQADgHAFgGQAFgFAGgDQAIgCAFAAQAHgBAFACIAKAEIABgEIANAAIAABIQAAAVgKAJQgJAKgTAAIgMgBgAgOglQgHAIAAAOQAAAPAFAGQAFAGALAAQAFAAAGgCQAGgCAFgEIAAgrIgKgEIgJgBQgLAAgGAHg");
	this.shape_115.setTransform(281.25,1067.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#CCCCCC").s().p("AAUAqIAAguIAAgKQgBgFgCgDQgBgDgEgBQgDgCgGAAQgEAAgHADQgGADgFAEIAAA8IgOAAIAAhRIAOAAIAAAKQAGgGAHgDQAGgDAHAAQANAAAHAIQAHAIAAAPIAAA0g");
	this.shape_116.setTransform(272.125,1065.55);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#CCCCCC").s().p("AgGA3IAAhRIANAAIAABRgAgHgoIAAgOIAPAAIAAAOg");
	this.shape_117.setTransform(265.325,1064.25);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#CCCCCC").s().p("AgSApIgNgFIAAgQIABAAQAHAGAHACQAJADAGABQAJgBAFgDQAFgDAAgGQAAgFgDgCQgDgCgHgCIgHgCIgJgCQgKgCgFgFQgFgGABgIQAAgFACgEQACgFAEgEQAEgDAHgCQAFgCAHAAQAIAAAHACIANAEIAAAPIgBAAQgFgEgIgCQgHgDgIAAQgGAAgFADQgFACgBAHQAAAEAEADQACACAIACIAHACIAIABQAJACAGAFQAFAFAAAKQAAAKgJAIQgJAHgQAAQgJAAgHgCg");
	this.shape_118.setTransform(259.45,1065.65);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#CCCCCC").s().p("AgaAiQgHgIAAgPIAAg0IANAAIAAAuIABAKQABAFACADQACADADABQADACAGAAQAEAAAHgDIALgHIAAg8IAOAAIAABRIgOAAIAAgJQgHAFgGADQgGADgHAAQgNAAgHgIg");
	this.shape_119.setTransform(250.675,1065.775);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#CCCCCC").s().p("AgaAvQgJgMAAgUQAAgKADgHQADgIAFgGQAFgFAGgDQAHgDAGAAQAHAAAEABQAFABAGADIAAgjIAOAAIAABxIgOAAIAAgJQgGAFgGADQgGADgHAAQgPAAgIgLgAgPgHQgGAHAAAPQAAAPAFAHQAFAIALAAQAFAAAGgDQAGgCAFgEIAAguIgKgEIgKgBQgKAAgHAIg");
	this.shape_120.setTransform(235.75,1064.175);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#CCCCCC").s().p("AAUAqIAAguIAAgKQgBgFgCgDQgBgDgEgBQgDgCgGAAQgEAAgHADQgGADgFAEIAAA8IgOAAIAAhRIAOAAIAAAKQAGgGAHgDQAGgDAHAAQANAAAHAIQAHAIAAAPIAAA0g");
	this.shape_121.setTransform(226.625,1065.55);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#CCCCCC").s().p("AgaAiQgHgIAAgPIAAg0IANAAIAAAuIABAKQABAFACADQACADADABQADACAGAAQAEAAAHgDIALgHIAAg8IAOAAIAABRIgOAAIAAgJQgHAFgGADQgGADgHAAQgNAAgHgIg");
	this.shape_122.setTransform(217.075,1065.775);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#CCCCCC").s().p("AgbAfQgKgLAAgUQAAgTAKgMQAKgLARAAQARAAAKALQALAMAAATQAAAUgLALQgKAMgRAAQgRAAgKgMgAgRgXQgGAIAAAPQAAAPAGAIQAHAIAKAAQALAAAGgIQAGgIAAgPQAAgPgGgIQgGgHgLAAQgKAAgHAHg");
	this.shape_123.setTransform(207.825,1065.675);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#CCCCCC").s().p("AgSApIgNgFIAAgQIABAAQAGAGAJACQAHADAHABQAIgBAGgDQAFgDAAgGQAAgFgDgCQgCgCgJgCIgGgCIgJgCQgLgCgEgFQgEgGgBgIQAAgFACgEQACgFAFgEQAEgDAGgCQAHgCAHAAQAHAAAHACIANAEIAAAPIgBAAQgFgEgIgCQgIgDgGAAQgHAAgGADQgEACAAAHQAAAEADADQADACAGACIAIACIAIABQAKACAFAFQAFAFAAAKQAAAKgJAIQgJAHgQAAQgIAAgIgCg");
	this.shape_124.setTransform(199.45,1065.65);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#CCCCCC").s().p("AgSApIgNgFIAAgQIABAAQAGAGAJACQAHADAHABQAIgBAGgDQAFgDAAgGQAAgFgDgCQgCgCgJgCIgGgCIgJgCQgLgCgEgFQgEgGgBgIQAAgFACgEQACgFAFgEQAEgDAGgCQAHgCAHAAQAHAAAHACIANAEIAAAPIgBAAQgFgEgIgCQgIgDgGAAQgHAAgGADQgEACAAAHQAAAEACADQAEACAGACIAIACIAIABQAKACAFAFQAFAFAAAKQAAAKgJAIQgJAHgQAAQgIAAgIgCg");
	this.shape_125.setTransform(186.4,1065.65);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#CCCCCC").s().p("AgZAgQgLgLAAgVQAAgTALgLQALgMAQAAQARAAAJAJQAJALAAARIAAAGIg7AAQAAAIACAGQACAFAEAEQAEADAFACQAFACAGAAQAIAAAIgEQAJgDAEgDIABAAIAAAPIgPAFQgHACgIAAQgUAAgLgLgAgPgYQgGAGgBAKIAtAAQABgLgGgGQgFgGgLABQgKgBgHAHg");
	this.shape_126.setTransform(177.95,1065.65);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#CCCCCC").s().p("AgJAvQgGgHAAgOIAAgrIgKAAIAAgMIAKAAIAAgXIANAAIAAAXIAcAAIAAAMIgcAAIAAAkIABAKQAAAEABADQABADADABQADABAGAAIAHgBIAFgBIABAAIAAAMIgJACIgIABQgLgBgHgGg");
	this.shape_127.setTransform(170.575,1064.55);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#CCCCCC").s().p("AgaAkQgIgIAAgLQAAgJAEgGQAEgFAIgDQAHgDALgCIAVgBIAAgCQAAgFgBgDIgFgFIgHgCIgIgBIgMACQgHABgHADIAAAAIAAgOIALgDIAPgBQAIAAAGABQAHACAEADQAFAEACAFQADAFAAAIIAAA3IgOAAIAAgJIgFAEIgGADIgIADQgDABgGAAQgLAAgIgHgAAGAAIgMABQgGACgEADQgDAEAAAGQAAAHAEAEQAEADAJAAQAGAAAGgDQAGgCAFgEIAAgWIgPABg");
	this.shape_128.setTransform(162.775,1065.675);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CCCCCC").s().p("AgZApIAAhRIAPAAIAAANQAHgHAGgDQAGgDAHAAIAFAAIAEABIAAAOIAAAAIgGgBIgHAAQgGAAgGACIgKAIIAAA5g");
	this.shape_129.setTransform(156.3,1065.65);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#CCCCCC").s().p("AgZAgQgLgLAAgVQAAgTALgLQAKgMASAAQAQAAAJAJQAJALAAARIAAAGIg7AAQAAAIACAGQADAFADAEQAEADAGACQAEACAGAAQAIAAAJgEQAIgDADgDIABAAIAAAPIgOAFQgHACgIAAQgUAAgLgLgAgPgYQgGAGgBAKIAuAAQgBgLgFgGQgFgGgLABQgKgBgHAHg");
	this.shape_130.setTransform(147.95,1065.65);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CCCCCC").s().p("AAUAqIAAguIAAgKQgBgFgCgDQgBgDgEgBQgDgCgGAAQgEAAgHADQgGADgFAEIAAA8IgOAAIAAhRIAOAAIAAAKQAGgGAHgDQAGgDAHAAQANAAAHAIQAHAIAAAPIAAA0g");
	this.shape_131.setTransform(138.725,1065.55);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#CCCCCC").s().p("AgZAgQgLgLAAgVQAAgTALgLQAKgMASAAQAQAAAJAJQAJALAAARIAAAGIg7AAQAAAIACAGQADAFADAEQAEADAGACQAEACAGAAQAIAAAJgEQAIgDADgDIABAAIAAAPIgOAFQgHACgIAAQgUAAgLgLgAgPgYQgGAGgBAKIAtAAQAAgLgFgGQgFgGgLABQgKgBgHAHg");
	this.shape_132.setTransform(129.5,1065.65);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CCCCCC").s().p("AgOA4IgNgCIAAgOIABAAIALADQAHACAHAAQAHAAAEgCQAFgBACgEQADgCABgEIABgJIAAgHQgGAEgFADQgHACgHABQgPAAgJgLQgIgLAAgSQAAgLADgIQADgHAFgGQAEgFAIgDQAGgCAGAAQAHgBAFACIAKAEIABgEIANAAIAABIQAAAVgKAJQgJAKgTAAIgMgBgAgOglQgHAIAAAOQAAAPAFAGQAFAGALAAQAFAAAGgCQAGgCAFgEIAAgrIgKgEIgJgBQgLAAgGAHg");
	this.shape_133.setTransform(120.05,1067.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#CCCCCC").s().p("AgJAvQgGgHAAgOIAAgrIgKAAIAAgMIAKAAIAAgXIANAAIAAAXIAcAAIAAAMIgcAAIAAAkIABAKQAAAEABADQABADADABQADABAGAAIAHgBIAFgBIABAAIAAAMIgJACIgIABQgLgBgHgGg");
	this.shape_134.setTransform(107.525,1064.55);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#CCCCCC").s().p("AgaAkQgIgIAAgLQAAgJAEgGQAEgFAIgDQAHgDALgCIAVgBIAAgCQAAgFgBgDIgFgFIgHgCIgIgBIgMACQgHABgHADIAAAAIAAgOIALgDIAPgBQAIAAAGABQAHACAEADQAFAEACAFQADAFAAAIIAAA3IgOAAIAAgJIgFAEIgGADIgIADQgDABgGAAQgLAAgIgHgAAGAAIgMABQgGACgEADQgDAEAAAGQAAAHAEAEQAEADAJAAQAGAAAGgDQAGgCAFgEIAAgWIgPABg");
	this.shape_135.setTransform(99.725,1065.675);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#CCCCCC").s().p("AAUA5IAAgvIAAgKQgBgEgCgDQgBgDgEgBQgDgCgGAAQgEAAgHADQgGADgFAEIAAA8IgOAAIAAhxIAOAAIAAAqQAGgGAHgDQAGgDAHAAQANAAAHAIQAHAIAAAOIAAA1g");
	this.shape_136.setTransform(90.775,1064.05);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#CCCCCC").s().p("AgJAvQgGgHAAgOIAAgrIgKAAIAAgMIAKAAIAAgXIANAAIAAAXIAcAAIAAAMIgcAAIAAAkIABAKQAAAEABADQABADADABQADABAGAAIAHgBIAFgBIABAAIAAAMIgJACIgIABQgLgBgHgGg");
	this.shape_137.setTransform(83.125,1064.55);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#CCCCCC").s().p("AgGA3IAAhRIANAAIAABRgAgHgoIAAgOIAPAAIAAAOg");
	this.shape_138.setTransform(72.825,1064.25);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#CCCCCC").s().p("AAUAqIAAguIAAgKQgBgFgCgDQgBgDgEgBQgDgCgGAAQgEAAgHADQgGADgFAEIAAA8IgOAAIAAhRIAOAAIAAAKQAGgGAHgDQAGgDAHAAQANAAAHAIQAHAIAAAPIAAA0g");
	this.shape_139.setTransform(66.025,1065.55);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#CCCCCC").s().p("AgGA3IAAhRIANAAIAABRgAgHgoIAAgOIAPAAIAAAOg");
	this.shape_140.setTransform(59.225,1064.25);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#CCCCCC").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_141.setTransform(55.1,1064.05);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CCCCCC").s().p("AgZAgQgLgLAAgVQAAgTALgLQAKgMASAAQAQAAAJAJQAJALAAARIAAAGIg7AAQAAAIACAGQADAFADAEQAEADAGACQAEACAGAAQAIAAAIgEQAJgDADgDIABAAIAAAPIgOAFQgHACgIAAQgUAAgLgLgAgPgYQgGAGgBAKIAtAAQAAgLgFgGQgFgGgLABQgKgBgHAHg");
	this.shape_142.setTransform(48.6,1065.65);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#CCCCCC").s().p("AgOA4IgNgCIAAgOIABAAIALADQAHACAHAAQAHAAAEgCQAFgBACgEQADgCABgEIABgJIAAgHQgGAEgFADQgHACgHABQgPAAgJgLQgIgLAAgSQAAgLADgIQADgHAFgGQAFgFAGgDQAIgCAFAAQAHgBAFACIAKAEIABgEIANAAIAABIQAAAVgKAJQgJAKgTAAIgMgBgAgOglQgHAIAAAOQAAAPAFAGQAFAGALAAQAFAAAGgCQAGgCAFgEIAAgrIgKgEIgJgBQgLAAgGAHg");
	this.shape_143.setTransform(39.15,1067.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CCCCCC").s().p("AAUAqIAAguIAAgKQgBgFgCgDQgBgDgEgBQgDgCgGAAQgEAAgHADQgGADgFAEIAAA8IgOAAIAAhRIAOAAIAAAKQAGgGAHgDQAGgDAHAAQANAAAHAIQAHAIAAAPIAAA0g");
	this.shape_144.setTransform(30.025,1065.55);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CCCCCC").s().p("AAiA2IgLgeIguAAIgLAeIgOAAIAnhsIATAAIAnBsgAgTALIAmAAIgTg0g");
	this.shape_145.setTransform(20.125,1064.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#CCCCCC").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_146.setTransform(367,1043.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#CCCCCC").s().p("AgZAgQgLgLAAgVQAAgTALgLQAKgMARAAQARAAAJAJQAJALAAARIAAAGIg7AAQAAAIACAGQACAFAEAEQAEADAFACQAFACAGAAQAIAAAJgEQAIgDAEgDIAAAAIAAAPIgOAFQgHACgIAAQgUAAgLgLgAgPgYQgHAGAAAKIAuAAQAAgLgGgGQgFgGgLABQgLgBgGAHg");
	this.shape_147.setTransform(360.5,1045.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#CCCCCC").s().p("AgaAkQgIgIAAgLQAAgJAEgGQAEgFAIgDQAHgDALgCIAVgBIAAgCQAAgFgBgDIgFgFIgHgCIgIgBIgMACQgHABgHADIAAAAIAAgOIALgDIAPgBQAIAAAGABQAHACAEADQAFAEACAFQADAFAAAIIAAA3IgOAAIAAgJIgFAEIgGADIgIADQgDABgGAAQgLAAgIgHgAAGAAIgMABQgGACgEADQgDAEAAAGQAAAHAEAEQAEADAJAAQAGAAAGgDQAGgCAFgEIAAgWIgPABg");
	this.shape_148.setTransform(351.225,1045.425);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CCCCCC").s().p("AAUA5IAAgvIAAgKQgBgEgCgDQgBgDgEgBQgDgCgGAAQgEAAgHADQgGADgFAEIAAA8IgOAAIAAhxIAOAAIAAAqQAGgGAHgDQAGgDAHAAQANAAAHAIQAHAIAAAOIAAA1g");
	this.shape_149.setTransform(342.275,1043.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#CCCCCC").s().p("AgIAoQgIgDgFgFQgFgFgDgIQgDgIAAgLQAAgTALgMQALgLARAAQAHAAAHACQAHACAFADIAAAPIAAAAQgHgFgGgCQgHgDgHAAQgKAAgHAIQgHAIAAAOQAAAPAHAIQAGAIALAAIAJgBIAIgDIAFgEIAFgDIAAAAIAAAQIgNAFQgGACgHAAQgIAAgHgDg");
	this.shape_150.setTransform(333.775,1045.425);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#CCCCCC").s().p("AgGA3IAAhRIANAAIAABRgAgHgoIAAgOIAPAAIAAAOg");
	this.shape_151.setTransform(327.675,1044);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#CCCCCC").s().p("AAiA2IAAhcIgeA/IgIAAIgeg/IAABcIgOAAIAAhsIAUAAIAcA8IAcg8IAVAAIAABsg");
	this.shape_152.setTransform(319.325,1044.05);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#CCCCCC").s().p("AgVA4IAOgiIgghNIAPAAIAYA8IAag8IAOAAIgvBvg");
	this.shape_153.setTransform(303.35,1046.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#CCCCCC").s().p("AgLA4IgKgEIgBAEIgNAAIAAhxIAOAAIAAApQAGgFAGgDQAHgDAHAAQAPAAAHALQAJALAAATQAAAKgDAJQgDAIgFAFQgFAGgGADQgHADgHAAQgGAAgFgCgAgKgMQgGADgFAEIAAAuIAKAEIAJABQALAAAHgIQAGgHAAgQQAAgPgFgHQgFgHgLAAQgFAAgGACg");
	this.shape_154.setTransform(294.55,1043.925);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#CCCCCC").s().p("AgZAgQgLgLAAgVQAAgTALgLQAKgMASAAQAQAAAJAJQAJALAAARIAAAGIg7AAQAAAIACAGQADAFADAEQAEADAGACQAEACAGAAQAIAAAIgEQAJgDADgDIABAAIAAAPIgOAFQgHACgIAAQgUAAgLgLgAgPgYQgHAGAAAKIAtAAQAAgLgFgGQgFgGgLABQgKgBgHAHg");
	this.shape_155.setTransform(279.9,1045.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#CCCCCC").s().p("AgbAvQgIgMAAgUQAAgKADgHQADgIAFgGQAFgFAHgDQAGgDAGAAQAGAAAGABQAEABAGADIAAgjIAOAAIAABxIgOAAIAAgJQgGAFgGADQgGADgHAAQgPAAgJgLgAgOgHQgHAHAAAPQAAAPAFAHQAFAIALAAQAFAAAGgDQAGgCAFgEIAAguIgKgEIgJgBQgLAAgGAIg");
	this.shape_156.setTransform(270.45,1043.925);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CCCCCC").s().p("AgaAkQgIgIAAgLQAAgJAEgGQAEgFAIgDQAHgDALgCIAVgBIAAgCQAAgFgBgDIgFgFIgHgCIgIgBIgMACQgHABgHADIAAAAIAAgOIALgDIAPgBQAIAAAGABQAHACAEADQAFAEACAFQADAFAAAIIAAA3IgOAAIAAgJIgFAEIgGADIgIADQgDABgGAAQgLAAgIgHgAAGAAIgMABQgGACgEADQgDAEAAAGQAAAHAEAEQAEADAJAAQAGAAAGgDQAGgCAFgEIAAgWIgPABg");
	this.shape_157.setTransform(261.275,1045.425);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#CCCCCC").s().p("AAuAqIAAguIgBgKIgCgIQgBgDgDgBQgEgCgFAAQgGAAgGADIgMAIIABADIAAAFIAAAzIgNAAIAAguIAAgKIgCgIQgCgDgDgBQgDgCgGAAQgGAAgGADQgFADgGAEIAAA8IgOAAIAAhRIAOAAIAAAKQAHgGAGgDQAGgDAIAAQAIAAAGAEQAFADACAGQAJgHAHgDQAHgDAHAAQAOAAAGAIQAHAIAAAPIAAA0g");
	this.shape_158.setTransform(249.775,1045.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#CCCCCC").s().p("AgJAvQgGgHAAgOIAAgrIgKAAIAAgMIAKAAIAAgXIANAAIAAAXIAcAAIAAAMIgcAAIAAAkIABAKQAAAEABADQABADADABQADABAGAAIAHgBIAFgBIABAAIAAAMIgJACIgIABQgLgBgHgGg");
	this.shape_159.setTransform(234.325,1044.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#CCCCCC").s().p("AgIAoQgIgDgFgFQgFgFgDgIQgDgIAAgLQAAgTALgMQALgLARAAQAHAAAHACQAHACAFADIAAAPIAAAAQgHgFgGgCQgHgDgHAAQgKAAgHAIQgHAIAAAOQAAAPAHAIQAGAIALAAIAJgBIAIgDIAFgEIAFgDIAAAAIAAAQIgNAFQgGACgHAAQgIAAgHgDg");
	this.shape_160.setTransform(227.575,1045.425);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#CCCCCC").s().p("AgZAgQgLgLAAgVQAAgTALgLQAKgMASAAQAQAAAJAJQAJALAAARIAAAGIg7AAQAAAIACAGQADAFADAEQAEADAGACQAEACAGAAQAIAAAJgEQAIgDADgDIABAAIAAAPIgOAFQgHACgIAAQgUAAgLgLgAgPgYQgGAGgBAKIAtAAQAAgLgFgGQgFgGgLABQgKgBgHAHg");
	this.shape_161.setTransform(219.05,1045.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#CCCCCC").s().p("AgNBGIgIgCIAAgMIABAAIAGABIAGABQAGAAACgCIAFgDIACgHIAAgLIAAhBIgQAAIAAgMIAeAAIAABTQAAAPgHAHQgIAHgLAAIgIAAgAAGg3IAAgOIAQAAIAAAOg");
	this.shape_162.setTransform(211.125,1045.55);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#CCCCCC").s().p("AgbAfQgKgLAAgUQAAgTAKgMQAKgLARAAQARAAAKALQALAMAAATQAAAUgLALQgKAMgRAAQgRAAgKgMgAgRgXQgGAIAAAPQAAAPAGAIQAHAIAKAAQALAAAGgIQAGgIAAgPQAAgPgGgIQgGgHgLAAQgKAAgHAHg");
	this.shape_163.setTransform(204.875,1045.425);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#CCCCCC").s().p("AgZApIAAhRIAOAAIAAANQAJgHAFgDQAGgDAGAAIAGABIAEAAIAAAOIAAAAIgGgBIgHAAQgGAAgGACIgLAIIAAA5g");
	this.shape_164.setTransform(197.8,1045.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#CCCCCC").s().p("AgjA5IAAhvIAOAAIAAAJQAGgFAGgDQAHgDAHAAQAOAAAJALQAIAMAAATQAAAKgDAIQgCAIgGAGQgEAEgHADQgHAEgHAAQgGgBgEgBQgGgBgFgDIAAAigAgJgoQgGACgGAFIAAAtIAKADIAKABQAKAAAHgHQAGgJAAgOQAAgPgFgGQgFgIgLAAQgFAAgFADg");
	this.shape_165.setTransform(189.5,1046.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#CCCCCC").s().p("AgJAvQgGgHAAgOIAAgrIgKAAIAAgMIAKAAIAAgXIANAAIAAAXIAcAAIAAAMIgcAAIAAAkIABAKQAAAEABADQABADADABQADABAGAAIAHgBIAFgBIABAAIAAAMIgJACIgIABQgLgBgHgGg");
	this.shape_166.setTransform(176.425,1044.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#CCCCCC").s().p("AAUAqIAAguIAAgKQgBgFgCgDQgBgDgEgBQgDgCgGAAQgEAAgHADQgGADgFAEIAAA8IgOAAIAAhRIAOAAIAAAKQAGgGAHgDQAGgDAHAAQANAAAHAIQAHAIAAAPIAAA0g");
	this.shape_167.setTransform(168.675,1045.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#CCCCCC").s().p("AgZAgQgLgLAAgVQAAgTALgLQALgMAQAAQARAAAJAJQAJALAAARIAAAGIg7AAQAAAIACAGQADAFADAEQAEADAGACQAEACAGAAQAIAAAJgEQAIgDADgDIABAAIAAAPIgOAFQgHACgIAAQgTAAgMgLgAgPgYQgHAGAAAKIAuAAQgBgLgFgGQgFgGgLABQgLgBgGAHg");
	this.shape_168.setTransform(159.45,1045.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#CCCCCC").s().p("AgbAvQgIgMAAgUQAAgKADgHQADgIAFgGQAFgFAHgDQAGgDAGAAQAGAAAFABQAGABAFADIAAgjIAOAAIAABxIgOAAIAAgJQgGAFgGADQgHADgGAAQgPAAgJgLgAgPgHQgGAHAAAPQAAAPAFAHQAFAIALAAQAFAAAGgDQAGgCAFgEIAAguIgKgEIgKgBQgKAAgHAIg");
	this.shape_169.setTransform(150,1043.925);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#CCCCCC").s().p("AgaAiQgHgIAAgPIAAg0IANAAIAAAuIABAKQABAFACADQACADADABQADACAGAAQAEAAAHgDIALgHIAAg8IAOAAIAABRIgOAAIAAgJQgHAFgGADQgGADgHAAQgNAAgHgIg");
	this.shape_170.setTransform(140.825,1045.525);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#CCCCCC").s().p("AgJAvQgGgHAAgOIAAgrIgKAAIAAgMIAKAAIAAgXIANAAIAAAXIAcAAIAAAMIgcAAIAAAkIABAKQAAAEABADQABADADABQADABAGAAIAHgBIAFgBIABAAIAAAMIgJACIgIABQgLgBgHgGg");
	this.shape_171.setTransform(133.225,1044.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#CCCCCC").s().p("AgSApIgNgFIAAgQIABAAQAHAGAHACQAIADAIABQAHgBAGgDQAFgDAAgGQAAgFgDgCQgCgCgJgCIgGgCIgJgCQgKgCgFgFQgFgGAAgIQABgFACgEQACgFAEgEQAEgDAHgBQAGgDAGAAQAIAAAIACIAMAEIAAAPIgBAAQgFgEgIgCQgHgDgIAAQgGAAgFADQgGACABAHQAAAEACADQAEACAGACIAIACIAIABQAJACAGAFQAFAFAAAKQAAAKgJAIQgKAHgOAAQgJAAgIgCg");
	this.shape_172.setTransform(126.4,1045.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#CCCCCC").s().p("AgaAkQgIgIAAgLQAAgJAEgGQAEgFAIgDQAHgDALgCIAVgBIAAgCQAAgFgBgDIgFgFIgHgCIgIgBIgMACQgHABgHADIAAAAIAAgOIALgDIAPgBQAIAAAGABQAHACAEADQAFAEACAFQADAFAAAIIAAA3IgOAAIAAgJIgFAEIgGADIgIADQgDABgGAAQgLAAgIgHgAAGAAIgMABQgGACgEADQgDAEAAAGQAAAHAEAEQAEADAJAAQAGAAAGgDQAGgCAFgEIAAgWIgPABg");
	this.shape_173.setTransform(112.375,1045.425);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#CCCCCC").s().p("AgPAYIANgvIARAAIgTAvg");
	this.shape_174.setTransform(100.1,1049.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#CCCCCC").s().p("AgVA4IAPgiIghhNIAPAAIAYA8IAZg8IAPAAIgvBvg");
	this.shape_175.setTransform(94.4,1046.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#CCCCCC").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_176.setTransform(87.9,1043.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#CCCCCC").s().p("AgbAfQgKgLAAgUQAAgTAKgMQAKgLARAAQARAAAKALQALAMAAATQAAAUgLALQgKAMgRAAQgRAAgKgMgAgRgXQgGAIAAAPQAAAPAGAIQAHAIAKAAQALAAAGgIQAGgIAAgPQAAgPgGgIQgGgHgLAAQgKAAgHAHg");
	this.shape_177.setTransform(81.325,1045.425);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#CCCCCC").s().p("AgjA2IAAhsIAeAAQAJABAHABQAGABAGAFQAGADADAHQAEAGAAAKQAAAGgDAHQgCAGgFADQgFAGgIADQgIADgLAAIgOAAIAAAogAgUABIAMAAQAIAAAFgBQAGgBADgDQAEgDABgEQACgFAAgEQAAgGgCgEQgCgEgEgDIgIgDIgLgBIgOAAg");
	this.shape_178.setTransform(73.075,1044.05);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#CCCCCC").s().p("AgSApIgNgFIAAgQIABAAQAHAGAHACQAIADAIABQAIgBAFgDQAFgDAAgGQAAgFgDgCQgDgCgHgCIgHgCIgJgCQgLgCgEgFQgFgGABgIQAAgFACgEQACgFAEgEQAEgDAHgBQAGgDAGAAQAIAAAIACIAMAEIAAAPIgBAAQgFgEgIgCQgHgDgIAAQgGAAgFADQgGACAAAHQAAAEADADQAEACAHACIAHACIAIABQAKACAFAFQAFAFAAAKQAAAKgJAIQgKAHgOAAQgKAAgHgCg");
	this.shape_179.setTransform(59,1045.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#CCCCCC").s().p("AgGA3IAAhRIANAAIAABRgAgHgoIAAgOIAPAAIAAAOg");
	this.shape_180.setTransform(52.975,1044);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#CCCCCC").s().p("AgSApIgNgFIAAgQIABAAQAGAGAJACQAHADAHABQAJgBAFgDQAFgDAAgGQAAgFgDgCQgDgCgIgCIgGgCIgJgCQgLgCgEgFQgEgGAAgIQgBgFACgEQACgFAFgEQAEgDAGgBQAHgDAHAAQAHAAAHACIANAEIAAAPIgBAAQgFgEgIgCQgIgDgGAAQgHAAgGADQgEACAAAHQAAAEADADQACACAHACIAIACIAIABQAKACAFAFQAFAFAAAKQAAAKgJAIQgKAHgPAAQgIAAgIgCg");
	this.shape_181.setTransform(41.85,1045.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#CCCCCC").s().p("AgGA3IAAhRIANAAIAABRgAgHgoIAAgOIAPAAIAAAOg");
	this.shape_182.setTransform(35.825,1044);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#CCCCCC").s().p("AAUA5IAAgvIAAgKQgBgEgCgDQgBgDgEgBQgDgCgGAAQgEAAgHADQgGADgFAEIAAA8IgOAAIAAhxIAOAAIAAAqQAGgGAHgDQAGgDAHAAQANAAAHAIQAHAIAAAOIAAA1g");
	this.shape_183.setTransform(29.025,1043.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#CCCCCC").s().p("AgGA2IAAhfIgnAAIAAgNIBbAAIAAANIgnAAIAABfg");
	this.shape_184.setTransform(19.625,1044.05);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#CCCCCC").s().p("AA3BXIgSgwIhLAAIgQAwIgYAAIBAitIAdAAIBACtgAgfATIA9AAIgehVg");
	this.shape_185.setTransform(575.3,613.975);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#CCCCCC").s().p("AgoAzQgTgRABghQAAgfARgTQARgTAcAAQAbAAAOAQQAPAPAAAdIAAALIhgAAQAAAMAEAJQADAJAHAFQAFAGAJADQAIADAJAAQANAAAOgGQAOgFAFgFIACAAIAAAYIgXAIQgMADgNAAQgfAAgSgSgAgYgnQgLAKgBAQIBKAAQAAgSgJgJQgJgKgRAAQgRAAgKALg");
	this.shape_186.setTransform(229.3,616.625);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#CCCCCC").s().p("AAhBDIAAhJIgBgRQgBgIgDgFQgDgEgGgDQgFgCgJAAQgIAAgKAEQgKAFgJAHIAABgIgWAAIAAiCIAWAAIAAAPQALgJALgEQAKgFALAAQAWAAALAMQALANAAAYIAABUg");
	this.shape_187.setTransform(214.525,616.475);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#CCCCCC").s().p("AgqA3QgMgNAAgYIAAhUIAXAAIAABJIAAARQABAIADAFQAEAFAFACQAFACAJAAQAIAAAKgEQAKgEAJgHIAAhhIAWAAIAACCIgWAAIAAgPQgLAJgKAFQgLAEgLAAQgVAAgLgMg");
	this.shape_188.setTransform(199.225,616.825);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#CCCCCC").s().p("AgPBLQgLgLAAgYIAAhFIgOAAIAAgSIAOAAIAAgmIAXAAIAAAmIAsAAIAAASIgsAAIAAA7IAAARQAAAFADAFQACAFAEACQAFACAKAAIALgBIAIgDIABAAIAAAUIgOACIgMABQgTAAgLgKg");
	this.shape_189.setTransform(187.1,614.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#CCCCCC").s().p("AgoAzQgSgRgBghQABgfARgTQARgTAcAAQAbAAAOAQQAOAPAAAdIAAALIhfAAQAAAMAEAJQADAJAHAFQAFAGAJADQAIADAKAAQANAAAOgGQANgFAGgFIABAAIAAAYIgXAIQgLADgNAAQggAAgSgSgAgYgnQgLAKgBAQIBKAAQgBgSgIgJQgIgKgSAAQgRAAgKALg");
	this.shape_190.setTransform(175.15,616.625);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#CCCCCC").s().p("AgrBLQgOgSAAggQAAgQAFgNQAFgNAIgIQAIgKALgEQAKgFALAAQAKAAAIACIARAHIAAg5IAWAAIAAC1IgWAAIAAgNQgKAIgKAEQgLAFgLAAQgXAAgOgSgAgYgLQgKAMAAAXQAAAYAIAMQAIAMASAAQAIAAAKgEQAJgEAJgGIAAhLQgJgEgHgBQgHgCgJAAQgRAAgLANg");
	this.shape_191.setTransform(160.025,614.25);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#CCCCCC").s().p("AgdBBQgNgDgIgFIAAgYIABAAQAKAIANAFQANAEAMAAQAOAAAIgEQAHgFAAgLQABgHgFgEQgEgEgNgDIgLgCIgOgDQgRgFgIgIQgGgIAAgNQgBgJAEgHQADgHAHgFQAGgGAKgDQALgEAMAAQALAAAMAEQAMACAIAEIAAAYIgBAAQgJgGgMgEQgMgFgMAAQgKAAgJAFQgIAFAAAIQAAAIAFAFQAFAEALACIAMADIANACQAPAEAJAIQAIAJAAAOQAAASgPALQgPALgYAAQgOAAgMgDg");
	this.shape_192.setTransform(221.2,746.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#CCCCCC").s().p("AgoAzQgTgRABghQAAgfARgTQARgTAcAAQAbAAAOAQQAPAPAAAdIAAALIhgAAQAAAMAEAJQADAJAHAFQAFAGAJADQAIADAJAAQANAAAOgGQAOgFAFgFIACAAIAAAYIgXAIQgMADgNAAQgfAAgSgSgAgYgnQgLAKgBAQIBKAAQAAgSgJgJQgJgKgRAAQgRAAgKALg");
	this.shape_193.setTransform(207.7,746.375);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#CCCCCC").s().p("AgOBAQgMgEgIgIQgJgJgFgNQgEgMAAgSQAAgfASgSQARgTAcAAQALAAALAEQALADAJAEIAAAZIgBAAQgLgIgKgEQgLgFgKAAQgSAAgKAOQgMAMAAAXQAAAYAMANQAKAMASAAQAHAAAGgCQAIgBAFgDIAJgFIAHgFIABAAIAAAYQgLAGgKACQgKADgLAAQgNAAgMgEg");
	this.shape_194.setTransform(194.6,746.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#CCCCCC").s().p("AgKBYIAAiCIAVAAIAACCgAgMhAIAAgXIAZAAIAAAXg");
	this.shape_195.setTransform(184.85,744.175);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#CCCCCC").s().p("AgrAyQgQgSAAggQAAgfAQgTQAQgSAbAAQAcAAAQASQAQATAAAfQAAAggQASQgQATgcAAQgbAAgQgTgAgbgkQgKALAAAZQAAAYAKANQAKANARAAQASAAAKgNQAKgMAAgZQAAgZgKgLQgKgNgSAAQgRAAgKANg");
	this.shape_196.setTransform(174.275,746.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#CCCCCC").s().p("AgKBBIg1iBIAYAAIAnBnIAphnIAXAAIg1CBg");
	this.shape_197.setTransform(160.1,746.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#CCCCCC").s().p("Ag4BXIAAitIBxAAIAAAUIhbAAIAAAwIBbAAIAAAUIhbAAIAABBIBbAAIAAAUg");
	this.shape_198.setTransform(247.55,874.175);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#CCCCCC").s().p("AA2BXIAAiVIgwBlIgNAAIgwhlIAACVIgWAAIAAitIAgAAIAtBgIAthgIAhAAIAACtg");
	this.shape_199.setTransform(229.325,874.175);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#CCCCCC").s().p("AgcBVQgMgEgJgJQgJgKgEgNQgEgOAAgUIAAhnIAXAAIAABoQAAAPACAIQACAIAFAHQAFAHAIAFQAJADAMAAQAMAAAJgDQAJgFAFgHQAFgHABgIQADgJAAgNIAAhpIAXAAIAABnQAAAUgEAOQgFANgJAKQgJAJgMAEQgMAEgQAAQgPAAgNgEg");
	this.shape_200.setTransform(210.45,874.35);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#CCCCCC").s().p("Ag2BXIAAitIAXAAIAACZIBWAAIAAAUg");
	this.shape_201.setTransform(196.175,874.175);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#CCCCCC").s().p("AggBVQgQgGgKgMQgKgMgHgQQgFgRAAgWQAAgUAFgRQAGgRALgMQAKgMAQgGQAPgGARAAQATAAAOAGQAQAGAKAMQALAMAFARQAGARAAAUQAAAWgGARQgFARgLALQgLAMgPAGQgOAGgTAAQgRAAgPgGgAgpgzQgPASAAAhQAAAiAPATQAQASAZAAQAaAAAPgSQAQgTAAgiQAAghgQgSQgPgTgaAAQgaAAgPATg");
	this.shape_202.setTransform(178.85,874.175);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#CCCCCC").s().p("AgOBXIhAitIAZAAIA2CYIA3iYIAXAAIhACtg");
	this.shape_203.setTransform(161.2,874.175);

	this.instance_3 = new lib.background();
	this.instance_3.parent = this;
	this.instance_3.setTransform(588,1179,1,1,180);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#202020").ss(7.5,1,1).p("EApghIXMhx4AAAIAA4JMCQxAAAIAAYJgEBIZhIXMAAACo4I+5AAMAAAio4");
	this.shape_204.setTransform(308.85,521.925);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#202020").s().p("EApgBghMAAAio4Ie5AAI+5AAMhx4AAAIAA4JMCQxAAAIAAYJMAAACo4g");
	this.shape_205.setTransform(308.85,521.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_205},{t:this.shape_204},{t:this.instance_3},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(140.5,465.6,1042.2,713.4);
// library properties:
lib.properties = {
	id: 'C02D25ECDB88A448A22D4531C892E0FB',
	width: 705,
	height: 1130,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/background.jpg", id:"background"},
		{src:"images/RoundedRectangle1.png", id:"RoundedRectangle1"},
		{src:"images/RoundedRectangle2copy.png", id:"RoundedRectangle2copy"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C02D25ECDB88A448A22D4531C892E0FB'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;