/* ==========================================================================
   Pre-Loader
   ========================================================================== */

$(window).on('load', function(){ // makes sure the whole site is loaded
    "use strict";
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
})

$(document).ready(function(){
  $('#isotope').masonry()
})

/* ==========================================================================
   Widget Toggle
   ========================================================================== */

// $(function() {
//     $('#widget a.toggle').click(function(e){
//         e.preventDefault();
//         $(this).prev("div.widget_container").slideToggle(200);
//     });
// });

/* ==========================================================================
   Parallax Header
   ========================================================================== */

var $window = $(window);
var scrollFade = function ($element, friction, offset) {
  friction  = (friction  === undefined)? 0.45 : friction;
  offset = (offset === undefined)? 0 : offset;

  var parentHeight = $element.parent().outerHeight() * 0.45;
  var previousOpacity = Infinity;

  $window.scroll(function() {
    var scrollTop = Math.max(0, $window.scrollTop())
      , yOffset   = ($element.outerHeight() * -0.45) + scrollTop * friction
      , opacity   = 1 - (scrollTop / parentHeight - (parentHeight * offset))

    if (opacity < 0 && previousOpacity < 0) return;

    $element.css({
      transform: 'translate3d(0px,'+ yOffset +'px, 0)',
      opacity: opacity
    });

    previousOpacity = opacity;
  });
}

scrollFade($('header article')
  , 0.7  // Friction (0 ~ 1): lower = none
  , 0    // Fade duration (0 ~ 1): lower = longer
);

/* ==========================================================================
   Scroll To Navigation
   ========================================================================== */

// $(function() {
//     $('nav ul li a').bind('click',function(event){
//         var $anchor = $(this);
        
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 2000,'easeInOutExpo');
//         event.preventDefault();
//     });
// });

// $('.ribbon').click(function (e) {
//     //e.stopPropagation();
//     $('body,html').animate({ scrollTop: 0 });
//     //return false;
// });

// (function($) {

//   *
//    * Copyright 2012, Digital Fusion
//    * Licensed under the MIT license.
//    * http://teamdf.com/jquery-plugins/license/
//    *
//    * @author Sam Sehnert
//    * @desc A small plugin that checks whether elements are within
//    *     the user visible viewport of a web browser.
//    *     only accounts for vertical position, not horizontal.
   

//   $.fn.visible = function(partial) {
    
//       var $t            = $(this),
//           $w            = $(window),
//           viewTop       = $w.scrollTop(),
//           viewBottom    = viewTop + $w.height(),
//           _top          = $t.offset().top,
//           _bottom       = _top + $t.height(),
//           compareTop    = partial === true ? _bottom : _top,
//           compareBottom = partial === true ? _top : _bottom;
    
//     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

//   };
    
// })(jQuery);

// $(window).scroll(function(event) {
  
//   $("section").each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("animated"); 
//     } 
//   });
  
// });

/* ==========================================================================
   Scroll To Navigation
   ========================================================================== */

// Cache selectors
// var lastId,
//     topMenu = $("#top-menu"),
//     topMenuHeight = topMenu.outerHeight()+35,
//     // All list items
//     menuItems = topMenu.find("a"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function(){
//       var item = $($(this).attr("href"));
//       if (item.length) { return item; }
//     });

// Bind click handler to menu items
// so we can get a fancy scroll animation
// menuItems.click(function(e){
//   var href = $(this).attr("href"),
//       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//   $('html, body').stop().animate({ 
//       scrollTop: offsetTop
//   }, 600);
//   e.preventDefault();
// });

// Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;
   
//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";
   
//    if (lastId !== id) {
//        lastId = id;
//        // Set/remove active class
//        menuItems
//          .parent().removeClass("active")
//          .end().filter("[href=#"+id+"]").parent().addClass("active");
//    }                   
// });

/* ==========================================================================
   Mobile Navigation
   ========================================================================== */

// $("<select />").appendTo("nav");

// // Create default option "Go to..."
// $("<option />", {
//    "selected": "selected",
//    "value"   : "",
//    "text"    : "Go to..."
// }).appendTo("nav select");

