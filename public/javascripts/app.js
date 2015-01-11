$(document).ready(function(){
	$("#swellexpanded").hide();
	$("#fisticuffsexpanded").hide();
	$("#fisticuffs").hover(function(){
			$("#fisticuffsexpanded").show();
	}, function(){
		$("#fisticuffsexpanded").hide();
	});
	$("#swell").hover(function(){
			$("#swellexpanded").show();
	}, function(){
		$("#swellexpanded").hide();
	});
});