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
  }
