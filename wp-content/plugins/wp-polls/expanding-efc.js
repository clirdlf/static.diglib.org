// EFC for DLF 120228

// cross-browser event addition function

function addEventHandler(elem,eventType,handler) {
 if (elem.addEventListener)
     elem.addEventListener (eventType,handler,false);
 else if (elem.attachEvent)
     elem.attachEvent ('on'+eventType,handler); 
}

// add our rewrite event to the start of the script

addEventHandler(window, "load", rewriteSpecial);

// rewrite the HTML to add the divs need for exapansion

function rewriteSpecial() {
	elements = document.getElementsByClassName('bio');
	for (var i=0; i<elements.length;i++) {
		division = elements[i];
		var toggleID = "OurSpecial"+i;
		var divID = "div"+toggleID;
		division.setAttribute('id', divID);
		var toggleSwitch = document.createElement("div");
		var toggleText = "Bio";
		var toggleTextNode = document.createTextNode(toggleText);
		toggleSwitch.appendChild(toggleTextNode);
		toggleSwitch.setAttribute('id', toggleID);
		toggleSwitch.className = "toggle";
		addEventHandler(toggleSwitch, "click", toggleDivision);
		division.parentNode.insertBefore(toggleSwitch, division);
	}
}

function toggleDivision(e) {
	if (!e) var e = window.event;
	// console.log(e);
	var divisionID = "div"+this.id;
	var element = document.getElementById(divisionID);
	if (this.innerHTML == "Bio") {
		//element.style.display = "block";
		jQuery('#'+divisionID).slideDown();
		this.innerHTML = "Hide Bio";
	} else {
		//element.style.display = "none";
		jQuery('#'+divisionID).slideUp();
		this.innerHTML = "Bio";
	}
	e.preventDefault ? e.preventDefault() : e.returnValue = false;
}
