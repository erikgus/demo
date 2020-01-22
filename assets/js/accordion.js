//prefix classes with "js-" to differentiate between functional and style classes. easier to maintain

$(document).ready(function() {
	var allPanels = $('.js-accordion > dd').hide();

	$('.js-accordion > dt > a').click(function() {
		allPanels.slideUp();
		$(this).parent().next().slideDown();
		return false;
	});
});
    