// // Populate dropdown with menu items
// $("nav ul li a").each(function() {
//  var el = $(this);
//  $("<option />", {
//      "value"   : el.attr("href"),
//      "text"    : el.text()
//  }).appendTo("nav select");
// });
// $("nav select").change(function() {
//   window.location = $(this).find("option:selected").val();
// });

// (function ($) {
//   // hash change handler
//   function hashchange () {
//     var hash = window.location.hash
//       , el = $('ul.tabs [href*="' + hash + '"]')
//       , content = $(hash)

//     if (el.length && !el.hasClass('active') && content.length) {
//       el.closest('.tabs').find('.active').removeClass('active');
//       el.addClass('active');
//       content.show().addClass('active').siblings().hide().removeClass('active');
//     }
//   }

//   // listen on event and fire right away
//   $(window).on('hashchange.skeleton', hashchange);
//   hashchange();
//   $(hashchange);
// })(jQuery);

/* ==========================================================================
   Social Places / Brands
   ========================================================================== */

// if($('.social-wrapper .social').length == true) {
//     var brandsWrapper = $('.social-wrapper .social'),
//         brandsHeight = parseInt(brandsWrapper.css('height').replace('px', '')),
//         brandsWidth = brandsWrapper.width(),
//         brandNode = brandsWrapper.find('div'),
//         showMore = $('<a>', {
//                         'class': 'show-more',
//                         'href': '#',
//                         'html': '<span>Show more</span><i class="fa fa-angle-down"></i>'
//                     }),
//         showLess = $('<a>', {
//                         'class': 'show-less',
//                         'href': '#',
//                         'html': '<span>Show less</span><i class="fa fa-angle-up"></i>'
//                     }),
//         trueBrandsWidth = 0,
//         brandNodeMarginTop,
//         brandNodeMarginLeft,
//         trueBrandsHeight;

//     // Waiting for images loaded
//     // and calculate true width brands wrapper
//     $(window).load(function(){
//         brandNode.each(function(i){

//             // Margin top css value
//             brandNodeMarginTop = parseInt($(this).css('marginTop').replace('px', '') * 2);
//             // Margin left css value
//             brandNodeMarginLeft = parseInt($(this).css('marginLeft').replace('px', '') * 2);

//             // Calculate true width
//             trueBrandsWidth += ($(this).width() + brandNodeMarginLeft) + (brandNode.length * 5);

//             // Calculate true height
//             trueBrandsHeight = Math.ceil(trueBrandsWidth / brandsWidth) * ($(this).height() + brandNodeMarginTop);

//             // If brands wrapper width is outer container, add show more button
//             if((trueBrandsWidth) >= brandsWidth) {
//                 brandsWrapper.after(showMore).after(showLess);
//                 showLess.hide();
//             }
//         });
//     });

//     // Show more toggle button click
//     showMore.click(function(){

//         // Expand wrapper
//         brandsWrapper.css({height: trueBrandsHeight + 20});
//         showMore.hide();
//         showLess.show();

//         return false;
//     });

//     // Show less button
//     showLess.click(function(){

//         // Collapse wrapper
//         brandsWrapper.css({height: brandsHeight});
//         showLess.hide();
//         showMore.show();

//         return false;
//     });
// }

/* ==========================================================================
   Animated Skillbars
   ========================================================================== */

// function isScrolledIntoView(id){
//     var elem = "#" + id;
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();

//     if ($(elem).length > 0){
//         var elemTop = $(elem).offset().top;
//         var elemBottom = elemTop + $(elem).height();
//     }

//     return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
//       && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
// }

