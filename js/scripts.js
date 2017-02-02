function addListElement(list) {
	var number = list.getElementsByTagName('li').length;
	list.innerHTML += '<li>item' + number + '</li>';
	
}

var btn = document.getElementById('addElem'),
	list = document.getElementById('Lista');
btn.addEventListener('click', function (e) {
	addListElement(list);
});
