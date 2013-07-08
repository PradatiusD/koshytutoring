$(document).ready(function() {
//To do the same thing as above but on click
	$("#about").click(function(){
		$("#contact-below").slideUp("fast", function(){
			$("#about-below").slideDown()
		})
	});
		$("#contact").click(function(){
		$("#about-below").slideUp("fast", function(){
			$("#contact-below").slideDown()
		})
	})
//To make blockquote cycle on click

// Before making images change on hover, preload them
var preloads = [
          '/img/mathematicscolor.jpg',
          '/img/SATcolor.jpg',
          '/img/readingcolor.jpg'
      ];

$(preloads).each(function(){
    $('<img />')[0].src = this;
});

//To make images change on hover
  $('.chama').hover(
      function(){var oldsource = $(this).attr("src");
      var oldmod = oldsource.substring(0, oldsource.length - 4);
      var newend = "color.jpg";
      var newimgsrc = oldmod + newend ;
      window.oldsource = oldsource
      $(this).attr("src", newimgsrc);
    }, function(){
      $(this).attr("src",oldsource);
  })
 //To cycle divs continuously 

 var el = $('.testimonial-slides div');
var i = 0;

function loop(){
  el.eq(i).fadeIn(800, function() {
    var li = $(this);     
    setTimeout(function(){ li.fadeOut(800, function() { 
        i = ++i % el.length;
        loop();
      });
    },9000);
  });
}
loop();
//smooth scroll to subjects
 $('.subjects').click(function(){
 	$('html, body').animate({
	scrollTop: $("#subjects").offset().top
}, 2000);
 });
//bottom scroll to top
 $('.totop').click(function(){
 	$('html, body').animate({
	scrollTop: $("#totop").offset().top
}, 2000);
 });

});