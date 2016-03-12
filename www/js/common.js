
$(function() {

	// 导航
	$('.j-nav').hover(function() {
		$(this).find('ul').removeClass('none');
	}, function() {
		$(this).find('ul').addClass('none');
	});

	// 广告
	$('.j-closeAd').click(function() {
		$(this).parent().addClass('none');
	});

});
