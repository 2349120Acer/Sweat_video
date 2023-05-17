$(function(){
	

		$(document).on('click','.view', function(){
			var tweet_id    = $(this).data('tweet');
			var user_id     = $(this).data('user');
			$counter        = $(this).find(".likes-count");
			$count          = $counter.text();
			$button         = $(this);
			
			
	   	console.log(tweet_id);
           console.log(user_id);
			$.post('core/ajax/view.php', {showPopup:tweet_id,user_id:user_id}, function(data){
				$('.popupView').html(data);
				 
				$('.close-retweet-popup').click(function(){
					$('.retweet-popup').hide();
				})
			});
		});



	$(document).one('click', '.view-it', function(event){
		$('.retweet-popup').addClass('active');
		var tweet_id   = $(this).data('tweet');
		var user_id    = $(this).data('user');
		// var flag   = $(this).data('tmp');
		// var qoq   = $(this).data('qoq');
		
	

		// tricky hint each function to select one class only
       var view ;
		$('.retweet-msg').each(function(){
		view =	$(this).val()
		});
        // event.stopImmediatePropagation();
		
		// console.log(tweet_id);
		// console.log(user_id);
        // console.log(view);
	
	    $.post('core/ajax/view.php', {qoute:tweet_id,user_id:user_id,view:view}, function(data){
			
		   $('.retweet-popup').hide();
           $('.views').html(data);

	   location.reload();
	   
	    	// $counter.text(data);
	    	// $button.removeClass('retweet').addClass('retweeted');
	    });

	});




    $(document).on('click','.reply', function(){
        var tweet_id    = $(this).data('tweet');
        var user_id     = $(this).data('user');
        $counter        = $(this).find(".likes-count");
        $count          = $counter.text();
        $button         = $(this);
        
        
       console.log(tweet_id);
       console.log(user_id);
        $.post('../core/ajax/view.php', {showReply:tweet_id,user_id:user_id}, function(data){
            $('.popupView').html(data);
             
            $('.close-retweet-popup').click(function(){
                $('.retweet-popup').hide();
            })
        });
    });



$(document).one('click', '.reply-it', function(event){
    $('.retweet-popup').addClass('active');
    var view_id   = $(this).data('tweet');
    var user_id    = $(this).data('user');
    // var flag   = $(this).data('tmp');
    // var qoq   = $(this).data('qoq');
    


    // tricky hint each function to select one class only
   var view ;
    $('.retweet-msg').each(function(){
    view =	$(this).val()
    });
    // event.stopImmediatePropagation();
    
    // console.log(view_id);
    // console.log(user_id);
    // console.log(view);

    $.post('../core/ajax/view.php', {reply:view_id,user_id:user_id,view:view}, function(data){
        
       $('.retweet-popup').hide();
       $('.views').html(data);

   location.reload();
   
        // $counter.text(data);
        // $button.removeClass('retweet').addClass('retweeted');
    });

});
});