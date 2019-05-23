jQuery(function($){

	$(".first-obj,.second-obj,.third-obj,.fourth-obj").on('mouseenter', function(event) {
		$(this).css({'z-index':'10'});
		$(this).find(".details").stop().animate({left:'10%'},350);
		$(this).find(".price-arrow").removeClass('slide-in-elliptic-top-fwd');
		$(this).find(".price-arrow").addClass('heartbeat');
	}).on('mouseleave', function(event) {
		$(this).css({'z-index':'1'});
		$(this).find(".details").stop().animate({left:'110%'},350);
		$(this).find(".price-arrow").removeClass('heartbeat');
	});


	$(".fifth-obj,.sixth-obj,.seventh-obj").on('mouseenter', function(event) {
			$(this).css({'z-index':'10'});
			$(this).find(".details").stop().show().animate({left:'0%'},350);
			$(this).find(".price-arrow").removeClass('slide-in-elliptic-top-fwd');
		$(this).find(".price-arrow").addClass('heartbeat');
	}).on('mouseleave', function(event) {
				$(this).css({'z-index':'1'});
		$(this).find(".details").stop().animate({left:'-110%'},350);
		$(this).find(".price-arrow").removeClass('heartbeat');
	});

	$(".title").addClass('slide-in-top');


if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
{
 $(".footer").css({'top':'930px'});
}
	

	function animateOBJ(){
		var arr = [".first-obj",".second-obj",".third-obj",".fourth-obj",".fifth-obj",".sixth-obj",".seventh-obj"], 
			animTime = 250;

		for(let i = 0; i < arr.length; i++){
			$(arr[i]).delay(animTime).queue(function(next){
				$(this).show().addClass('scale-in-center');
				$(this).find(".price-arrow").fadeIn().addClass('slide-in-elliptic-top-fwd');
			});

			animTime +=100;
		}
	}
		
	setTimeout(function(){
		animateOBJ();
		$(".title").removeClass('slide-in-top');
	},500);


		


});