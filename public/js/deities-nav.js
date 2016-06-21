$(document).ready(function(){
	 console.log('ready');
	 var dnav = $('.deity-nav-item'),
	 	 dname = $('.deity-name-hover-test');

	 $(dnav).each(function(){

	 	$(this).hover(function(){
	 		if($(this).hasClass('deity-nav-item-active')){
	 			// do nothing
	 		}else{
	 			$(this).toggleClass('deity-nav-item-hover');
	 			//dname.removeClass('deity-name-active');
	 			dname.removeClass('deity-name-active');
	 		}
	 	})

	 	$(this).click(function(e){
	 		e.preventDefault();
	 		//dname.fadeOut();
	 		
	 		dname.addClass('deity-name-active');
	 		$(dnav).removeClass('deity-nav-item-active');
	 		$(dnav).removeClass('deity-nav-item-hover');
	 		$(this).addClass('deity-nav-item-active');

	 		//console.log();
	 		var newDeityName = $(this).attr('data-deity-name');
		    setTimeout(function(){
			  //alert("Boom!");
			  dname.html(newDeityName);
			}, 350);
	 	})
	 });

});