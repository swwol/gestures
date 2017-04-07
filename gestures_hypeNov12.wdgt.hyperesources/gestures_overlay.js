(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.gestures_overlay = function() {
	this.initialize();

	// lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6b6b6b").ss(1,1,1).p("Egaog7/MAAAB4VEAapg8VMAAAB4V");
	this.shape.setTransform(511.5,384);

	// labels
	this.b9 = new lib.vidButtonRight3();
	this.b9.setTransform(852.9,749);
	new cjs.ButtonHelper(this.b9, 0, 1, 2, false, new lib.vidButtonRight3(), 3);

	this.b8 = new lib.vidButtonCentre3();
	this.b8.setTransform(510.9,749);
	new cjs.ButtonHelper(this.b8, 0, 1, 2, false, new lib.vidButtonCentre3(), 3);

	this.b7 = new lib.vidButton3();
	this.b7.setTransform(170.8,749);
	new cjs.ButtonHelper(this.b7, 0, 1, 2, false, new lib.vidButton3(), 3);

	this.b6 = new lib.vidButtonRight2();
	this.b6.setTransform(852.9,494.1);
	new cjs.ButtonHelper(this.b6, 0, 1, 2, false, new lib.vidButtonRight2(), 3);

	this.b5 = new lib.vidButtonCentre2();
	this.b5.setTransform(510.9,494.1);
	new cjs.ButtonHelper(this.b5, 0, 1, 2, false, new lib.vidButtonCentre2(), 3);

	this.b4 = new lib.vidButton2();
	this.b4.setTransform(170.8,494.1);
	new cjs.ButtonHelper(this.b4, 0, 1, 2, false, new lib.vidButton2(), 3);

	this.b3 = new lib.vidButtonRight();
	this.b3.setTransform(852.9,248.9);
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.vidButtonRight(), 3);

	this.b2 = new lib.vidButtonCentre();
	this.b2.setTransform(510.9,248.9);
	new cjs.ButtonHelper(this.b2, 0, 1, 2, false, new lib.vidButtonCentre(), 3);

	this.b1 = new lib.vidButton();
	this.b1.setTransform(170.8,248.9);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.vidButton(), 3);

	this.addChild(this.b1,this.b2,this.b3,this.b4,this.b5,this.b6,this.b7,this.b8,this.b9,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2.1,1024.1,772.4);


// symbols:
(lib.vidButtonRight3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Foot wrapped around chair", "15px Helvetica", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(-4.9,-3.4,1.03,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6b6b6b").s().p("A6sCBIAAkCMA1ZAAAIAAECg");
	this.shape.setTransform(0.4,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c6c6c6").s().p("A6pCBIAAkCMA1TAAAIAAECg");
	this.shape_1.setTransform(0.4,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A5nSrMAAAglVMAzPAAAMAAAAlVg");
	this.shape_2.setTransform(1.4,-113.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},2).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.5,-6.9,341.8,26);


(lib.vidButtonRight2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Shoulder Shrug", "15px Helvetica", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(-3.8,-3.4,1.03,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6b6b6b").s().p("A6sCBIAAkCMA1ZAAAIAAECg");
	this.shape.setTransform(0.4,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c6c6c6").s().p("A6pCBIAAkCMA1TAAAIAAECg");
	this.shape_1.setTransform(0.4,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A5nSrMAAAglVMAzPAAAMAAAAlVg");
	this.shape_2.setTransform(1.4,-113.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},2).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.5,-6.9,341.8,26);


(lib.vidButtonRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Covering Mouth", "15px Helvetica", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(-3.8,-3.4,1.03,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6b6b6b").s().p("A6sCBIAAkCMA1ZAAAIAAECg");
	this.shape.setTransform(0.4,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c6c6c6").s().p("A6pCBIAAkCMA1TAAAIAAECg");
	this.shape_1.setTransform(0.4,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A5nSrMAAAglVMAzPAAAMAAAAlVg");
	this.shape_2.setTransform(1.4,-113.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},2).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.5,-6.9,341.8,26);


