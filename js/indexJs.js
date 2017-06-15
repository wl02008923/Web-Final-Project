$(document).ready(function(){
	$(".img1").hover(function(){
		$(".mask1").animate({
			marginTop: "-100%"
		},250);
	},function(){
		$(".mask1").animate({
			marginTop: "10%"
		},250);
	});
	$(".img2").hover(function(){
		$(".mask2").animate({
			marginTop: "-100%"
		},250);
	},function(){
		$(".mask2").animate({
			marginTop: "10%"
		},250);
	});
	$(".img3").hover(function(){
		$(".mask3").animate({
			marginTop: "-100%"
		},250);
	},function(){
		$(".mask3").animate({
			marginTop: "10%"
		},250);
	});
	
})