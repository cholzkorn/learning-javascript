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
    // scaling the triangle

  var triangle = [a, b, c];
  var hypo = Math.max.apply(null, triangle);
  var scaler = 300 / hypo

  var triangle_s = triangle.map(function(x){return x * scaler;});

  // selecting canvas
  var canvasElement = document.getElementById('canvas');
  var context = canvasElement.getContext('2d');

  // clearing canvas
  context.clearRect(0, 0, canvasElement.width, canvasElement.height);

  if ((a + b) > c && (b + c) > a && (a + c) > b) {

    // the triangle
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(triangle_s[0], 100);
    context.lineTo(triangle_s[2], triangle_s[1]);
    context.closePath();

    // the outline
    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.stroke();

    // the fill color
    context.fillStyle = "#2FA4E7";
    context.fill();
  }
  else{
    console.log('not a triangle');
  }
}
