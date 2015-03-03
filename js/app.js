$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		showElement($('.ryu-ready'));
	});

	$('.ryu').mouseleave(function() {
		showElement($('.ryu-still'));
	});

	$('.ryu').mousedown(function() {
		playHadouken();
		showElement($('.ryu-throwing'));
		$('.hadouken').show().animate(
			{'left': '1200px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '625px');
			}
		);
	});

	$('.ryu').mouseup(function() {
		showElement($('.ryu-ready'));
	});

	// x-button down
	$('body').keydown(function(event) {
		if (event.which == 88) {
			showElement($('.ryu-cool'));
		}
		else {
			console.log(event.which);
		}
	});

	// x-button up
	$('body').keyup(function(event) {
		if (event.which == 88) {
			showElement($('.ryu-still'));
		}
	});
});

function playHadouken() {
		$('#hadouken-sound')[0].volume = 0.5
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
}

function showElement(element) {
	$('.ryu-cool').hide();
	$('.ryu-still').hide();
	$('.ryu-throwing').hide();
	$('.ryu-ready').hide();
	element.show();
}