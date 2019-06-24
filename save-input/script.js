let arr = {}
arr.fnamefinal = "NA"
arr.fnameunfinished = "NA"
arr.fnameclosed = "NA"

function saveFirstNameUnfinished(){
  var fnameunfinished = document.getElementById('firstname').value
  console.log(fnameunfinished);
  arr.fnameunfinished = fnameunfinished;
};

function saveFirstName(){
  var fnamefinal = document.getElementById('firstname').value
  console.log(fnamefinal);
  arr.fnamefinal = fnamefinal;
  var arrJSON = JSON.stringify(arr);
  console.log(arr);
};

function saveFirstName_closed(){
  var fnameclosed = document.getElementById('firstname').value
  arr.fnameclosed = fnameclosed;
  var arrJSON = JSON.stringify(arr);
  console.log(arr);
  localStorage.setItem('arr.json', JSON.stringify(arr));
};
