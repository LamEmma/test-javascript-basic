function init() {
	var html_btn = document.getElementById('btn');
	var html_click_h2 = document.getElementById('click_h2');
	html_btn.onclick = convert_button_click;
	html_click_h2.onclick = h2_click;

	var all_h3 = document.getElementsByTagName('h3');
	for (i=0; i< all_h3.length; i++) {
		all_h3[i].onclick = all_h3_click;	
	}	
}

function all_h3_click() {
	var h3_element = document.getElementById('h3_element');
	h3_element.innerHTML ='<h3>You clicked h3</h3>';
}

function print_conversion (usd, vnd) {
	var html_message = document.getElementById('message');
	html_message.textContent = "You entered: " + usd + "USD, VND " + vnd + "k";
}
function h2_click() {
	var h2_content = document.getElementById('test');
	h2_content.innerHTML = '<h1>You clicked on Heading 2</h1>';
}

function convert_button_click() {
	var usd = prompt('Enter USD: ');
	var vnd = 23*usd;
	print_conversion(usd, vnd); 
} 


window.onload = init;