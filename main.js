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

	var scroll = $(target).offset().bottom;
	$('html, body').scroll(function (e) {
		alert(scroll)
		var st = $(this).scrollTop();
		if (st > scroll) {
			$('footer').animate({bottom: '-=10'}, 10);
		} else {
			$('footer').animate({bottom: '+=10'}, 10);
		}
		scroll = st;
	});
});