function showNavs() {
	if (document.getElementById("navlinks").style.display==""){//found that it would start empty, not set at all
		document.getElementById("navlinks").style.display="inline";
	}
	else 
	{
		document.getElementById("navlinks").style.display == "inline" 
		? document.getElementById("navlinks").style.display="none" 
		: document.getElementById("navlinks").style.display="inline";
	}
}

function menuChange(x) {
	showNavs();
    x.classList.toggle("change");
}



var picIndex = 0;
var picArray = 
	[
		["images/Mountain_Adventure_slider.jpg","Snowy mountain with clouds"], 
		["images/Monument_Valley_Adventure_slider.jpg","Two red mountains atop hills"],
		["images/Skiing_Adventures_slider.jpg","White snowey mountain backdrop with golden grass and pink tree foreground"]
	];
changePic();

function changePic() {

	document.getElementById("slider").src = picArray[picIndex][0];
	document.getElementById("slider").alt = picArray[picIndex][1];
	document.getElementById("slider").title = picArray[picIndex][1];
	setTimeout(changePic, 5000);
	picIndex=(picIndex+1)%picArray.length;
}




