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
	let baseUrl = 'localhost';
	const $goodslist = $('.bz-more-inner');
	$.ajax({
		url: 'http://' + baseUrl + '/project-ygmall/php/goodslist.php',
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

!function ($) {
	//ppt效果
	class Ygbanner {
		constructor() {
			this.banner = $('#banner');
			this.piclis = $('#banner ul li');//类数组
			this.$btnlis = $('#banner ol li');
			this.picul = $('#banner ul');
			this.$num = 0;
			this.timer = null;
			this.left = $('#left');
			this.right = $('#right');
			this.flag = true;
		}
		init() {
			let _this = this;
			let $first = this.piclis.first().clone();
			let $last = this.piclis.last().clone();
			this.picul.prepend($last);
			this.picul.append($first);
			this.liwidth = $('#banner ul li').eq(0).width();
			this.picul.width(this.liwidth * $('#banner ul li').size());
			this.picul.css('left', -this.liwidth);
			this.$btnlis.on('click', function () {
				_this.$num = $(this).index();
				_this.$btnlis.eq(_this.$num).addClass('active').siblings().removeClass('active');
				_this.piculmove();
			})
			this.banner.hover(function () {
				$('#left,#right').show();
				clearInterval(_this.timer);
			}, function () {
				$('#left,#right').hide();
				_this.autoplay();
			})
			this.autoplay();
			this.right.on('click', function () {
				if (_this.flag) {
					_this.flag = false;
					_this.$num++;
					if (_this.$num == _this.$btnlis.length) {
						_this.$btnlis.eq(0).addClass('active').siblings().removeClass('active');

					} else {
						_this.$btnlis.eq(_this.$num).addClass('active').siblings().removeClass('active');
					}
					_this.piculmove();
				}
			})
			this.left.on('click', function () {
				if (_this.flag) {
					_this.flag = false;
					_this.$num--;
					_this.$btnlis.eq(_this.$num).addClass('active').siblings().removeClass('active');
					_this.piculmove();
				}
			})

		}
		piculmove() {
			let _this = this;
			this.picul.stop(true).animate({
				left: -(this.$num + 1) * this.liwidth
			}, 1000, function () {
				if (_this.$num == _this.$btnlis.length) {
					_this.$num = 0;
					_this.picul.css('left', -_this.liwidth);

				}
				if (_this.$num == -1) {
					_this.$num = _this.$btnlis.length - 1;
					_this.picul.css('left', -_this.liwidth * _this.$btnlis.length - 1);

				}

				_this.flag = true;
			})

		}
		autoplay() {
			let _this = this;
			this.timer = setInterval(function () {
				_this.right.click();
			}, 2000)

		}

	}
	new Ygbanner().init();

}(jQuery);

!function ($) {
	//倒计时效果
	function double(n) {
		return n < 10 ? '0' + n : n
	}
	const $killdowntime = $('#seckillTimeDown');
	function downtime() {
		var $currenttime = new Date();
		var $futuretime = new Date('2019-7-20 20:00:00');
		var $time = parseInt(($futuretime - $currenttime) / 1000);
		var $day = parseInt($time / 86400);
		var $hour = parseInt($time % 86400 / 3600);
		var $minute = parseInt($time % 3600 / 60);
		var $second = $time % 60;
		$killdowntime.html(double($day) + '天' + double($hour) + ':' + double($minute) + ':' + double($second))
	}
	setInterval(downtime, 1000);

}(jQuery);

!function () {
	//楼梯效果
	//1.显示隐藏楼梯。
	$loutinav = $('#loutinav');
	$louti = $('#loutinav ul li');
	$louceng = $('.louceng');
	$last = $('.last');
	$(window).on('scroll', function () {
		let $scrolltop = $(window).scrollTop();
		if ($scrolltop >= 600) {
			$loutinav.show();
		} else {
			$loutinav.hide();
		}

		//4.触发滚动条事件
		//拖动滚动条，楼梯与楼层对应
		$louceng.each(function (index, element) {
			let $loucengtop = $louceng.eq(index).offset().top;
			if ($loucengtop >= $scrolltop) {
				$louti.not($last).removeClass('active');
				$louti.not($last).eq(index).addClass('active');
				return false
			}
		})
	})
	//2.点击楼梯，对应得楼层进行位置跳转。
	$louti.not($last).on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
		let $loucengtop = $louceng.eq($(this).index()).offset().top;
		$('html,body').animate({
			scrollTop: $loucengtop
		})
	})
	//3.回到顶部
	$last.on('click', function () {
		$('html,body').animate({
			scrollTop: 0
		})
	})


}(jQuery);
!function ($) {
	//懒加载效果
	$(window).on('scroll', function () {
		let $imgtop = $('.J-lazy').offset().top;
		let $scrolltop = $(window).scrollTop();
		let $clientheight = $(window).height();
		if ($imgtop < $scrolltop + $clientheight) {
			$('.J-lazy').each(function (index, element) {
				$(element).attr('src', $(element).attr('_src'));
			})
		}
	});

}(jQuery);
!function () {
	//二级菜单显示隐藏
	const $title = $('.top-menu');
	$title.hover(function () {
		$(this).find('.top-menu-con').css({
			opacity: 1,
			height: 100,
			top: 35
		})
	}, function () {
		$(this).find('.top-menu-con').css({
			opacity: 0,
			height: 0,
			top: 0
		})
	})
	const $mobilemall=$('.mobile-mall');
	$mobilemall.hover(function () {
		$(this).find('.top-menu-con').css({
			opacity: 1,
			height: 180,
			top: 35
		})
	}, function () {
		$(this).find('.top-menu-con').css({
			opacity: 0,
			height: 0,
			top: 0
		})
	})
	const $goodsmenu = $('.cate-menu-item');
	$goodsmenu.hover(function () {
		$(this).find('.cate-part').css({
			display:'block',
			left:180,
			top: 0
		})
	}, function () {
		$(this).find('.cate-part').css({
			display:'none'
		})
	})
}(jQuery);
;!function($){
//首页显示用户名
const $user=$('.login-link');
$user.html('您好,'+localStorage.getItem('username'));
}(jQuery)