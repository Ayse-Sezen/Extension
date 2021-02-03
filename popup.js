var selected = [];
var btn = document.getElementById('deleteBtn');

btn.onclick = function() {
	selected.forEach(deleteImg);
}

function deleteImg(value) {
	var img = document.getElementById(value);
	var imgDiv = img.parentNode;
	img.remove();
	imgDiv.remove();
}

chrome.storage.local.get(['img_url'], function(result) {
	result.img_url.forEach(displayImage);
});

function displayImage(value, index, array) {
	console.log('Value currently is ' + value);
	
	var newDiv = document.createElement('div');
	
	
  var img = document.createElement('img');
  img.id = index;
  img.src = value;
  img.style.cssText = "max-width: 300px; border-radius: 5px";
  
  newDiv.appendChild(img);
  document.body.appendChild(newDiv);

}	


document.addEventListener("click", function (event) {
	var e = event.target;
	if (e.tagName == 'IMG') {
		selected.push(e.id);
	}
	else if (e.tagName !== 'BUTTON' && e.tagName !== 'IMG') {
		selected = [];
	}
	console.log(selected);
});



