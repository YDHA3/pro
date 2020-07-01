var sun, mercury, earth, venus, saturn, mars, jupeter, uranus, neptune;
 var  sunImg, mercuryImg, earthImg, venusImg, saturnImg, marsImg, jupeterImg, uranusImg, neptuneImg;
 var speed = 0;  
function preload(){
  sunImg = loadImage("sprites/i.png");
  mercuryImg = loadImage("sprites/f.png");
  earthImg = loadImage("sprites/d.png");
  venusImg = loadImage("sprites/e.png");
  saturnImg = loadImage("sprites/g.png");
  marsImg = loadImage("sprites/c.png");
  jupeterImg = loadImage("sprites/b.png");
  uranusImg = loadImage("sprites/a.png");
  neptuneImg = loadImage("sprites/h.png");
  
}

function setup() {
createCanvas(800, 800);
    sun = createSprite(0, 0);
    sun.addImage("sun", sunImg);
    sun.scale = 0.3;
    sun.setCollider("circle", 0, 0, 140);
    sun.debug = true;

    mercury = createSprite(70, 50);
    mercury.addImage("mercury", mercuryImg);
    mercury.scale = 0.1;
    mercury.setCollider("circle", 0, 0, 100);
    mercury.debug = true;

    venus = createSprite(210, 60);
    venus.addImage("venus", venusImg);
    venus.scale = 0.15;

    earth = createSprite(150, -18);
    earth.addImage("earth", earthImg);
    earth.scale = 0.22;

    mars = createSprite(30, 220);
    mars.addImage("mars", marsImg);
    mars.scale = 0.2;

    jupiter = createSprite(-180, 210);
    jupiter.addImage("jupiter", jupeterImg);
    jupiter.scale = 0.3;

    saturn = createSprite(340, -30);
    saturn.addImage("saturn", saturnImg);
    saturn.scale = 0.3;

    uranus = createSprite(220, 350);
    uranus.addImage("uranus", uranusImg);
    uranus.scale = 0.2;

    neptune = createSprite(-340, -320);
    neptune.addImage("neptune", neptuneImg);
    neptune.scale = 0.1;

}

function draw() {
  background(0);
  angleMode(DEGREES);
   translate(width / 2, height / 2); 
   rotate(speed); 
   speed=speed+1 
   if (sun.collide(mercury)) {
      mercury.destroy(); 
    }
  // angle = angle + anglespeed; 
  if (frameCount % 10 === 0) { 
    sun.scale = sun.scale + 0.01;
   }

   if (sun.collide(earth)) {
    earth.destroy(); 
  }

  if (sun.collide(venus)) {
    venus.destroy(); 
  }
   
  if (sun.collide(saturn)) {
    saturn.destroy(); 
  }
  if (sun.collide(mars)) {
    mars.destroy(); 
  }
  if (sun.collide(jupeter)) {
    jupeter.destroy(); 
  }
  if (sun.collide(uranus)) {
    uranus.destroy(); 
  }
  if (sun.collide(neptune)) {
    neptune.destroy(); 
  }
  
  drawSprites();
} 