var $popup = $('#popup');
var $clickpop = $('#clickpop');

$(function() {
		$clickpop.click(function() {
			$popup.slideToggle("slow");
		});
});
	
	