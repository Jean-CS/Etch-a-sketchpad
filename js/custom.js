$(document).ready(function() {
	createGrid();

	resetGrid();
});

function resetGrid() {
	$('.material-icons').on('click', function() {
		$('.square').removeClass('painted');
	});
}

function createGrid() {
	var size = 10;

	var square_size = $('.grid').width()/size;

	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			$('<div/>', {
				class: "square"
			}).appendTo('.grid');
		}
	}

	$('.square').css('width', square_size);
	$('.square').css('height', square_size);

	$('.square').on('mouseenter', function() {
		$(this).addClass('painted');
	});

}