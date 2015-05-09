// Bind the possible Add to Cart btns with event to position top links
jQuery(document).ready(function($){
	
	// MENU LOGIC - Customize to keep HTML logic the same
	$('#menu .sub-menu').wrap('<div/>');
	$('#menu .sub-menu li a').wrapInner('<span/>');
	$('#menu .sub-menu > li:last-child > a').addClass('last_submenu_item');
	
	$('#menu .sub-menu > li > div').addClass('subsub_menu');

	$('#menu .children').prev().append('<span></span>');
	$('#menu .children').wrap('<div/>');
	$('#menu .children li a').wrapInner('<span/>');
	$('#menu .children > li:last-child > a').addClass('last_submenu_item');
	
	$('#menu .children > li > div').addClass('subsub_menu');
	
	
	$('#menu .subsub_menu > ul > li > div').removeClass('subsub_menu').addClass('subsubsub_menu');
	$('#menu .subsubsub_menu > ul > li > div').addClass('subsubsub_menu');
	// MENU LOGIC :: END
	
	// Sidebar Menu 
	$('#sidebar .widget_categories > ul, #sidebar .widget_nav_menu  > div > ul, #sidebar .widget_pages ul:first').addClass('side_bar_menu');
	$('#sidebar ul.side_bar_menu a').wrapInner('<span class="link_span"/>').prepend('<span class="hover_span"></span>');
	
	// Top Comment class
	$('.single_comment:first').addClass('first_comment');
	
	// Footer Navigation pushoff
	$('#footer .menu').addClass('margined_left');
	$('#footer .menu').parent().prev('h3').addClass('margined_left');
	
	
	// Menu Animation
    $('#menu ul li').hover(
        function() {
            $(this).addClass("active");
            $(this).find('div').not('.subsub_menu, .subsubsub_menu').stop(false, true).slideDown({
            	duration:300,
            	easing:"easeOutExpo"});
        },
        function() {
            $(this).removeClass("active");
            $(this).find('div').not('.subsub_menu, .subsubsub_menu').stop(false, true).slideUp({
            	duration:100,
            	easing:"easeOutExpo"});
        }
    );

	// Sub Menu Animation
    $('#menu ul li li').hover(
        function() {
            $(this).find('.subsub_menu').stop(false, true).slideDown({
            	duration:300,
            	easing:"easeOutExpo"});
        },
        function() {        
            $(this).find('.subsub_menu').stop(false, true).hide();
        }
    );	
    
    // Subsub Menu Animation
    $('#menu ul li li li').hover(
    		function() {
    			$(this).find('.subsubsub_menu').stop(false, true).slideDown({
    				duration:300,
    				easing:"easeOutExpo"});
    		},
    		function() {        
    			$(this).find('.subsubsub_menu').stop(false, true).hide();
    		}
    );	
	

	
	// Sidebar Nav effects	
	$('.side_bar_nav a').not(".active").hover(
		function() {
			$(this).children('.hover_span').stop().animate({width:'100%'},500,'easeOutExpo');
		},
		function() {
			$(this).children('.hover_span').stop().animate({width:'0'},200,'easeOutExpo');
		}
	);	

	
	
	/* Accordions */
	$(".acc_item").click(function(){
		
		$(this).siblings().children(".accordion_content").not($(this).find(".accordion_content")).slideUp(600,'easeInOutExpo');
		$(this).siblings().children(".accordion").not($(this).find(".accordion")).removeClass("active_acc");

		$(this).find(".accordion").next(".accordion_content").slideToggle(600,'easeInOutExpo');
		
		if($(this).find(".accordion").hasClass('active_acc')){
			$(this).find(".accordion").removeClass("active_acc");
		}else{
			$(this).find(".accordion").addClass("active_acc");
		}
	});
	
	// Open First item if accordion whenever set so
	setTimeout(function(){$(".acc_is_open").delay(1500).click();},600);	
	/* Accordions::END */
	
	
	/* Testimonials */
    $(".testimonials_carousel").each(function(){
    	var is_auto_scroll = $(this).hasClass('auto_scroll');
	    $(this).jcarousel({
	    	auto: (is_auto_scroll ? 5 : 0),
	    	wrap: (is_auto_scroll ? "last" : ""),
	    	scroll: 1,
	    	easing: "easeInOutExpo",
	    	animation: 600
	    });
    });   
    /* Testimonials::END */
	
	
	/* Info Messages */
	$(".closable").each(function(){
		$(this).prepend('<a class="close_img"></a>');		
	});
	
	$(".close_img").click(function(){
		$(this).parent().fadeOut(600);
	});
	

	// Sidebar Menu effects
	$('.side_bar_menu a').not(".active").hover(
			function() {
				$(this).children('.hover_span').stop().animate({width:'100%'},500,'easeOutExpo');
			},
			function() {
				$(this).children('.hover_span').stop().animate({width:'0'},200,'easeOutExpo');
			}
	);	
	
	
	// Tabs
	$('.tabs a').tabs();
	
	
	// Tooltips
	$('.aqua_tooltip').tipsy({fade: true, gravity: 's'});
	
	
	// Slider
	$(window).load(function(){
	    $('.flexslider').flexslider({
		      animation: "slide",
		      controlNav: false,
		      start: function(slider){
		    	  $('body').removeClass('loading');
		      }
	    });
	 });
    // PrettyPhoto
    $(".pic a[rel^='prettyPhoto']").prettyPhoto({
		animation_speed:'normal',
		overlay_gallery: false,
		social_tools: false
	});
    
    
    // Resize Videos
    jQuery(function() {
        
        var $allVideos = jQuery("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed").not('.rev_slider iframe'),
        $fluidEl = jQuery(".video_max_scale");
    	    	
    	$allVideos.each(function() {
    	
    		jQuery(this)
    	    // jQuery .data does not work on object/embed elements
    	    .attr('data-aspectRatio', this.height / this.width)
    	    .removeAttr('height')
    	    .removeAttr('width');
    	
    	});
    	
    	jQuery(window).resize(function() {
    		
    	  $allVideos.each(function() {
  			
    		    var nWidth = $(this).parent().width();
    	    	var $el = jQuery(this);
    	    	$el
    	    	    .width(nWidth)
    	    	    .height(nWidth * $el.attr('data-aspectRatio'));
    	    	  
    	   });
    	
    	}).resize();

    });
    
    // Bar graph
    jQuery(".bar_graph li").each( function(){
    	var b_width = jQuery(this).find("span").attr("data-width");
    	jQuery(this).appear();
    	jQuery(this).on('appear', function(event, $all_appeared_elements) {
			if(jQuery(this).hasClass("animationBegin")){	
				jQuery(this).removeClass("animationBegin");
	    		jQuery(this).animate({opacity: 1},800,"easeOutCubic");
	        	jQuery(this).find("span").animate({width: b_width+"%"},1300,"easeOutCubic");
	        	jQuery(this).find("span strong").animate({opacity: 1},1300,"easeOutCubic");
			}
    	});
    });
    
    
        
});

/* TABS */
jQuery.fn.tabs = function() {
	var selector = this;
	
	this.each(function() {
		var obj = jQuery(this); 
		
		jQuery(obj.attr('href')).hide();
		
		jQuery(obj).click(function() {

			jQuery(obj).siblings().removeClass('selected');
			jQuery(obj.attr('href')).siblings('.tab-content').hide();
			
			jQuery(this).addClass('selected');
			
			jQuery(jQuery(this).attr('href')).fadeIn();
			
			return false;
		});
	});

	jQuery(this).show();
	jQuery(this).parent().children('a:first-child').click();
};


// Reload carousels on window resize
if (jQuery(".testimonials_carousel").length){
	jQuery(window).resize(function() {
		 var el = jQuery(".testimonials_carousel"), carousel = el.data('jcarousel'), win_width = jQuery(window).width();
		   carousel.options.visible = 1;
		   carousel.options.scroll = 1;
		   carousel.reload();
	});
}
