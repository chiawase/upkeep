$(document).ready( function() {
	$('a[href^="#"]').click(function (e) {
		e.preventDefault();

		var target = $(this).attr("href");
		
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 600, 'swing', function() {
			window.location.hash = target;
		});
	});

	var footer = $('footer').offset().top;
	$(window).scroll(function () {
		var temp = $(window).scrollTop();
		if (temp > footer) {
			$('footer').addClass('sticky');
			$('#video .kip').addClass('sticky');
		} else {
			$('footer').removeClass('sticky');
			$('#video .kip').removeClass('sticky');
		}
	});
});