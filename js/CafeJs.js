$(document).ready(function(){
	$("#information").css("display","none");
	$(".row").css("display","none");
	$("#information").fadeIn(1000,function(){
		$(".row1").fadeIn(600,function(){
			$(".row2").fadeIn(600);
		});
	});
})