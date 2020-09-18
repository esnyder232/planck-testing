planck.testbed('mytest', function(testbed) {
	console.log('now doing mytest');
	var world = planck.World({
		gravity: planck.Vec2(0, -10)
	});

	//origin lines
	var xAxisBody = world.createBody({
		position: planck.Vec2(0, 0)
	});
	var xAxisShape = planck.Edge(planck.Vec2(0, 0), planck.Vec2(1, 0));
	xAxisBody.createFixture(xAxisShape);

	var yAxisBody = world.createBody({
		position: planck.Vec2(0, 0)
	});
	var yAxisShape = planck.Edge(planck.Vec2(0, 0), planck.Vec2(0, 1));
	yAxisBody.createFixture(yAxisShape);

	//ground
	var ground = world.createBody({
		position: planck.Vec2(0, -10)
	});	
	var groundShape = planck.Box(20, 5, planck.Vec2(0,0));
	ground.createFixture(groundShape, 0);

	
	//box
	var boxBody = world.createBody({
		position: planck.Vec2(1, 10),
		type: planck.Body.DYNAMIC
	});
	var boxShape = planck.Box(1, 1);
	boxBody.createFixture({
		shape: boxShape,
		density: 1.0,
		friction: 0.3
	});

	var boxShape2 = planck.Box(1, 1, planck.Vec2(-1, -1));
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

	console.log('mytest done!');
	return world;
})




