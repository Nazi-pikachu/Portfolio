// console.log("Hello");
// document.getElementById();
$(document).ready(function () {
  console.log("HI");
});
// canvas declearation
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var mouse = {
  x: undefined,
  y: undefined,
};
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var color = [
  "rgba(255, 255, 255, 0.1)",
  "rgba(255, 255, 255, 0.2)",
  "rgba(255, 255, 255, 0.3)",
  "rgba(255, 255, 255, 0.4)",
  "rgba(255, 255, 255, 0.5)",
];

//lets add some interactivity to our animation
window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  // console.log(mouse.x, mouse.y);
});
/*window.addEventListener('touchmove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;

    }
)*/

//document.getElementById('navbar').style.columnWidth = innerWidth;
window.addEventListener("resize", function (event) {
  canvas.width = this.innerWidth;
  canvas.height = this.innerHeight;
  fillExtra();
});

class circle {
  constructor(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
    this.MinRadius = 9;
    this.MaxRadius = 5;
    this.color = color[Math.floor(Math.random() * 5)];
    this.opacity = 0.01;
    // this.color = "rgba(255, 255, 255, 0.3)";
  }

  //this will draw a circle on canvas
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false); // c.bezierCurveTo(innerWidth / 2, innerHeight / 2, this.x, this.y, 10, 10);
    c.fillStyle = color[Math.floor(Math.random() * 5)];
    c.fill();
    c.strokeStyle = this.color;
    c.stroke();
    // To include copyright in the canvas
  }
  //this will refresh and update the canvas
  update() {
    //c.clearRect(0, 0, canvas.width, canvas.height);
    //console.log(Math.sqrt(Math.pow((mouse.x - this.x), 2) + Math.pow((mouse.y - this.y), 2)));
    // Math.abs(mouse.x - this.x);

    if (this.x > canvas.width - this.r || this.x < this.r) {
      this.dx = -this.dx;
    }
    if (this.y > canvas.height - this.r || this.y < this.r) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    //this is to increase the size of the circle on hovering of the cursor
    /*  
    if (
     mouse.x - this.x < 150 &&
     mouse.x - this.x > -150 &&
     mouse.y - this.y < 150 &&
     mouse.y - this.y > -150
     ) {
     if (this.r < this.MaxRadius) this.r += 1;
     } else if (this.r > this.MinRadius) this.r--;
     */

    this.draw();
  }
}

//Creates an array of objects
var objectArray = [];
for (var i = 0; i < 200; i++) {
  var r = 3;
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  var dx = Math.random() - 0.5;
  var dy = Math.random() - 0.5;
  objectArray.push(new circle(x, y, dx, dy, r));
}
//to fill extra space on resizing of the browser
fillExtra = () => {
  objectArray = [];
  for (var i = 0; i < 200; i++) {
    var r = 3;
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var dx = Math.random() - 0.5;
    var dy = Math.random() - 0.5;
    objectArray.push(new circle(x, y, dx, dy, r));
  }
};
// fillExtra();
//to create an animate loop
animate = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < objectArray.length; i++) {
    var DizzyCircle = objectArray[i];
    DizzyCircle.update();
  }
  requestAnimationFrame(animate);
};
animate();
console.log(canvas.width, canvas.height);
// To change the size of the contact image buttons
var img = document.getElementsByTagName("img");
if (canvas.width >= 425) {
  for (var i = 1; i < img.length; i++) {
    img[i].style.width = "50px";
  }
}
// Adding typing effect
var h = document.getElementById("typingEffect");
console.log(h);
var i = 0;
var txt = "Hi! I am Rishabh";
// console.log(txt.length);
var speed = 200;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typingEffect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
setTimeout(() => {
  document.getElementById("typingEffect").innerHTML += "&#128516";
}, txt.length * 200 + 200);
