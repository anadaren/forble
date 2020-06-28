//CREATING GAME PIECES + MOVEMENT PATHS

function patternEnd(pattern) {
  myObstacles[pattern].length = 0;
  myGamePiece.stageframe = 0;
  if (myGamePiece.stage != enemyPatterns[myGamePiece.boss].length - 1) {
    myGamePiece.stage += 1;
  } else {
    myGamePiece.stage = 0;
  }
}

var myGamePiece;
var myObstacles = [];

var enemyPatterns = [];
var myEnemies = [];

//creating enemy object
function enemy(name, hp, color) {
  this.name = name;
  this.base = hp;
  this.hp = hp;
  this.color = color;
}

enemyPatterns[0] = [];

/*
	TEST ENEMY
	enemyPatterns[0][0]=7;
	enemyPatterns[0][0]=4;
	enemyPatterns[0][2]=5;
	enemyPatterns[0][3]=6;
	enemyPatterns[0][4]=7;
	enemyPatterns[0][5]=8;
	myEnemies[0] = new enemy("TEST ENEMY",3,"pink");*/

enemyPatterns[0][0] = 2;
enemyPatterns[0][1] = 2;
enemyPatterns[0][2] = 2;
enemyPatterns[0][3] = 2;
enemyPatterns[0][4] = 2;
enemyPatterns[0][5] = 3;
enemyPatterns[0][6] = 3;
myEnemies[0] = new enemy("ENEMY 0", 3, "white");

enemyPatterns[1] = [];
enemyPatterns[1][0] = 3;
enemyPatterns[1][1] = 3;
enemyPatterns[1][2] = 3;
enemyPatterns[1][3] = 4;
enemyPatterns[1][4] = 4;
enemyPatterns[1][5] = 4;
enemyPatterns[1][6] = 5;
myEnemies[1] = new enemy("ENEMY 1", 5, "green");

enemyPatterns[2] = [];
enemyPatterns[2][0] = 5;
enemyPatterns[2][1] = 5;
enemyPatterns[2][2] = 6;
enemyPatterns[2][3] = 4;
enemyPatterns[2][4] = 6;
enemyPatterns[2][5] = 4;
enemyPatterns[2][6] = 7;
myEnemies[2] = new enemy("ENEMY 2", 7, "magenta");

enemyPatterns[3] = [];
enemyPatterns[3][0] = 6;
enemyPatterns[3][1] = 5;
enemyPatterns[3][2] = 6;
enemyPatterns[3][3] = 7;
enemyPatterns[3][4] = 8;
enemyPatterns[3][5] = 9;
enemyPatterns[3][6] = 5;
myEnemies[3] = new enemy("ENEMY 3", 11, "yellow");

//each of the enemies attacks and what they do
myObstacles[0] = [];
myObstacles[1] = []; //border

myObstacles[2] = []; //shot
myObstacles[3] = []; //homing

myObstacles[4] = []; //variable-speed shot
myObstacles[5] = []; //variable-speed homing

myObstacles[6] = []; //orbiter

myObstacles[7] = []; //fan

myObstacles[8] = []; //sine path
myObstacles[9] = []; //cosine path

//creating sin path
var sinpathy = [];
var sinpathx = [];
for (cnt = 0; cnt < 400; cnt++) {
  x = cnt;
  x = x / 200;
  x = x - 1;
  x2 = 10000 / x;
  x2 = Math.sin(x2);
  if (x != 0) sinpathy[cnt] = (x2 * x + 1) * 300;
  else sinpathy[cnt] = 300;
  sinpathx[cnt] = (x + 1) * 250;
  sinpathy[cnt] = sinpathy[cnt] + 100;
}

