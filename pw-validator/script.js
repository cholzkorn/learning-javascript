function validate(pass){
  var check = pass.toString();
  var check_length = check.length;

  // Defining regular expressions
  var numbers = RegExp("[0-9]");
  var special = RegExp("[^A-Za-z0-9]");

  // matching regular expressions
  console.log(numbers.test(check));

  var number_found = numbers.test(check);
  var special_found = special.test(check);



  // conditionals
  if (check_length < 5){
    document.getElementById('output').innerHTML = "Please enter a password with at least 5 characters.";
  }
  else if (check_length > 10){
    document.getElementById('output').innerHTML = "Please enter a password with less than 10 characters.";
  }
  else if (number_found == false){
    document.getElementById('output').innerHTML = "Your password must contain a number.";
  }
  else if (special_found == false){
    document.getElementById('output').innerHTML = "Your password must contain a special character.";
  }
  else{
    document.getElementById('output').innerHTML = "Your password was entered correctly.";
  }
}