(lib.vidButtonCentre3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Fidgeting", "15px Helvetica", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(-3.1,-3.4,1.03,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6b6b6b").s().p("A6mCBIAAkCMA1NAAAIAAECg");
	this.shape.setTransform(0.8,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c6c6c6").s().p("A6oCBIAAkCMA1RAAAIAAECg");
	this.shape_1.setTransform(0.8,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A5nSrMAAAglVMAzPAAAMAAAAlVg");
	this.shape_2.setTransform(1.4,-113.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},2).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.4,-6.9,340.7,26);


(lib.vidButtonCentre2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("False Smile", "15px Helvetica", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(-3.4,-3.4,1.03,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6b6b6b").s().p("A6mCBIAAkCMA1NAAAIAAECg");
	this.shape.setTransform(0.8,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c6c6c6").s().p("A6lCBIAAkCMA1LAAAIAAECg");
	this.shape_1.setTransform(0.8,6,1.002,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A5nSrMAAAglVMAzPAAAMAAAAlVg");
	this.shape_2.setTransform(1.4,-113.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},2).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.4,-6.9,340.7,26);


(lib.vidButtonCentre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Crossed Arms", "15px Helvetica", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(-3.6,-3.4,1.03,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6b6b6b").s().p("A6mCBIAAkCMA1NAAAIAAECg");
	this.shape.setTransform(0.8,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c6c6c6").s().p("A6oCBIAAkCMA1RAAAIAAECg");
	this.shape_1.setTransform(0.8,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A5nSrMAAAglVMAzPAAAMAAAAlVg");
	this.shape_2.setTransform(1.4,-113.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},2).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.4,-6.9,340.7,26);


(lib.vidButton3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Finger Prod", "15px Helvetica", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(-3.4,-3.4,1.03,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6b6b6b").s().p("A6nCBIAAkCMA1QAAAIAAECg");
	this.shape.setTransform(-0.2,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c6c6c6").s().p("A6nCBIAAkCMA1QAAAIAAECg");
	this.shape_1.setTransform(-0.2,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6b6b6b").ss(1,1,1).p("AY7y1MAAAAlrMgx1AAAMAAAglrg");
	this.shape_2.setTransform(0.9,-111);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("A46S2MAAAglrMAx1AAAMAAAAlrg");
	this.shape_3.setTransform(0.9,-111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},2).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.7,-6.9,341,26);


(lib.vidButton2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Stiff Posture", "15px Helvetica", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(-3.4,-3.4,1.03,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6b6b6b").s().p("A6nCBIAAkCMA1QAAAIAAECg");
	this.shape.setTransform(-0.2,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c6c6c6").s().p("A6nCBIAAkCMA1QAAAIAAECg");
	this.shape_1.setTransform(-0.2,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6b6b6b").ss(1,1,1).p("AY7S2Mgx1AAAMAAAglrMAx1AAAg");
	this.shape_2.setTransform(0.9,-111);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("A46S2MAAAglrMAx1AAAMAAAAlrg");
	this.shape_3.setTransform(0.9,-111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},2).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.7,-6.9,341,26);


(lib.vidButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Averting Gaze", "15px Helvetica", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(-3.6,-3.4,1.03,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6b6b6b").s().p("A6nCBIAAkCMA1QAAAIAAECg");
	this.shape.setTransform(-0.2,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c6c6c6").s().p("A6nCBIAAkCMA1QAAAIAAECg");
	this.shape_1.setTransform(-0.2,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6b6b6b").ss(1,1,1).p("AY7S2Mgx1AAAMAAAglrMAx1AAAg");
	this.shape_2.setTransform(0.9,-111);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("A46S2MAAAglrMAx1AAAMAAAAlrg");
	this.shape_3.setTransform(0.9,-111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},2).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.7,-6.9,341,26);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;