//creating cos path
var cospathy = [];
var cospathx = [];
for (cnt = 0; cnt < 350; cnt++) {
  x = cnt;
  x = x / 500;
  x = x - 1;
  x2 = 10 / x;
  x2 = Math.cos(x2);
  if (x != 0) {
    cospathy[cnt] = x2 / 2 + 1;
    if (cospathy[cnt] > 2 || cospathy[cnt] < 0) {
      cospathy[cnt] = Math.abs(cospathy[cnt]);
      cospathy[cnt] = cospathy[cnt] % 2;
    }
    cospathy[cnt] = cospathy[cnt] * 300;
  } else cospathy[cnt] = 300;
  cospathx[cnt] = (x + 1) * 250;
  cospathy[cnt] = cospathy[cnt] + 100;
}
for (cnt = 350; cnt < 950; cnt++) {
  var xpath = cnt - 350;
  xpath = xpath / 2;

  x = (350 + xpath) / 500;
  //x=x/1000;
  x = x - 1;
  x2 = 1 / x;
  x2 = Math.cos(x2);
  if (x != 0) {
    cospathy[cnt] = x2 / x + 1;
    if (cospathy[cnt] > 2 || cospathy[cnt] < 0) {
      cospathy[cnt] = Math.abs(cospathy[cnt]);
      cospathy[cnt] = cospathy[cnt] % 2;
    }
    cospathy[cnt] = cospathy[cnt] * 300;
  } else cospathy[cnt] = 300;

  cospathx[cnt] = ((350 + xpath) / 500) * 250;
  cospathy[cnt] = cospathy[cnt] + 100;
}
for (cnt = 950; cnt < 1300; cnt++) {
  x = cnt - 300;
  x = x / 500;
  x = x - 1;
  x2 = 10 / x;
  x2 = Math.cos(x2);
  if (x != 0) {
    cospathy[cnt] = x2 / 2 + 1;
    if (cospathy[cnt] > 2 || cospathy[cnt] < 0) {
      cospathy[cnt] = Math.abs(cospathy[cnt]);
      cospathy[cnt] = cospathy[cnt] % 2;
    }
    cospathy[cnt] = cospathy[cnt] * 300;
  } else cospathy[cnt] = 300;
  cospathx[cnt] = (x + 1) * 250;
  cospathy[cnt] = cospathy[cnt] + 100;
}

orpathx = [];
orpathy = [];

for (cnt = 0; cnt < 200; cnt++) {
  orpathx[cnt] = 40 * Math.cos((6.283 / 50) * cnt);
  orpathy[cnt] = 40 * Math.sin((6.283 / 50) * cnt);
}
for (cnt = 200; cnt < 240; cnt++) {
  orpathx[cnt] = (240 - cnt) * Math.cos((6.283 / 50) * cnt);
  orpathy[cnt] = (240 - cnt) * Math.sin((6.283 / 50) * cnt);
}

borpathx = [];
borpathy = [];

for (cnt = 0; cnt < 300; cnt++) {
  borpathx[cnt] = 200 * Math.cos((6.283 / 300) * cnt);
  borpathy[cnt] = 200 * Math.sin((6.283 / 300) * cnt);
}

//STARTING GAME

function startGame() {
  //creates player character object and sets attributes
  myGamePiece = new component(25, 25, "blue", 250, 400);
  myGamePiece.boss = 0;
  myGamePiece.attack = 0;
  myGamePiece.stage = -1;
  myGamePiece.stageframe = 0;

  //creates first enemy character object and sets attributes
  enemyFighter = new component(25, 25, "white", 250, 200);
  var setx;
  var sety;
  for (cnt = 0; cnt < 300; cnt++) {
    setx = borpathx[cnt] + (myGamePiece.x + myGamePiece.width / 2);
    sety = borpathy[cnt] + (myGamePiece.y + myGamePiece.height / 2);
    myObstacles[1][cnt] = new component(1, 1, "white", setx, sety);
  }
}

