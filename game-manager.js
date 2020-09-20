//This is just to make loading worlds easier to control.
class GameManager {
	constructor() {
		console.log('game manager constructor')
		this.world = null;
		this.timestep = 1/60;
	}

	init() {
		this.createWorld();
	}

	createWorld() {
		console.log('creating world');
		const pl = planck;
		const Vec2 = pl.Vec2;
		
		if(!this.world) {
			this.world = pl.World({
				gravity: Vec2(0, -10)
			});
		
			//origin lines
			var xAxisBody = this.world.createBody({
				position: Vec2(0, 0)
			});
			var xAxisShape = pl.Edge(Vec2(0, 0), Vec2(1, 0));
			xAxisBody.createFixture(xAxisShape);
		
			var yAxisBody = this.world.createBody({
				position: Vec2(0, 0)
			});
			var yAxisShape = pl.Edge(Vec2(0, 0), Vec2(0, 1));
			yAxisBody.createFixture(yAxisShape);
		
			//ground
			var ground = this.world.createBody({
				position: Vec2(0, -10)
			});	
			var groundShape = pl.Box(20, 5, Vec2(0,0));
			ground.createFixture(groundShape, 0);
		
			
			//box
			var boxBody = this.world.createBody({
				position: Vec2(1, 10),
				type: pl.Body.DYNAMIC
			});
			var boxShape = pl.Box(1, 1);
			boxBody.createFixture({
				shape: boxShape,
				density: 1.0,
				friction: 0.3
			});
		
			var boxShape2 = pl.Box(1, 1, Vec2(-1, -1));
			boxBody.createFixture({
				shape: boxShape2,
				density: 1000.0,
				friction: 0.3
			});
		
			//simulate
			// var timeStep = 1/60;
			// var velocityIterations = 6;
			// var positionIterations = 2;
		
			// for(var i = 0; i < 360; i++)
			// {
			// 	world.step(timeStep, velocityIterations, positionIterations);
			// 	var p = boxBody.getPosition();
			// 	var a = boxBody.getAngle();
			// 	console.log('%s, %s, %s', p.x, p.y, a);
			// }
	
		}
	
		console.log('creating world done');
	}

	start() {
		console.log('start');
		if(this.world) {
			planck.testbed({debug: true}, (testbed) => {
				// console.log(testbed);
				// console.log(this);
				this.testbed = testbed;
				return this.world;
			});
		}
	}

	stop () {
		console.log('stop');
		if(this.world) {
			//...how do i stop it?
			console.log(this);
			console.log(this.testbed);
			this.testbed.pause();
		}
	}

	update(dt) {
		console.log(this.testbed.RenderWorld);
	}
}


var gm = new GameManager();
gm.init();
gm.start();
//gm.stop();

window.setTimeout(() => {
	console.log('timeout');
	gm.stop();
}, 1000)

window.setTimeout(() => {
	console.log('timeout2');
	gm.update();
}, 2000)
// window.setTimeout(() => {
// 	console.log('timeout3');
// 	gm.update();
// }, 3000)
// window.setTimeout(() => {
// 	console.log('timeout4');
// 	gm.update();
// }, 4000)
window.setTimeout(() => {
	console.log('timeout4');
	//gm.testbed.resume();
	//gm.testbed.Viewer.RenderWorld();
}, 5000)

