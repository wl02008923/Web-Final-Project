$(document).ready(function(){
	$("h1").css("display","none");
	$(".row1").css("display","none");
	$(".row2").css("display","none");
	$(".row3").css("display","none");
	$("h1").slideDown(600,function(){
		$(".row1").fadeIn(600,function(){
			$(".row2").fadeIn(600,function(){
				$(".row3").fadeIn(600);
			});
		});
	})
})