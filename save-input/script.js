let arr = {}
arr.fnamefinal = "NA"
arr.fnameunfinished = "NA"

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
