$(document).ready(function(){
	$("#img").css("display","none");
	$("#detail").css("display","none");
	$("#img").fadeIn(1000,function(){
		$("#detail").fadeIn(600);
	})
})