// $(window).scroll(function(){
//     $('.skillbar').each(function(){
//         if ($(this).hasClass('notinview')){
//             $(this).find('.pointerval .value').html('0%');
//             if (isScrolledIntoView($(this).attr('id'))){
//                 $(this).removeClass('notinview');
//                 $(this).find('.skill-bar-percent').animate({
//                     width:jQuery(this).closest('.skillbar').attr('data-percent')
//                 },{
//                     duration : 2000, //the duration in ms of the bar animation
//                     easing: 'easeInOutExpo', //the easing effect of the animation
//                     step: function(now, fx){
//                         $(this).siblings('.pointerval').css('left',parseFloat(now, 10)+'%').find('.value').text(parseInt(now, 10)+'%');
//                     }
//                 });       
//             }
//         }
//     });
// });

// function sliding_horizontal_graph(id, speed){
//     $("#" + id + " li span").each(function(i){                                  
//         var cur_li = $("#" + id + " li").eq(i).find("span");
//         var w = cur_li.attr("title");
//         cur_li.animate({width: w + "%"}, speed);
//     })
// }
// function graph_init(id, speed){
//     $(window).scroll(function(){
//         if ($('#'+id).hasClass('notinview')){       
//             if (isScrolledIntoView(id)){
//                 $('#'+id).removeClass('notinview');
//                 sliding_horizontal_graph(id, speed);
//             }
//         }
//     });
    
//     if (isScrolledIntoView(id)){
//         sliding_horizontal_graph(id, speed);
//     }
// }





/* ==========================================================================
   Intialize Bootstrap JS
   ========================================================================== */

// !function ($) {

//     $(function () {

//         var $window = $(window)

//         // make code pretty
//         window.prettyPrint && prettyPrint()

//         // add-ons
//         $('.add-on :checkbox').on('click', function () {
//             var $this = $(this)
//         , method = $this.attr('checked') ? 'addClass' : 'removeClass'
//             $(this).parents('.add-on')[method]('active')
//         })

//         // popover 
//         $("a[rel=popover]")
//             .popover()
//             .click(function (e) {
//                 e.preventDefault()
//             })

//         // carousel         
//         // $('#slider').carousel({
//         //     interval: 4000
//         // });

//         // parallax         
//         $('#parallax').carousel();
        
//         // testimonials
//         $('.testimonials').carousel({
//             interval: 4000, 
//             pause: "false"
//         });
        
//         // scrollspy
//         $('[data-spy="scroll"]').each(function () {
//           var $spy = $(this).scrollspy('refresh');
//         });
        
//         // nav affix
//         // $('nav').affix({
//         //     offset: {
//         //         top: $('header').height()
//         //     }
//         // }); 
//     })

// } (window.jQuery)


/* ==========================================================================
   Simple Form - Contact Form
   ========================================================================== */

$('#contactForm').submit(function(){
  $.ajax({
    dataType: 'jsonp',
    url: "http://getsimpleform.com/messages/ajax?form_api_token=db43324d01c3a99e4a03fb9e0335d5c5",
    data: $("#contactForm").serialize(),
    error: function() {
      $('#contactForm').hide();
      $('#formErrorMessage').show();
    }
  }).done(function() {
    //callback which can be used to show a thank you message
    //and reset the form
    $('#contactForm').hide();
    $('#formSuccessMessage').show();
  });
  return false; //to stop the form from submitting
});

/* ==========================================================================
   Header slider
   ========================================================================== */

$('#slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  draggable: false
});

/* ==========================================================================
   Project details
   ========================================================================== */

// $('#projects a').on('click', function(){
//     var $data = $(this).data();
//     if ($(this).hasClass('openBox')) {
//       $('#openBox' + $data.id).remove();
//       $(this).removeClass('openBox');
//     } else {
//       $(this).addClass('openBox');
//       var $detailsBox = "<ul class='filter-web' id='openBox" + $data.id +"'>" + $data.link + "</ul>";
//       $(this).parent('.filter-web').append($detailsBox);
//     }
// });

var $filtered_grid = $('#isotope').isotope({
  // options
  itemSelector: '.isotope-item',
  // layoutMode: 'fitRows',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.isotope-sizer'
  }
});

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  $('.filter-button-group .active').toggleClass('active');
  $(this).toggleClass('active');

  var filterValue = $(this).attr('data-filter');
  $filtered_grid.isotope({ filter: filterValue });
});




