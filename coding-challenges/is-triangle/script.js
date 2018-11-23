function is_triangle(a, b, c){
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
  if ((a + b) > c && (b + c) > a && (a + c) > b) {
    document.getElementById('output').innerHTML = "Yes, it will!";
  }
  else{
    document.getElementById('output').innerHTML = "No, it won't!";
  }
};

// https://www.kirupa.com/html5/drawing_triangles_on_the_canvas.htm
function draw_triangle(a, b, c){
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);

  // selecting canvas
  var canvasElement = document.getElementById('canvas');
  var context = canvasElement.getContext('2d');

  // the triangle
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(a, 100);
  context.lineTo(c, b);
  context.closePath();

  // the outline
  context.lineWidth = 10;
  context.strokeStyle = '#666666';
  context.stroke();

  // the fill color
  context.fillStyle = "#FFCC00";
  context.fill();
}

function js_function(){
   console.log("function was called");

   // selecting canvas
   var canvasElement = document.getElementById('canvas');
   var context = canvasElement.getContext('2d');

   context.font = '48px serif';
   context.fillText('Works for me', 1, 50);
}