//title screen
var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 20);
    this.paused = 0;

    //starts game when button is pressed
    this.canvas.width = 500;
    this.canvas.height = 700;
    this.canvas.addEventListener("click", function (event) {
      clickPos();
    });
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);

    //game title
    this.context.font = "30px Arial";
    this.context.fillStyle = "red";
    this.context.textAlign = "center";
    this.context.fillText("Forble", 250, 400);

    //start button
    this.context.fillStyle = "green";
    this.context.fillRect(200, 450, 100, 50);

    //text on start button
    this.context.font = "20px Arial";
    this.context.fillStyle = "black";
    this.context.textAlign = "center";
    this.context.fillText("START", 250, 480);

    //top bar
    this.context.fillStyle = "#222222";
    this.context.fillRect(0, 0, 500, 100);

    //text on top bar
    this.context.font = "12px Arial";
			this.context.fillStyle = "white";
			this.context.textAlign = "center";
			this.context.fillText("(hit CTRL to pause/unpause)", 250, 20);
  },

  //restart's game upon players death
  restart: function () {
    // boss is kept the same
    var boss = myGamePiece.boss;
    myEnemies[myGamePiece.boss].hp = myEnemies[myGamePiece.boss].base;

    myGamePiece = new component(25, 25, "blue", 250, 400);
    myGamePiece.boss = boss;
    myGamePiece.attack = 0;
    myGamePiece.stage = -1;
    myGamePiece.stageframe = 0;
    myObstacles[0].length = 0;
    myObstacles[1].length = 0;
    myObstacles[2].length = 0;
    myObstacles[3].length = 0;
    myObstacles[4].length = 0;
    myObstacles[5].length = 0;
    myObstacles[6].length = 0;
    myObstacles[7].length = 0;
    myObstacles[8].length = 0;
    myObstacles[9].length = 0;
    for (cnt = 0; cnt < 300; cnt++) {
      setx = borpathx[cnt] + (myGamePiece.x + myGamePiece.width / 2);
      sety = borpathy[cnt] + (myGamePiece.y + myGamePiece.height / 2);
      myObstacles[1][cnt] = new component(1, 1, "white", setx, sety);

      myObstacles[1][cnt].update();
    }
    this.frameNo = 0;
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = "#222222";
    this.context.fillRect(0, 0, 500, 100);

    if (myGameArea.stage == 1) {
      this.context.font = "20px Arial";
      this.context.fillStyle = enemyFighter.color;
      this.context.textAlign = "left";

      var text = "  ";
      text += myEnemies[myGamePiece.boss].hp;
      text += "/";
      text += myEnemies[myGamePiece.boss].base;
      this.context.fillText(text, 0, 50);

      this.context.font = "20px Arial";
      this.context.fillStyle = enemyFighter.color;
      this.context.textAlign = "right";
      text = myEnemies[myGamePiece.boss].name;
      text += "  ";
      this.context.fillText(text, 500, 50);
    }

    this.context.font = "12px Arial";
    this.context.fillStyle = "white";
    this.context.textAlign = "center";
    this.context.fillText("(hit CTRL to pause/unpause)", 250, 20);
  }
};
myGameArea.stage = 0;

//function to create sprites
function component(width, height, color, x, y, type) {
  this.type = type;
  this.color = color;
  this.score = 0;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x - width / 2;
  this.y = y - height / 2;
  this.update = function () {
    ctx = myGameArea.context;
    if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = this.color;
      ctx.fillText(this.text, this.x, this.y);
    } else {
      if (this.type == "shot") {
        var gradient = ctx.createLinearGradient(0, 0, this.width, this.height);
        gradient.addColorStop("0", "green");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "yellow");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
      } else {
        if (color != "none") {
          ctx.fillStyle = this.color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
        }
      }
    }
  };
  //allows for movement
  this.newPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
    this.hitEdge();
  };
  //sets hit box
  this.hitEdge = function () {
    var rockbottom = myGameArea.canvas.height - this.height;
    if (this.y > rockbottom) {
      this.y = rockbottom;
    }
    if (this.y < 100) {
      this.y = 100;
    }
    var rockside = myGameArea.canvas.width - this.width;
    if (this.x > rockside) {
      this.x = rockside;
    }
    if (this.x < 0) {
      this.x = 0;
    }
  };
  this.crashWith = function (otherobj) {
    var myleft = this.x;
    var myright = this.x + this.width;
    var mytop = this.y;
    var mybottom = this.y + this.height;
    var otherleft = otherobj.x;
    var otherright = otherobj.x + otherobj.width;
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + otherobj.height;
    var crash = true;
    if (
      mybottom < othertop ||
      mytop > otherbottom ||
      myright < otherleft ||
      myleft > otherright
    ) {
      crash = false;
    }
    return crash;
  };
}

