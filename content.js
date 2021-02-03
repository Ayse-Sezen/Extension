var img_src = new Array(0);
var url = "";


chrome.storage.local.get('img_url', function(data) {
  if (typeof data.img_url !== 'undefined') {
    img_src = data.img_url;
  }
});

// create button for saving images
var btn = document.createElement("Button");

btn.onclick = function(event) {
	img_src.push(url);
	var img_url = img_src;
	if (!img_url) {
		alert("Error: No img URL");
		return;
	}
	
	chrome.storage.local.set({'img_url': img_src}, function saveImg() {
		console.log('Saved img_url ' + img_src);
	});
	
	event.preventDefault();
};

btn.innerHTML = "*Save Image*";


// Style the button	
btn.style.cssText = "position: absolute; display: block; width: 100%; bottom: 0; color: #f1f1f1; transition: 0.5s ease; opacity: 0; background: rgb(0, 0, 0); background: rgba(0, 0, 0, 0.5); z-index: 1";

// When user mouses over an img element, button will pop up - when user mouses out, button disappears
document.addEventListener("mouseover", function(event) {
	
	var e = event.target;
	e.style.height = "auto";
	
	if (e.tagName == 'IMG') {
		url = e.src;
		btn.style.opacity = "1";
		
		// button gets appended to the parent <div> tag containing img element
		e.parentNode.appendChild(btn);
		
	} 
	
});	