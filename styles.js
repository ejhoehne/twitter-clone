$(function() {
	$('#tweet-left').focus(function(e) {
    	$('#tweet-left').css({
    		"height": "106px", 

			});
    	$('.tweet-controls').css({
    		"visibility": "visible",
    	});
   	$('#tweet-left').blur(function(e) {
   			$('#tweet-left').css ({
   				"height":"53px", 
   			});
   			$('tweet-controls').css ({
   				"visibility": "hidden",
   			});
   	})
    	
		var supportOnInput = 'oninput' in document.createElement('input.tweet-compose');

	$("input.tweet-compose[maxlength]").each(function() {
   	var $this = $(this);
    var maxLength = parseInt($this.attr('maxlength'));
    $this.attr('maxlength', null);
    
     var el = $(".char-count");
   
    
     $this.bind(supportOnInput ? 'input.tweet-compose' : 'keyup', function() {
         var cc = $this.val().length;
        
         el.text(maxLength - cc);
        
         if((maxLength-11) < cc) {
             el.css('color', 'red');
             if (maxLength <cc) {
             	$('.tweet-controls').css({
             		"visibility":"hidden",
             	});
             }
         } 
         else {
             el.css('color', 'gray');
             $('.tweet-controls').css ({
             		"visibility":"visible", 
             });
        }
    
 });
 });
	});

$(".tweet-controls button").click(function(){
	var newTweetElement= $("#tweet-left.tweet-compose").val();
	$("#tweet-left.tweet-compose").val("");
	var newTweetElement= $(".stream .tweet:first-child").clone(".tweet").prependTo(".stream"); 
	newTweetElement.find(".tweet-text").text(newTweetElement);
	var newProfileSrc = $(".dashboard .avatar").attr("src");
	newTweetElement.find(".avatar").attr(newProfileSrc);



}); 

    });

