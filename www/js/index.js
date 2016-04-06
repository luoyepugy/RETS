
$(function() {

	// 企业介绍
	$('.j-tabs li').click(function() {
		var index = $(this).data('index');
		$('.j-tabsComtent li').addClass('none').eq(index).removeClass('none');
		$('.j-tabs li').removeClass('active').eq(index).addClass('active');
	});

	// banner图
	$('.j-banner').owlCarousel({
		slideSpeed : 300,
      	paginationSpeed : 400,
      	singleItem:true,
      	autoPlay: 5000
	});
	$('.j-bannerNext').click(function(){
	    $('.j-banner').trigger('owl.next');
	});
	$('.j-bannerPrev').click(function(){
	    $('.j-banner').trigger('owl.prev');
	});

	// 友情链接
	$('.j-links').owlCarousel({
		autoPlay: 3000,
		items: 5
	});
	$('.j-linksNext').click(function(){
	    $('.j-links').trigger('owl.next');
	});
	$('.j-linksPrev').click(function(){
	    $('.j-links').trigger('owl.prev');
	});


	// 包裹查询
	var time = null;
	// $('.j-search').hover(function() {
	// 	clearTimeout(time);
	// 	var that = $(this);
	// 	time = setTimeout(function() {
	// 		that.addClass('searchPackageOn').animate({'height':'280px'});
	// 		$('.j-searchInput').slideUp(200).next().slideDown();
	// 	}, 300);
	// }, function() {
	// 	clearTimeout(time);
	// 	var that = $(this);
	// 	time = setTimeout(function() {
	// 		that.removeClass('searchPackageOn').animate({'height':'127px'});
	// 		$('.j-searchInput').slideDown().next().slideUp(200);
	// 	}, 300);
	// });

	// 是否国际单号
	$('.j-checked').click(function() {
		var checked = false;
		$(this).find('.checkbox').toggleClass('checked');
		if($(this).find('.checkbox').hasClass('checked')) {
			checked = true;
		} else {
			checked = false;
		}
		$(this).find('input[type="checkbox"]').prop('checked', checked);
	});

});