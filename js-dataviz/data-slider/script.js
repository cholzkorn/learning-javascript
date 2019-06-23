let data={};
data.one=30;
data.two=20;
data.three=70;
data.four=87;

function reset_third_plot(){
  // set chart scale to 0 globally
  Chart.scaleService.updateScaleDefaults('linear', {
      ticks: {
          min: 0
      }
  });
}

function update_one(){
  data.one = document.getElementById('slideone').value
  document.getElementById('outone').innerHTML = data.one;
}

function update_two(){
  data.two = document.getElementById('slidetwo').value
  document.getElementById('outtwo').innerHTML = data.two;
}

function update_three(){
  data.three = document.getElementById('slidethree').value
  document.getElementById('outthree').innerHTML = data.three;
}

function update_four(){
  data.four = document.getElementById('slidefour').value
  document.getElementById('outfour').innerHTML = data.four;
}

// Plot the chart
function thirdplot(){
  var ctxLine = document.getElementById("thirdplot").getContext("2d");
  if(window.bar != undefined)
  window.bar.destroy();
  window.bar =
  new Chart(document.getElementById("thirdplot"), { type: 'bar', data: { labels: ["variable A", "variable B", "variable C", "variable D"], datasets: [ { label: "value", backgroundColor: ["salmon", "khaki","lightblue","thistle"], data: [data.one,data.two,data.three,data.four] } ] }, options: { legend: { display: false }, title: { display: true, text: 'I am a bar chart' } } });
}
