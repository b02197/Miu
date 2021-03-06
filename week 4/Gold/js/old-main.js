// write your javascript in here
//Michael Eaton
//Miu week 2
//1303
//js for game library


//Wait until the DOM is loaded
window.addEventListener("DOMContentLoaded", function(){
    
//getElementById function to get the ids
    function gi(x){
        var theElement = document.getElementById(x);
        return theElement;
    }
    
//Create select field element and populate with options for genre drop down
    function getDrop1(){
        var formtag = document.getElementsByTagName("body"),
        getLi = gi('genDown'),
        makeSelect = document.createElement('select');
        makeSelect.setAttribute("id", "gen");
        for(var i=0, j=genreList.length; i<j; i++){
            var makeOption = document.createElement('option');
            var optText = genreList[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        getLi.appendChild(makeSelect);
    }
    
//Create select field element and populate with options for the console drop down
    function getDrop2(){
        var fromtag = document.getElementsByTagName("body"),
        getLi = gi('conDown'),
        makeSelect = document.createElement('select');
        makeSelect.setAttribute("id", "con");
        for(var i=0, j=consoleList.length; i<j; i++){
        	var makeOption = document.createElement('option');
        	var optText = consoleList[i];
        	makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        getLi.appendChild(makeSelect);
    }

//Find value of selected radio button
	function getSelectedRadio(){
		var radio = document.forms[0].enjoy;
		for(var i=0; i<radio.length; i++){
			if(radio[i].checked){
				enjoyValue = radio[i].value;
			}
		}
	}
	
//find the value of the checkbox
	function getCheckboxValue(){
		if(gi('beat').checked){
			beatValue = gi('beat').value;
		}else{
			beatValue = "No";
		}
	}

//Toggle the links	
	function togcont(n){
		switch(n){
			case "on":
				gi('gameLib').style.display = "none";
				gi('clear').style.display = "inline";
				gi('displayData').style.display = "none";
				gi('addContent').style.display = "inline";
				break;
			case "off":
				gi('gameLib').style.display = "block";
				gi('clear').style.display = "inline";
				gi('displayData').style.display = "inline";
				gi('addContent').style.display = "none";
				gi('items').style.display = "none";
				break;
			default:
				return false;
		}
	}
//SaveData function
	function saveData(key){
//if there is no key, this will make a new key
		if(!key){
		var id = Math.floor(Math.random()*9999999);
		}else{
//set the id to the existing key that will save over the data
			id = key;
		}
		getSelectedRadio();
		getCheckboxValue();
// Gather up all our form field values and store in a object
//Object properties contain array with the form label and input value
	var item = {};
	item.gen = ["Genre:", gi('gen').value];
	item.gName = ["Game Name:", gi('gName').value];
	item.con = ["Console:", gi('con').value];
	item.enjoy =["Enjoy Game:", enjoyValue];
	item.beat = ["Beaten Game:", beatValue];
	item.date = ["Date Beaten:", gi('date').value];
	item.rate = ["Rate Game:", gi('rate').value];
	item.notes = ["Extra Notes:", gi('notes').value];
//Save data into local storage. Use stringify to convert our object to string.
	localStorage.setItem(id, JSON.stringify(item));
	alert("Game is Saved!");
//reloads page so you don't get multiple entries after editing.
	window.location.reload();
	
	}
	
	
//put data into the HTML file
	function getData(){
	togcont("on");
	if(localStorage.length === 0){
		alert("There are no games to display. Populating local storage with default content.");
		defaultData();
	}
//Write data from local storage to browser
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeUl = document.createElement('ul');
		makeDiv.appendChild(makeUl);
		document.body.appendChild(makeDiv);
		gi('items').style.display = "block";
		for(var i=0, j=localStorage.length; i<j; i++){
			var makeLi = document.createElement('li');
			var linkLi = document.createElement('li');
			makeUl.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
//convert string for local storage value back to an object using JSON.parse()
			var object = JSON.parse(value);
			var makeSubUl = document.createElement('ul');
			makeLi.appendChild(makeSubUl);
//add image to local storage data
			getImage(object.con[1], makeSubUl);
			for(var x in object){
				var makeSubLi = document.createElement('li');
				makeSubUl.appendChild(makeSubLi);
				var optSubText = object[x][0]+" "+ object[x][1];
				makeSubLi.innerHTML = optSubText;
				makeSubUl.appendChild(linkLi);
			}
			makeItemLink(localStorage.key(i), linkLi); //creat the edit and delete buttons/link for each item in local storage
		}
	
	}

//Image function for the console been displayed
	function getImage(gameImg, makeSubUl){
		var imgLi = document.createElement('li');
		makeSubUl.appendChild(imgLi);
		var img = document.createElement('img');
		var setSrc = img.setAttribute("src", "images/"+ gameImg +".png");
		imgLi.appendChild(img);
		
	}

//Auto fill data function
   function defaultData(){
      for(var x in gameData){
         var id = Math.floor(Math.random()*9999999);
         localStorage.setItem(id, JSON.stringify(gameData[x]));
      }
   }
   
//make item link functio to create and delete links for each stored iotem when displayed
	function makeItemLink(key, linkLi){
//add edit single item link
		var editlink = document.createElement('a');
		editlink.href = "#";
		editlink.key = key;
		var editText = "Edit Game";
		editlink.addEventListener("click", editItem);
		editlink.innerHTML = editText;
		linkLi.appendChild(editlink);
		
//add line break
		var breakTag = document.createElement('br');
		linkLi.appendChild(breakTag);
		
//add delete single item link
		var delLink = document.createElement('a');
		delLink.href = "#";
		delLink.key = key;
		var delText = "Delete Game";
		delLink.addEventListener("click", delItem);
		delLink.innerHTML = delText;
		linkLi.appendChild(delLink)
	}
	
//
	function editItem(){
//grab the data from the item from local storage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);

//show the form		
		togcont("off");
		
//populate the form field with current localStorage value
		gi('gen').value = item.gen[1];
		gi('gName').value = item.gName[1];	
		gi('con').value = item.con[1];
		var radio = document.forms[0].enjoy;
		for(var i=0; i<radio.length; i++){
			if(radio[i].value === "Yes" && item.enjoy[1] === "Yes"){
				radio[i].setAttribute("checked", "checked");
			}else if(radio[i].value === "No" && item.enjoy[1] ==="No"){
				radio[i].setAttribute("checked", "checked");
			}
		}
		if(item.beat[1] == "Yes"){
			gi('beat').setAttribute("checked", "checked");
		}
		gi('date').value = item.date[1];
		gi('rate').value = item.rate[1];
		gi('notes').value = item.notes[1];
		
//remove the initial linstener from the input "save game' button
		save.removeEventListener("click", saveData);
//change submit button to edit button
		gi('submit').value = "Edit Game";
		var editSubmit = gi('submit');
//save the key value in this function as a property of the editSubmit event
//so we can use that value when we save the data we edited
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key	
	}
	
//delete single item
	function delItem(){
		var ask = confirm("Are you sure you want to delete this game?");
		if(ask){
			localStorage.removeItem(this.key)
			alert("Game was deleted.");
			window.location.reload();
		}else{
			alert("The game was not delete.");			
		}
	}
	

//Clear data from confirm and delete local storage
function clearData(){
	var ask = confirm("Are you sure you want to delete local storage?");
	if(ask){
		localStorage.clear();
		alert("Local Storage has been deleted.");
		window.location.reload();
	}else{
		alert("Local Storage was not deleted.")
	}
}
//validate function
	function validate(e){
//define the element to be checked
		var getGen = gi('gen');
		var getGname = gi('gName');
		var getCon = gi('con');
		
//reset error messages
		errMsg.innerHTML = "";
		getGen.style.border = "1px solid black";
		getGname.style.border = "1px solid black";
		getCon.style.border = "1px solid black";
// get error messages
		var mesAry = [];
		
//genre validation
		if(getGen.value === "--Choose a Genre--"){
			var genErr = "Please choose a Genre.";
			getGen.style.border = "1px solid red";
			mesAry.push(genErr);
		}
		
//Game name validation
		if(getGname.value === ""){
			var gNameErr = "Please enter a Game Name.";
			getGname.style.border = "1px solid red";
			mesAry.push(gNameErr);
		}
		
//Console validate
		if(getCon.value === "--Choose a Console--"){;
			var conErr = "Please choose a Console.";
			getCon.style.border = "1px solid red";
			mesAry.push(conErr);
	}
	
//if there is an error display on the screen
		if(mesAry.length >=1){
			for(var i=0, j=mesAry.length; i<j; i++){
				var text = document.createElement('li');
				text.innerHTML = mesAry[i];
				errMsg.appendChild(text);
			}
			e.preventDefault();
			return false;
		}else{
//if no errors save the data. send the key value form the editData function
//this key value was passed through the editSubmit event listener as a property
			saveData(this.key);
			
		}
}
//Variable defaults
	var genreList = ["--Choose a Genre--", "Action", "Adventure", "RPG", "Shooter","Platformer", "Racing"],
		consoleList = ["--Choose a Console--", "PS3", "Xbox360", "Wii", "PSV", "PC", "3DS"],
	enjoyValue,
	beatValue = "No",
	errMsg = gi('error');
	getDrop1();
	getDrop2();
	
//Set link & submit click event
	var displayData = gi('displayData');
	displayData.addEventListener("click", getData);
	var clearLink = gi('clear');
	clearLink.addEventListener("click", clearData);
	var save = gi('submit');
	save.addEventListener("click", validate); 
	
	
	/*var search = gi('search');
		search.addEventListener("submit", getSearch);
		
		function getSearch(){
		var term = gi('search').value;
			
	if(term !=""){
	var makeDiv = document.createElement('div');
	makeDiv.setAttribute("id", "items");
	var makeList = document.createElement('ul');
	makeDiv.appendChild(makeList);
	document.body.appendChild(makeDiv)
		for(i=0, j=localStorage.length; i<j; i++){
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			for(n in obj){
			var makeLi = document.createElement('li');
			var makeSuList = document.createElement('ul');
			makeLi.appendChild(makeSuList);
				if(term === obj[n][1]){
					for(q in obj){
					var makeSubLi = document.createElement('li');
					makeSubLi.innerHTML = obj[q][0]+" "+obj[q][1];
					makeSuList.appendChild(makeSubLi);
					
					}
				}
			}
		}
	}
}*/
});
