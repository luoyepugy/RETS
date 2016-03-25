
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
	$('.j-search').hover(function() {
		$(this).parent().addClass('searchPackageOn');
		$('.j-searchInput').addClass('none').next('div').removeClass('none');
	}, function() {
		$(this).parent().removeClass('searchPackageOn');
		$('.j-searchInput').removeClass('none').next('div').addClass('none');
	});

});