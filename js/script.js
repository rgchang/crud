var create_button;
var read_button;
var update_button;
var delete_button;

var create_input;
var read_input;
var update_input;
var delete_input;

var input = document.getElementsByTagName('input');

var list;
var order_list;

var input_text_color = [];

var list_of_colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine','Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed ', 'Indigo ', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen' ];

function random_color(){
	return list_of_colors[
	Math.floor(
		Math.random()*list_of_colors.length)];
}

document.addEventListener('DOMContentLoaded', function(){

	create_button = document.getElementById('create');
	read_button = document.getElementById('read');
	update_button = document.getElementById('update');
	delete_button = document.getElementById('delete');


	create_input = document.getElementById('create_box');
	read_input = document.getElementById('read_box');
	update_input = document.getElementById('update_box');
	delete_input = document.getElementById('delete_box');

	create_button.addEventListener('click', function(){
		list = document.createElement('li');
		order_list = document.getElementById('list_order');
		var input_value = create_input.value;

		list.innerText = input_value;

		list.style.backgroundColor = list.textContent;
		order_list.appendChild(list);
		create_input.value = '';

		if(input_value === '' || input_value === null){
			list.textContent = random_color();
			list.style.backgroundColor = list.textContent;
			order_list.appendChild(list);
		}

	});


	read_button.addEventListener('click', function(){
		list = document.createElement('li');
		order_list = document.getElementById('list_order');
		var input_value = read_input.value;


	});

	delete_button.addEventListener('click', function(){
		list = document.createElement('li');
		order_list = document.getElementById('list_order');
		var input_value = read_input.value;

		list.addEventListener('click', function(){
			list.style.backgroundColor = 'red';
		});
	});

});

