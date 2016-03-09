var INITIALSIZE = 16;

$(document).ready(function() {
	createGrid(INITIALSIZE);
	paintStandard();
	standard();
	colorize();
	chiaroscuro();
	resetGrid();
});

function resetGrid() {
	$('.material-icons').on('click', function() {
		$('.square').removeClass('painted');
	});
}

function createGrid(size) {
	removeGrid();

	var square_size = $('.grid').width() / size;

	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			$('<div/>', {
				class: "square"
			}).appendTo('.grid');
		}
	}

	$('.square').css('width', square_size);
	$('.square').css('height', square_size);
}

function removeGrid() {
	$('.grid').children('div').remove();
}

function standard() {	
 	$('#standard').on('click', function() {
		size = input();
		if (size == 1)
			return;
		createGrid(size);
		paintStandard();
 	});
}

function colorize() {
	$('#colorize').on('click', function() {
		size = input();
		if (size == 1)
			return;
		createGrid(size);
		$('.square').on('mouseenter', function() {
			var red = Math.floor(Math.random() * 256);
			var green = Math.floor(Math.random() * 256);
			var blue = Math.floor(Math.random() * 256);
			$(this).css({ "background-color": "rgb(" + red + "," + green + "," + blue });
		});
	})
}

function chiaroscuro() {
	$('#chiaroscuro').on('click', function() {
		size = input();
		if (size == 1)
			return;
		createGrid(size);
		$('.square').addClass('painted');
		$('.square').on('mouseenter', function() {
			var opacity = $(this).css("opacity")
			if (opacity != 0) {
				$(this).css("opacity", opacity - .10);
			}
		});
	});
}

function paintStandard() {
	$('.square').on('mouseenter', function() {
		$(this).addClass('painted');
	});
}

function input() {
	size = prompt("Choose your grid size between 1 - 64");

	if (size < 1 || size > 64) {
		alert('Sorry, choose a grid between 1 - 64.');
		return 1;
	}
	else
		return size;
}