$(document).ready(function(){
	$("header").css("display","none");
	$("#cafes").css("display","none");
	$("#places").css("display","none");
	$("#coffeebeans").css("display","none");
	$("footer").css("display","none");
	$("header").slideDown(600,function(){
		$("#cafes").show(600,function(){
			$("footer").fadeIn(600);
		});
		$("#places").show(600,function(){
			$("footer").fadeIn(600);
		});
		$("#coffeebeans").show(600,function(){
			$("footer").fadeIn(600);
		});
	})
})