jQuery(document).ready(function(){
	"use strict";


	/* Mean Menu */
	jQuery(document).ready(function () {
		jQuery('.site-navigation').meanmenu();
	});

	/*--*/
/*fixed header*/
    var windows = $(window);
	var Header = $(".nav-pt");
	if (Header.length) {
	windows.on('scroll', function() {
	  var scroll = windows.scrollTop();
	  if (scroll > 200) {
		$(".nav-pt").addClass('stick');
	  }
	  else {
		$(".nav-pt").removeClass('stick');
	  }
	});
	}

	if ($(window).width() < 992) {
	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
	  if (!$(this).next().hasClass('show')) {
	  $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
	  }
	  var $subMenu = $(this).next(".dropdown-menu");
	  $subMenu.toggleClass('show');

	  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
	  $('.dropdown-submenu .show').removeClass("show");
	  });
	  return false;
	});
	}

});