function clickPos() {
  var rect = myGameArea.canvas.getBoundingClientRect();
  var x = window.event.clientX - rect.left;
  var y = window.event.clientY - rect.top;

  switch (myGameArea.stage) {
    case 0:
      if (x >= 200 && x <= 300 && y >= 450 && y <= 500) {
        myGameArea.stage = 1;
        startGame();
      }
      break;
    case 1:
      if (
        Math.pow(Math.abs(x - myGamePiece.x), 2) +
          Math.pow(Math.abs(y - myGamePiece.y), 2) <
          40000 &&
        myGameArea.paused == 0
      ) {
        myGamePiece.x = x - myGamePiece.width / 2;
        myGamePiece.y = y - myGamePiece.height / 2;
        myGamePiece.hitEdge();
      }
      break;
  }
}

function updateGameArea() {
  if (myGameArea.stage == 1) {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;

    myGameArea.clear();

    myGamePiece.newPos();
    myGamePiece.update();

    for (i = 2; i < myObstacles.length; i += 1) {
      for (j = 0; j < myObstacles[i].length; j += 1) {
        if (myGamePiece.crashWith(myObstacles[i][j])) {
          myGameArea.clear();
          myGameArea.restart();
        }
      }
    }

    if (typeof myObstacles[0][0] != "undefined") {
      if (myGamePiece.attack == 0) {
        myObstacles[0][0].update();

        if (myGamePiece.crashWith(myObstacles[0][0])) {
          myGamePiece.attack = 1;

          myObstacles[0].length = 0;

          myObstacles[0][0] = new component(
            10,
            10,
            "white",
            myGamePiece.x + myGamePiece.width / 2,
            myGamePiece.y + myGamePiece.height / 2,
            "shot"
          );
          myObstacles[0][0].hostx =
            250 - (myGamePiece.x + myGamePiece.width / 2);
          myObstacles[0][0].hosty =
            200 - (myGamePiece.y + myGamePiece.height / 2);

          var speed =
            (Math.abs(myObstacles[0][0].hosty) +
              Math.abs(myObstacles[0][0].hostx)) /
            300;

          myObstacles[0][0].hostx = myObstacles[0][0].hostx / (speed * 100);
          myObstacles[0][0].hosty = myObstacles[0][0].hosty / (speed * 100);

          myObstacles[0][0].update();
        } else {
          if (((myGameArea.frameNo - 100) / 500) % 1 == 0) {
            myObstacles[0].length = 0;
          }
        }
      } else {
        if (enemyFighter.crashWith(myObstacles[0][0])) {
          myGamePiece.attack = 0;
          myObstacles[0].length = 0;
          myEnemies[myGamePiece.boss].hp = myEnemies[myGamePiece.boss].hp - 1;
          if (myEnemies[myGamePiece.boss].hp == 0) {
            myObstacles[
              enemyPatterns[myGamePiece.boss][myGamePiece.stage]
            ].length = 0;
            myGamePiece.stageframe = 0;
            myGamePiece.stage = -1;
            myEnemies[myGamePiece.boss].hp = myEnemies[myGamePiece.boss].base;
            if (myGamePiece.boss == myEnemies.length - 1) {
              alert("You've beaten all established bosses.");
              myGamePiece.boss = -1;
            } else {
              myGamePiece.boss += 1;
            }
            enemyFighter.color = myEnemies[myGamePiece.boss].color;
            enemyFighter.update();
          }
        }
      }
    } else {
      if (myGameArea.frameNo != 0 && (myGameArea.frameNo / 500) % 1 == 0) {
        var wepx = Math.floor(Math.random() * 500);
        var wepy = Math.floor(Math.random() * 600);
        wepy = wepy + 100;
        myObstacles[0][0] = new component(20, 20, "white", wepx, wepy, "shot");
        myObstacles[0][0].update();
      }
    }

    var setx;
    var sety;

    for (cnt = 0; cnt < 300; cnt++) {
      setx = borpathx[cnt] + (myGamePiece.x + myGamePiece.width / 2);
      sety = borpathy[cnt] + (myGamePiece.y + myGamePiece.height / 2);
      myObstacles[1][cnt] = new component(2, 2, "white", setx, sety);

      myObstacles[1][cnt].update();
    }

    myGameArea.frameNo += 1;
    myGamePiece.stageframe += 1;

    if (myGamePiece.stage == -1) {
      if (myGamePiece.stageframe == 50) {
        patternEnd(2);
      }
    }

    if (myGamePiece.attack == 1) {
      myObstacles[0][0].x = myObstacles[0][0].x + myObstacles[0][0].hostx * 2;
      myObstacles[0][0].y = myObstacles[0][0].y + myObstacles[0][0].hosty * 2;

      myObstacles[0][0].update();
    }

    //shot type 2
    if (enemyPatterns[myGamePiece.boss][myGamePiece.stage] == 2) {
      if (myGamePiece.stageframe == 1) {
        myObstacles[2].length = 0;
        myObstacles[2][0] = new component(10, 10, "blue", 250, 200);
        myObstacles[2][0].hostx = myGamePiece.x + myGamePiece.width / 2 - 250;
        myObstacles[2][0].hosty = myGamePiece.y + myGamePiece.height / 2 - 200;

        var speed =
          (Math.abs(myObstacles[2][0].hosty) +
            Math.abs(myObstacles[2][0].hostx)) /
          200;

        myObstacles[2][0].hostx = myObstacles[2][0].hostx / (speed * 100);
        myObstacles[2][0].hosty = myObstacles[2][0].hosty / (speed * 100);
      }

      myObstacles[2][0].x = myObstacles[2][0].x + myObstacles[2][0].hostx * 2;
      myObstacles[2][0].y = myObstacles[2][0].y + myObstacles[2][0].hosty * 2;

      myObstacles[2][0].update();

      if (myGamePiece.stageframe == 75) {
        patternEnd(2);
      }
    }

    //shot type 3
    if (enemyPatterns[myGamePiece.boss][myGamePiece.stage] == 3) {
      if (myGamePiece.stageframe == 1) {
        myObstacles[3].length = 0;
        myObstacles[3][0] = new component(10, 10, "green", 250, 200);
      }

      if (myGamePiece.stageframe < 100) {
        var hostx =
          myGamePiece.x +
          myGamePiece.width / 2 -
          (myObstacles[3][0].x + myObstacles[3][0].width / 2);
        var hosty =
          myGamePiece.y +
          myGamePiece.height / 2 -
          (myObstacles[3][0].y + myObstacles[3][0].height / 2);
        var speed = (Math.abs(hosty) + Math.abs(hostx)) / 150;

        hostx = hostx / (speed * 100);
        hosty = hosty / (speed * 100);

        myObstacles[3][0].x = myObstacles[3][0].x + hostx * 2;
        myObstacles[3][0].y = myObstacles[3][0].y + hosty * 2;
        myObstacles[3][0].update();
      }
      if (myGamePiece.stageframe == 100) {
        myObstacles[3][0].lastx = myObstacles[3][0].x;
        myObstacles[3][0].lasty = myObstacles[3][0].y;

        myObstacles[3][0].x = -20;
        myObstacles[3][0].y = -20;

        for (cnt = 1; cnt < 9; cnt++) {
          myObstacles[3][cnt] = new component(
            5,
            5,
            "green",
            myObstacles[3][0].lastx,
            myObstacles[3][0].lasty
          );
          myObstacles[3][cnt].update();
        }
      }
      if (myGamePiece.stageframe > 100) {
        for (cnt = 1; cnt < 9; cnt++) {
          myObstacles[3][cnt].x =
            myObstacles[3][0].lastx +
            (myGamePiece.stageframe - 101) * Math.cos((6.283 / 8) * (cnt - 1));
          myObstacles[3][cnt].y =
            myObstacles[3][0].lasty +
            (myGamePiece.stageframe - 101) * Math.sin((6.283 / 8) * (cnt - 1));
          myObstacles[3][cnt].update();
        }
      }
      if (myGamePiece.stageframe == 121) {
        patternEnd(3);
      }
    }

    //shot type 4
    if (enemyPatterns[myGamePiece.boss][myGamePiece.stage] == 4) {
      if (myGamePiece.stageframe == 1) {
        myObstacles[4].length = 0;
        myObstacles[4][0] = new component(10, 10, "red", 250, 200);
        myObstacles[4][0].hostx = myGamePiece.x + myGamePiece.width / 2 - 250;
        myObstacles[4][0].hosty = myGamePiece.y + myGamePiece.height / 2 - 200;

        var div = Math.sqrt(
          Math.pow(Math.abs(myObstacles[4][0].hostx), 2) +
            Math.pow(Math.abs(myObstacles[4][0].hosty), 2)
        );
        var speed =
          (Math.abs(myObstacles[4][0].hosty) +
            Math.abs(myObstacles[4][0].hostx)) /
          div;

        myObstacles[4][0].hostx = myObstacles[4][0].hostx / (speed * 100);
        myObstacles[4][0].hosty = myObstacles[4][0].hosty / (speed * 100);
      }

      myObstacles[4][0].x = myObstacles[4][0].x + myObstacles[4][0].hostx * 2;
      myObstacles[4][0].y = myObstacles[4][0].y + myObstacles[4][0].hosty * 2;

      myObstacles[4][0].update();

      if (myGamePiece.stageframe == 75) {
        patternEnd(4);
      }
    }

    if (enemyPatterns[myGamePiece.boss][myGamePiece.stage] == 5) {
      if (myGamePiece.stageframe == 1) {
        myObstacles[5].length = 0;
        myObstacles[5][0] = new component(10, 10, "orange", 250, 200);
        myObstacles[5][0].div = Math.sqrt(
          Math.pow(
            Math.abs(
              myGamePiece.x +
                myGamePiece.width / 2 -
                (myObstacles[5][0].x + myObstacles[5][0].width / 2)
            ),
            2
          ) +
            Math.pow(
              Math.abs(
                myGamePiece.y +
                  myGamePiece.height / 2 -
                  (myObstacles[5][0].y + myObstacles[5][0].height / 2)
              ),
              2
            )
        );
        myObstacles[5][0].update();
      }

      if (myGamePiece.stageframe < 100) {
        var hostx =
          myGamePiece.x +
          myGamePiece.width / 2 -
          (myObstacles[5][0].x + myObstacles[5][0].width / 2);
        var hosty =
          myGamePiece.y +
          myGamePiece.height / 2 -
          (myObstacles[5][0].y + myObstacles[5][0].height / 2);

        var speed = (Math.abs(hosty) + Math.abs(hostx)) / myObstacles[5][0].div;

        hostx = hostx / (speed * 100);
        hosty = hosty / (speed * 100);

        myObstacles[5][0].x = myObstacles[5][0].x + hostx * 2;
        myObstacles[5][0].y = myObstacles[5][0].y + hosty * 2;
        myObstacles[5][0].update();
      }
      if (myGamePiece.stageframe == 100) {
        myObstacles[5][0].lastx = myObstacles[5][0].x;
        myObstacles[5][0].lasty = myObstacles[5][0].y;

        myObstacles[5][0].x = -20;
        myObstacles[5][0].y = -20;

        for (cnt = 1; cnt < 9; cnt++) {
          myObstacles[5][cnt] = new component(
            5,
            5,
            "orange",
            myObstacles[5][0].lastx,
            myObstacles[5][0].lasty
          );
          myObstacles[5][cnt].update();
        }
      }
      if (myGamePiece.stageframe > 100) {
        for (cnt = 1; cnt < 9; cnt++) {
          myObstacles[5][cnt].x =
            myObstacles[5][0].lastx +
            (myGamePiece.stageframe - 101) * Math.cos((6.283 / 8) * (cnt - 1));
          myObstacles[5][cnt].y =
            myObstacles[5][0].lasty +
            (myGamePiece.stageframe - 101) * Math.sin((6.283 / 8) * (cnt - 1));
          myObstacles[5][cnt].update();
        }
      }
      if (myGamePiece.stageframe == 121) {
        patternEnd(5);
      }
    }

    if (enemyPatterns[myGamePiece.boss][myGamePiece.stage] == 6) {
      if (myGamePiece.stageframe == 1) {
        myObstacles[6].length = 0;
        orbitx = orpathx[0] + (myGamePiece.x + myGamePiece.width / 2);
        orbity = orpathy[0] + (myGamePiece.y + myGamePiece.height / 2);
        myObstacles[6][0] = new component(10, 10, "blue", orbitx, orbity);
        myObstacles[6][0].hostx = myGamePiece.x + myGamePiece.width / 2;
        myObstacles[6][0].hosty = myGamePiece.y + myGamePiece.height / 2;
      }

      myObstacles[6][0].x =
        orpathx[myGamePiece.stageframe % orpathx.length] +
        myObstacles[6][0].hostx -
        myObstacles[6][0].width / 2;
      myObstacles[6][0].y =
        orpathy[myGamePiece.stageframe % orpathy.length] +
        myObstacles[6][0].hosty -
        myObstacles[6][0].height / 2;
      myObstacles[6][0].update();

      if (myGamePiece.stageframe == 239) {
        patternEnd(6);
      }
    }

    if (enemyPatterns[myGamePiece.boss][myGamePiece.stage] == 7) {
      if (myGamePiece.stageframe == 1) {
        var placex;
        var placey;

        var colors = [
          "#ff0000",
          "#ff8000",
          "#ffff00",
          "#00ff00",
          "#0000ff",
          "#8000ff",
          "#ff00ff"
        ];

        myObstacles[7].length = 0;

        for (cnt = 0; cnt < 7; cnt++) {
          myObstacles[7][cnt] = new component(10, 10, colors[cnt], 250, 200);

          placex = 50 * Math.cos((6.283 / 16) * (cnt + 1));
          placey = 50 * Math.sin((6.283 / 16) * (cnt + 1));

          myObstacles[7][cnt].hostx = placex;
          myObstacles[7][cnt].hosty = placey;

          var speed =
            (Math.abs(myObstacles[7][cnt].hosty) +
              Math.abs(myObstacles[7][cnt].hostx)) /
            250;

          myObstacles[7][cnt].hostx = myObstacles[7][cnt].hostx / (speed * 100);
          myObstacles[7][cnt].hosty = myObstacles[7][cnt].hosty / (speed * 100);
        }
      }

      for (cnt = 0; cnt < 7; cnt++) {
        myObstacles[7][cnt].x =
          myObstacles[7][cnt].x + myObstacles[7][cnt].hostx * 2;
        myObstacles[7][cnt].y =
          myObstacles[7][cnt].y + myObstacles[7][cnt].hosty * 2;
        myObstacles[7][cnt].update();
      }

      if (myGamePiece.stageframe == 100) {
        patternEnd(7);
      }
    }

    if (enemyPatterns[myGamePiece.boss][myGamePiece.stage] == 8) {
      if (myObstacles[8].length < 300) {
        myObstacles[8].push(
          new component(10, 10, "#00ffff", sinpathx[0], sinpathy[0])
        );
      }

      if (myObstacles[8].length != 1) {
        for (i = 0; i < myObstacles[8].length - 1; i += 1) {
          myObstacles[8][i].x =
            sinpathx[(myGamePiece.stageframe - (i + 1)) % sinpathx.length];
          myObstacles[8][i].y =
            sinpathy[(myGamePiece.stageframe - (i + 1)) % sinpathy.length];
          myObstacles[8][i].hitEdge();

          myObstacles[8][i].update();
        }
      }

      if (myGamePiece.stageframe == 900) {
        patternEnd(8);
      }
    }

    if (enemyPatterns[myGamePiece.boss][myGamePiece.stage] == 9) {
      if (myObstacles[9].length < 800) {
        myObstacles[9].push(
          new component(10, 10, "magenta", cospathx[0], cospathy[0])
        );
      }

      for (i = 0; i < myObstacles[9].length - 1; i += 1) {
        myObstacles[9][i].x =
          cospathx[(myGamePiece.stageframe - (i + 1)) % cospathx.length];
        myObstacles[9][i].y =
          cospathy[(myGamePiece.stageframe - (i + 1)) % cospathy.length];
        myObstacles[9][i].update();
      }

      if (myGamePiece.stageframe == 1600) {
        patternEnd(9);
      }
    }
    enemyFighter.update();
  }
}

function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {
    return true;
  }
  return false;
}
