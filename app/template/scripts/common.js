$(document).ready(function($) {
	$('.reviews__list').slick({
		slidesToShow: 3,
		responsive: [{
			breakpoint: 776,
			settings: {
				slidesToShow: 1
			}
		}]
	})

	$('form').submit(function() {
		$.ajax({
		    type: "POST",
		    url: "/order.php",
		    data: $(this).serialize()
		}).done(function() {
			$('input').val('');
		    $.fancybox.open('<div class="message"><p>Спасибо Ваша заявка принята</p></div>');
		});
		return false;
	});

	// $(".input_phone").mask("+7 (999) 999-99-99");

	 $("a.price__button").click(function() {
	    var elementClick = $(this).attr("href")
	    var destination = $(elementClick).offset().top;
	    jQuery("html:not(:animated),body:not(:animated)").animate({
	      scrollTop: destination
	    }, 800);
	    return false;
	  });
});