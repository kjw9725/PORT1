//// 쇼핑몰 JS - main.js /////

// mobild code
let mob=0;
if($(window).width()<1200) mob=1;


$(document).ready(function () {
	console.log("로딩완료");

	$(".mbtn").click(function () {

		console.log("메뉴버튼");
		
		
		// 버튼이미지 변경하기
		let isrc;
		if($(".menu").css("display")==="none"){
			
			// mobile
			if(mob)
				isrc = "url(images/main_images/mobile/btn_close.png)";
			else
				isrc = "url(images/main_images/close_btn.gif)";
		}//// if ////////////////////////////////
		else{
			isrc = "url(images/main_images/btn_gnb_open.gif)";
		}//// else //////////////////////////////////
		

		$(".menu").slideToggle(500);
		
		

		$(this).css({
			backgroundImage:isrc
		});//// csss ///////////



	}); //// click //////////////////////

	$(".dbtn1").click(function () {
		$(".slide2").fadeOut(500)
	}); /////// click ////////////////////

	$(".dbtn2").click(function () {
		$(".slide2").fadeIn(500)
	}); /////// click ////////////////////



}); /////////////// 로드구역 ///////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
