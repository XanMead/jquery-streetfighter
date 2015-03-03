$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		swapElements($('.ryu-still'), $('.ryu-ready'));
	});

	$('.ryu').mouseleave(function() {
		swapElements($('.ryu-ready'), $('.ryu-still'));
	});

	$('.ryu').mousedown(function() {
		playHadouken();
		swapElements($('.ryu-ready'), $('.ryu-throwing'));
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
		swapElements($('.ryu-throwing'), $('.ryu-ready'));
	});
});

function playHadouken() {
		$('#hadouken-sound')[0].volume = 0.5
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
}

function swapElements(hideIt, showIt) {
	hideIt.hide();
	showIt.show();
}