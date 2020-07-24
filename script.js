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
// var color = [
// "rgba(255, 255, 255, 0.9)",
// "rgba(255, 255, 255, 0.9)",
// "rgba(255, 255, 255, 0.9)",
// "rgba(255, 255, 255, 0.9)",
// "rgba(255, 255, 255, 0.9)",
// ];

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
    // this.color = color[Math.floor(Math.random() * 5)];
    this.color = "rgba(255, 255, 255, 0.9)";
  }

  //this will draw a circle on canvas
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false); // c.bezierCurveTo(innerWidth / 2, innerHeight / 2, this.x, this.y, 10, 10);
    c.fillStyle = "rgba(255,255,255,0.5)";
    c.fill();
    c.strokeStyle = this.color;
    c.stroke();
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
console.log(innerWidth, innerHeight);

// form here code of navbar starts
function openNav() {
  document.getElementById("navbar").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("navbar").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
}
