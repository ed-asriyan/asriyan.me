(function () {
  Matter.use(
      'matter-wrap'
  );

  var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies;

  // create engine
  var engine = Engine.create(),
      world = engine.world;

  // create renderer
  var render = Render.create({
    element: document.getElementById('background'),
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      showAngleIndicator: false,
      background: 'red',
    }
  });

  Render.run(render);

  // create runner
  var runner = Runner.create();
  Runner.run(runner, engine);

  // add bodies
  var stack = Composites.stack(20, 20, 20, 5, 0, 0, function(x, y) {
    return Bodies.circle(x, y, Common.random(10, 20), { friction: 0.00001, restitution: 0.5, density: 0.001 });
  });

  World.add(world, stack);

  World.add(world, [
    Bodies.rectangle(220, 170, 400, 20, { isStatic: true, angle: -Math.PI * 0.16 }),
    Bodies.rectangle(620, 170, 400, 20, { isStatic: true, angle: Math.PI * 0.16 }),
    // Bodies.rectangle(80, 10, 500, 20, { isStatic: true, angle: Math.PI * 0.8 }),
    Bodies.rectangle(420, 450, 580, 20, { isStatic: true }),
    Bodies.rectangle(0, 580, 400, 20, { isStatic: true, angle: Math.PI * 0.04 }),
    Bodies.rectangle(840, 580, 400, 20, { isStatic: true, angle: -Math.PI * 0.04 }),
  ]);

  // add mouse control
  var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

  World.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // fit the render viewport to the scene
  Render.lookAt(render, Composite.allBodies(world));

  // wrapping using matter-wrap plugin
  for (var i = 0; i < stack.bodies.length; ++i) {
    stack.bodies[i].plugin.wrap = {
      min: { x: render.bounds.min.x, y: render.bounds.min.y },
      max: { x: render.bounds.max.x, y: render.bounds.max.y }
    };
  }
}());
