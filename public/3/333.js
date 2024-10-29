(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"333_atlas_1", frames: [[0,0,1920,1080],[0,1187,109,74],[315,1082,127,145],[0,1082,313,103],[111,1187,47,47]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Растровоеизображение1 = function() {
	this.initialize(ss["333_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.b_main = function() {
	this.initialize(ss["333_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.b_wing = function() {
	this.initialize(ss["333_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Car = function() {
	this.initialize(ss["333_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Wheel = function() {
	this.initialize(ss["333_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Wing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Wing
	this.instance = new lib.b_wing();
	this.instance.setTransform(-9,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:28.2254,x:55.4,y:-124.2},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:41.6851,x:82.45,y:-108.3},0).wait(1).to({rotation:49.3789,x:96.05,y:-96.5},0).wait(1).to({rotation:56.347,x:106.85,y:-84.35},0).wait(1).to({rotation:37.3711,x:74.2,y:-114.05},0).wait(1).to({rotation:26.9318,x:52.65,y:-125.3},0).wait(1).to({rotation:20.4416,x:38.35,y:-130.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.9754,x:9.65,y:-135.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-135.1,192.8,236.8);


(lib.Wheel_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Wheel
	this.instance = new lib.Wheel();
	this.instance.setTransform(0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:-29.9989,x:-12.9,y:22.35},0).wait(2).to({rotation:-59.9979,x:-12.85,y:48.2},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,-12.9,96.4,96.4);


(lib.Car_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Wheel_R
	this.instance = new lib.Wheel_1("synched",0);
	this.instance.setTransform(369.2,115.2,1,1,0,0,0,35.2,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

	// Wheel_L
	this.instance_1 = new lib.Wheel_1("synched",0);
	this.instance_1.setTransform(77.2,115.2,1,1,0,0,0,35.2,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6));

	// Body
	this.instance_2 = new lib.Car();
	this.instance_2.setTransform(0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469.5,163.5);


(lib.BAT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Wing_R
	this.instance = new lib.Wing("synched",0);
	this.instance.setTransform(84.3,74.2,1,1,0,0,0,63.5,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Body
	this.instance_1 = new lib.b_main();
	this.instance_1.setTransform(-66,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// Wing_L
	this.instance_2 = new lib.Wing("synched",0);
	this.instance_2.setTransform(-47.2,1.55,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.9,-133.6,425.5,237);


// stage content:
(lib._333 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Car
	this.instance = new lib.Car_1("synched",0);
	this.instance.setTransform(1561.6,530.65,1,1,0,0,0,234.8,81.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).to({guide:{path:[1561.6,530.7,641,530.7,-279.7,530.7]},startPosition:1},55).wait(1));

	// Bat2
	this.instance_1 = new lib.BAT("synched",0);
	this.instance_1.setTransform(1433.1,139.45,0.477,0.4769,0,0,0,-8.9,-10.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({x:-79.65,y:145.75,startPosition:8},80).to({_off:true},1).wait(7));

	// Bat1
	this.instance_2 = new lib.BAT("synched",0);
	this.instance_2.setTransform(1354.55,177.8,0.477,0.4769,0,0,0,-8.9,-10.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({guide:{path:[1354.6,177.8,1336,172.4,1311.7,167.2,1263.1,156.8,1234.8,157.7,1210.5,158.5,1140.9,172.7,1100.7,180.9,1089,183.2,1061.7,188.3,1046.8,189.6,1031.6,190.9,1006.7,188.1,991.9,186.4,958.7,181.2,925.4,176,908.9,174.1,881.8,171.1,863.5,172,834.1,173.5,767.2,190.4,731.5,199.3,720.7,201.7,697.4,206.9,685.7,207.2,673.9,207.5,653.7,204.2,641.4,202.1,614.6,196.6,587,190.9,573.9,188.7,551.9,185,537.5,184.7,523,184.4,497.5,188.3,481.8,190.7,448.4,197.1,414.2,203.7,399.2,206.1,373.4,210.1,358.7,210.1,344.1,210,322.5,205.2,312.9,203.1,281.7,194.8,255.1,187.8,239,184.8,215.2,180.4,196.7,181,178.1,181.6,153.8,187,136.9,190.8,109.7,198.9,74.8,209.2,67.1,211.3,44.1,217.5,28.7,219.1,-0.7,222.1,-58.2,209.6,-86.9,203.4,-109.8,196.5]},startPosition:8},80).to({_off:true},1).wait(6));

	// BAT
	this.instance_3 = new lib.BAT("synched",0);
	this.instance_3.setTransform(1524.5,196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({guide:{path:[1524.5,196.5,1463,183.4,1393.3,170.7,1254,145.3,1213.4,147.2,1191.5,148.3,1164,155.2,1145.5,159.8,1115.2,169.8,1080.9,181.1,1069.8,184.2,1046,190.9,1030.5,191.6,1014.8,192.3,990.8,185,976.7,180.7,945.7,168.6,915.1,156.6,900,152.1,875.3,144.8,858.6,145.4,841.7,146.1,816.6,153,800,157.5,770.2,167.8,737,179.4,725.5,182.8,702.2,189.8,688.7,190.6,675.2,191.4,654,185.5,646,183.2,613.7,172.3,587.3,163.4,570.9,159.9,547,154.9,528.6,157.2,510.8,159.5,485.4,166.7,475.4,169.5,440.1,180.8,412.3,189.6,396.3,193.4,373.4,198.8,357.7,198.5,342.5,198.2,319.2,192.4,309.8,190.1,275.6,180.3,247.5,172.2,230.6,168.9,206,164.1,187.8,165.1,170.1,166,148.5,172.4,139.2,175.2,110.3,185.6,86.3,194.3,71,197.8,48.7,203.1,28.7,202.4,8.9,201.7,-16.6,193.8,-31.2,189.3,-62.8,176.9,-93.2,165,-109.3,160.3,-121.9,156.6,-133.3,154.6]},startPosition:9},93).to({_off:true},1).wait(18));

	// BG
	this.instance_4 = new lib.Растровоеизображение1();
	this.instance_4.setTransform(0,0,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(112));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(125.5,360,1670.8,360);
// library properties:
lib.properties = {
	id: 'CD08DC976F677749840F07C7385012C7',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/333_atlas_1.png", id:"333_atlas_1"}
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
an.compositions['CD08DC976F677749840F07C7385012C7'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;