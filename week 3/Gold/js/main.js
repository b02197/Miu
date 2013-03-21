//Michael Eaton
//Miu week 3
//term 1303


$('#index').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addItem').on('pageinit', function(){

		var myForm = $('#itemForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			saveData(key);
		}
	});
	
	//any other code needed for addItem page goes here

});

//getElementById function to get the ids
    function gi(x){
        var theElement = document.getElementById(x);
        return theElement;
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
				gi('addItem').style.display = "none";
				gi('clear').style.display = "inline";
				gi('displayData').style.display = "none";
				break;
			case "off":
				gi('addItem').style.display = "block";
				gi('clear').style.display = "inline";
				gi('displayData').style.display = "inline";
				
				gi('items').style.display = "none";
				break;
			default:
				return false;

		}
	}
//Toggle the links	

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
	item.genSel = ["Genre:", gi('genSel').value];
	item.title = ["Game Name:", gi('title').value];
	item.conSel = ["Console:", gi('conSel').value];
	item.enjoy =["Enjoy Game:", enjoyValue];
	item.beat = ["Beaten Game:", beatValue];
	item.date = ["Date Beaten:", gi('date').value];
	item.rate = ["Rate Game:", gi('rate').value];
	item.notes = ["Extra Notes:", gi('notes').value];
	console.log(item)
//Save data into local storage. Use stringify to convert our object to string.
	localStorage.setItem(id, JSON.stringify(item));
	alert("Game is Saved!");
//reloads page so you don't get multiple entries after editing.
	
	}
	
	
//put data into the HTML file
	function getData(){
		togcont("on");
	if(localStorage.length === 0){
		alert("There are no games to display. Populating local storage with default content.");
		defaultData();
	}
		
//Write data from local storage to browse
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
			getImage(object.conSel[1], makeSubUl);
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
		togcont("off")
		
//populate the form field with current localStorage value
		gi('genSel').value = item.gen[1];
		gi('title').value = item.gName[1];	
		gi('conSel').value = item.con[1];
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
		
//change submit button to edit button
		gi('submit').value = "Edit Game";
		var editSubmit = gi('submit');
		editSubmit.key = this.key;
		window.location.reload();
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
//Variable defaults
	var enjoyValue,
	beatValue = "No";


	
//Set link & submit click event
	var displayData = gi('displayData');
	displayData.addEventListener("click", getData);
	var clearLink = gi('clear');
	clearLink.addEventListener("click", clearData);
	var save = gi('submit');
	save.addEventListener("click", saveData);