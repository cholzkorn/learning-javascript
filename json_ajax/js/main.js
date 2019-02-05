// JSON is for handling objects and arrays (JavaScript Object Notation)

// AJAX is for loading JSON data from urls
// Asynchronous JavaScript and XML

var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn")

// Adding an event listener, so the function only gets loaded when
// the button is clicked
btn.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	// GET loads data, POST would upload data
	ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
	// onload defines what happens when the data is loaded
	// adblock must be disabled
	ourRequest.onload = function(){

		// error handling
		if (ourRequest.status >= 200 && ourRequest.status < 400) {
			var ourData = JSON.parse(ourRequest.responseText);
			renderHTML(ourData);			
		}

		else {
			console.log("We connected to the server, but it returned an error.");
		}
	};
	
	// error handling

	ourRequest.onerror = function(){
		console.log("Connection error");
	}

	ourRequest.send();
	// increment pageCounter
	pageCounter++;
	if (pageCounter > 3){
		btn.classList.add("hide-me");
	}
})

// function adds HTML to the div in the index.html
function renderHTML(data) {
	// create empty string
	var htmlString = "";

	// loop through array
	for (i = 0; i < data.length; i++){
		htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat "
		for (ii = 0; ii < data[i].foods.likes.length; ii++){
			if (ii == 0){
				htmlString += data[i].foods.likes[ii];
			}

			else {
				htmlString += " and " + data[i].foods.likes[ii];
			}
		}

		
		htmlString += " and dislikes ";

		for (ii = 0; ii < data[i].foods.likes.length; ii++){
			if (ii == 0){
				htmlString += data[i].foods.likes[ii];
			}

			else {
				htmlString += " and " + data[i].foods.likes[ii];
			}
		}


		htmlString += '.</p>'
	}

	animalContainer.insertAdjacentHTML('beforeend', htmlString)
}