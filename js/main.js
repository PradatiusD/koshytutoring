$(document).ready(function() {
//To make about and contact hover down
	// $("#about").hover(
	// 	  function () {
	// 	    $("#about-below").slideDown("slow")
	// 	  },
	// 	  function () {
	// 	    $("#about-below").slideUp("fast")
	// 	  }
	// );
	// $("#contact").hover(
	// 	  function () {
	// 	    $("#contact-below").slideDown("slow")
	// 	  },
	// 	  function () {
	// 	    $("#contact-below").slideUp("fast")
	// 	  }
	// );
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
		 //  var arr = ["We have known Achamma Koshy for almost 20 years now.  Four of our five children have been blessed with the opportunity to learn with and from Mrs. Koshy. She is a passionate educator who shapes each individual child, encouraging him or her to become a confident learner.  Mrs. Koshy has worked to maximize our children’s unique strengths and to provide them with strategies to support their areas of challenge.  We wholeheartedly recommend Mrs. Koshy as a highly qualified and caring professional with expertise across all curricular areas.","Mrs. Koshy is a miracle worker.  She took our little girl from way-behind in math and reading to way-ahead in just a few short months.  She seems to be able to bring out the best in children and we warmly recommend her to any parents."];
		 //  var arrAuthor = ["Dr. Andrea Romani, MD, PhD Associate Professor, Case Western Reserve University & Jeanne M. Romani, EdS, CCC/SLP, ECIS", "Dr. Steven Brown, Professor Graduate School of Education, Kent State University and Casey Brown, retired middle school teacher (30 years), Cuyahoga Falls Schools"]
		 //  var index = 0;
		 //  $('#next').click(function(){ 
		 //    $('#quote').text(arr[index]);
		 //    $('#quoteAuthor').text(arrAuthor[index]);  
		 //    index = (index + 1) % arr.length ;
		 // });
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