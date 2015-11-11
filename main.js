$(document).ready( function() {
	$('a[href^="#"]').click(function (e) {
		e.preventDefault();

		var target = $(this).attr("href");
		
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 600, 'swing', function() {
			window.location.hash = target;
		});

		$('footer').animate({
			bottom: '-11.5%'
		}, 600, 'swing');
	});
});