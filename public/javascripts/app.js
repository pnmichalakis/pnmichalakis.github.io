$(document).ready(function(){
	$('.bio').hide();
	$('.biobutton').click(function(){
		$('.bio').slideToggle();
	});
	$('.links').hide();
	$('.linksbutton').click(function(){
		$('.links').slideToggle();
	});
});