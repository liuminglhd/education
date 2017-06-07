
/* @Author: 刘海涛
* @Date:   2017-04-28 22:46:19
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-05 15:06:03
*/

'use strict';
// $(document).ready(function(){})
// jQuery(document).ready(function($){})
// $(function(){})
$(document).ready(function(){
	// ---------------------------------时间获取------------------------------------------------
	var myTime = new Date();
	var year = myTime.getFullYear();
	var month = myTime.getMonth();
	var date = myTime.getDate();
	$('.top .left span').eq(1).html(year + '年' + (month + 1) + '月' + date + '日');
	// ----------------------------------轮播图-------------------------------------------------
	// 图片宽度
	var width1 = $('.main .left .info .img_group img')[0].width;
	// 图片数量
	var count = $('.main .left .info .img_group img').length;
	// 图片索引值
	var num = 0;
	// 定义一个变量存放计时器
	var timer = null;
	// 第一次调用
	points(0);
	// 计时器
	timer = setInterval(banner, 2000);
	// 圆点属性变化
	function points(num){
		$('.main .left .info ul li').eq(num).addClass('current').siblings('li').removeClass('current');
	}
	// 图片动画效果
	function banner(){
		if(!$('.img_box .img_group').is(':animated')){
			if(num == count - 1){
				$('.main .left .info .img_box .img_group').animate({'margin-left':'0'});
				num = 0;
				points(0);
			}else{
				$('.main .left .info .img_box .img_group').animate({marginLeft:'-=' + width1},1200);
				num++;
				points(num);
			};
		 };
	};
	// 圆点停留
	$('.main .left .info ul li').mouseover(function(){
		clearInterval(timer);
		num = $(this).index();
		points(num);
		$('.main .left .info .img_box .img_group').animate({marginLeft:'-' + num * width1});
	}).mouseout(function(){
		timer = setInterval(banner, 1000);
	});
	// ----------------------------------报考信息切换---------------------------------------------
	// var width2 = $('.main .right .exam_info .details_box .details')[0].clientWidth; div块的宽度用clientwidth
	// 圆点属性变化
	var index = 0;
	var count2 = $('.main .right .exam_info .details_box .details').length;
	exam_points(0);
	$('.main .right .exam_info .details_box .details').eq(0).show().siblings('.details').hide();
	function exam_points(index){
		$('.main .right .exam_info .exam_points li').eq(index).addClass('current').siblings('li').removeClass('current');
	}
	// 动画效果
	function exam_banner(){
		if(index == count2 - 1){
			$('.main .right .exam_info .details_box .details').eq(0).show().siblings('.details').hide();
			index = 0;
			exam_points(0);
		}else{
			index++;
			$('.main .right .exam_info .details_box .details').eq(index).show().siblings('.details').hide();
			exam_points(index);
		};
	};
	timer = setInterval(exam_banner, 4000);
	// 圆点切换
	$('.main .right .exam_info .exam_points li').mouseover(function(){
		clearInterval(timer);
		index = $(this).index();
		exam_points(index);
		$('.main .right .exam_info .details_box .details').eq(index).show().siblings('.details').hide();
	}).mouseout(function(){
		timer = setInterval(exam_banner, 4000);
	});	

	// ---------------------------------招聘会切换信息--------------------------------------------
	$('.employ .left>a').eq(0).addClass('current');
	$('.employ .right>a').eq(0).addClass('current');
	$('.employ .left>ul').eq(0).show().siblings('ul').hide();
	$('.employ .right>ul').eq(0).show().siblings('ul').hide();
	// 左
	$('.employ .left>a').each(function(){
		$(this).bind('click',function(){
			console.log($(this));
			$(this).addClass('current').siblings().removeClass('current');
			$('.employ .left>ul').eq($(this).index()).show().siblings('ul').hide();
		});
	});
	// 右
	$('.employ .right>a').each(function(){
		$(this).bind('click',function(){
			console.log($(this));
			$(this).addClass('current').siblings().removeClass('current');
			$('.employ .right>ul').eq($(this).index()).show().siblings('ul').hide();
		});
	});

	// $('.employ a').click(function(){
	// 	console.log($(this))
	// 	$(this).addClass('current').siblings().removeClass('current');
	// 	$('.employ>div>ul').eq($(this).index()).show().siblings('ul').hide();
	// }).blur(function(){
	// 	$(this).removeClass('current');
	// })
	// ------------------------------------房屋租赁------------------------------------------------
	// $('.house .left .details>div>div:nth-child(3) span').eq(0).html().replace(/\D+/g,'').css({'color':'#F00'});
	// console.log($('.house .left .details>div>div:nth-child(3) span').eq(0).html().replace(/\D+/g,''));



	// -----------------------------------小工具使用-----------------------------------------------
	function tools(i){
		$('.house_cont .tools_box').show();
		$('.house_cont .tools_box>div').eq(i).show().siblings('div').hide();
	}
	// // 小工具模块使用
	// $('.house .right .tools tr').click(function(){
	// 	tools($(this).index());
	// });

	// each方法
	$('.house .right .tools tr').each(function(index, el){
		$(this).bind('click',function(){
			tools(index);
		});
	});
	$('.house .right .tools').mouseleave(function(){
		$('.house_cont .tools_box').hide();
	});
	
});
/*function banner1(){
}
setInterval(banner1, 1000);*/