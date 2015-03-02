$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-re	ady').show();
	});

	$('.ryu').mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});

	$('.ryu').mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
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
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});

function playHadouken() {
		$('#hadouken-sound')[0].volume = 0.5
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
}