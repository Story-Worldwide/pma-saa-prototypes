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
	 			$('.deity-hover-name-wrapper').toggleClass('deity-hover-name-wrapper--on');
	 			$('.deity-hover-name-wrapper').html('<p>'+ $(this).attr('data-deity-name') +'</p>')
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




	 // Sidebar Filter Page
	 $('.wrapper-header-filter-btn').click(function(e){
	 	e.preventDefault();
	 	$('.filter-sidebar').toggleClass('filter-sidebar-active');
	 });

	 // Close butto within the Filter menu toggles the sidebar's visibility as well 
	 $('.filter-form-close-btn').click(function(e){
	 	e.preventDefault();
	 	$('.filter-sidebar').toggleClass('filter-sidebar-active');
	 });


	 // Slidedown Filter Page
	  $('.wrapper-header-slidedown-filter-btn').click(function(e){
	 	e.preventDefault();
	 	$('.filter-slidedown').toggleClass('filter-slidedown-active');
	 });

	  // Filter Form Click to reveal option selects
	  $('.filter-form-heading').each(function(){
	  		$(this).click(function(){
	  			console.log('foo');
	  			$(this).next().toggleClass('filter-form-option-in').toggleClass('fade-in');
	  			$(this).find('.filter-form--option').toggleClass('filter-form-option-open');
	  		});
	  });

	  // Options Checkbox click
	  $('.filter-form-selects-checkbox').each(function(){
	  	$(this).click(function(e){
	  		e.preventDefault;
	  		console.log('checkbox clicked');
	  		$(this).toggleClass('selected');
	  	});
	  });


	  // Filter Options Date Slider
	  $('#slider').exists(function() {
		   $( "#slider" ).slider({
	      value:100,
	      min: 12,
	      max: 20,
	      step: 1,
	      slide: function( event, ui ) {
	        $( "#amount" ).val( ui.value +"th Century" );
	      }
	    });
	    $( "#amount" ).val($( "#slider" ).slider( "value" ) +"th Century" );
	});

	  // Filter-Slideout-3 
	  	// Clicking on "More Options" reveals the full filter form elements
	  	$('.main-item-more-options').click(function(e){
	  		e.preventDefault();
	  		$('.more-options-wrapper').toggleClass('more-options-wrapper--active');
	  		// reveal the "back" button in the global filter form header
	  		$('.filter-form-back-btn').toggleClass('filter-form-back-btn--active');
	  		// Hide the 'primary' 5 filter buttons when the filter form is active
	  		$('.filter-form-main-item-wrapper').toggleClass('filter-form-main-item-wrapper--hidden');
	  	});

	  	// Clicking on the "Back" button toggles the state of the filter menu.
	  	$('.filter-form-back-btn').click(function(e){
	  		e.preventDefault();
	  		//console.log('toggle shit');
	  		$('.more-options-wrapper').toggleClass('more-options-wrapper--active');
	  		$('.filter-form-back-btn').toggleClass('filter-form-back-btn--active');
	  		$('.filter-form-main-item-wrapper').toggleClass('filter-form-main-item-wrapper--hidden');
	  	});
	 




	  // Deity Nav 3 - Arrow Click to reveal mobile menu
	  $('.arrow-down').click(function(e){
	  	e.preventDefault;
	  	$('.deity-nav-items-mobile').toggleClass('deity-nav-items-mobile--on');
	  	//$('.deity-nav-items-mobile').fadeToggle().css("display","inline-block");
	  	//$('.deity-nav-items-mobile').fadeToggle();
	  });



});


$.fn.exists = function(callback) {
  var args = [].slice.call(arguments, 1);

  if (this.length) {
    callback.call(this, args);
  }

  return this;
};
