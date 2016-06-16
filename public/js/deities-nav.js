$(document).ready(function(){
	 console.log('ready');
	 var dnav = $('.deity-nav-item');

	 $(dnav).each(function(){

	 	$(this).hover(function(){
	 		if($(this).hasClass('deity-nav-item-active')){
	 			// do nothing
	 		}else{
	 			$(this).toggleClass('deity-nav-item-hover');
	 		}
	 	})

	 	$(this).click(function(e){
	 		e.preventDefault();
	 		$(dnav).removeClass('deity-nav-item-active');
	 		$(dnav).removeClass('deity-nav-item-hover');
	 		$(this).addClass('deity-nav-item-active');
	 	})
	 });

});