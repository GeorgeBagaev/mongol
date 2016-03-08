$(document).ready(function(){

// scroll

$('.main-navigation-list-item a').click(function(event) {
event.preventDefault();
var href=$(this).attr('href');
var target=$(href);
var top=target.offset().top;
$('html,body').animate({
scrollTop: top
}, 1200);
});


//timer
$("#getting-started")
.countdown("2016/03/27", function(event) {
	$(this).text(
	 event.strftime('%D дней %H часа %M минут %S секунд')
	  );
	});

// carousel


  $(".slider").owlCarousel({
  	items : 4,
  	navigation: true,
  	navigationText: ["",""],
  	pagination: false,
  	itemsDesktopSmall : [1024,3],
  	itemsMobile : [320,1],
  	 autoPlay : true,
    stopOnHover : true,
      responsive:{
        320:{
            items:1,
            nav:true
        },
        750:{
            items:3,
            nav:false,
            loop:true,
            dots: true,
            dotsEach: true
        },
        970:{
            items:4,
            nav:true,
            loop:true,
            margin: 12,
        },
        1200:{
            items:4,
            nav:true,
            loop:false
        }
    }
  });


});