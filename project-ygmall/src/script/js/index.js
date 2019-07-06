; !function ($) {
	//banner数据
	$.ajax({
		url: 'php/banner.php',
		dataType: 'json'
	}).done(function (bannerdata) {
		$.each(bannerdata, function (index, value) {
			var $bannerstr = '<ul>';

		});
	});
	//首页猜你喜欢数据渲染
	const $goodslist = $('.bz-more-inner');
	$.ajax({
		url: 'http://10.31.158.58/project-ygmall/php/goodslist.php',
		dataType: 'json'
	}).done(function (goods) {
		var $str = '<ul class="bz-more-list clearfix">';
		$.each(goods, function (index, value) {
			$str += `<li class="bz-more-goods">
			<a class="bz-more-goods-lk" href="details.html?sid=${value.picid}" target="_blank"
				title="viken（维肯）移动电源 V82/20000mAh">
				<img class="bz-more-photo J-lazy"
					src="${value.url}"
					data-original="https://pic.cnrmall.com/image/b0/63/b06301b12caa3690c2817459726051df.jpg@240w_240h"
					alt="viken（维肯）移动电源 V82/20000mAh">
				<div class="bz-more-info">
					<p class="bz-more-info-name">${value.title}</p>
					<p class="bz-more-info-price"> <span class="bz-more-info-price-txt">
							<span class='yuan'>￥</span><span class='integer'>${value.price}</span><span
								class='pointer'>.</span><span class='decimal'>00</span>
						</span> </p>
				</div>
			</a>		
			</li>`
		});
		$str += '</ul>';
		$goodslist.html($str);
	});

	//lunbo数据
	$.ajax({
		url: 'php/banner.php',
		dataType: 'json'
	}).done(function (bannerdata) {
		$.each(bannerdata, function (index, value) {
			var $bannerstr = '<ul>';

		});
	});
	//tab切换数据
	$.ajax({
		url: 'php/banner.php',
		dataType: 'json'
	}).done(function (bannerdata) {
		$.each(bannerdata, function (index, value) {
			var $bannerstr = '<ul>';

		});
	});
}(jQuery);

!function () {
	//banner效果

}(jQuery);

!function () {
	//lunbo效果

}(jQuery);

!function () {
	//小效果

}(jQuery);
