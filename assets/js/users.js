$(function(){
	

    $(document).on('click','.retweets-u', function(){
        var tweet_id    = $(this).data('tweet');
      
        
    //    console.log(tweet_id);
    
        $.post('intel/ajax/users.php', {retweetby:tweet_id}, function(data){
            $('.popupUsers').html(data);
             
            $('.close-retweet-popup').click(function(){
                $('.retweet-popup').hide();
            })
            $(document).click(function(e){
				if( $(e.target).closest('.retweet-popup-body-wrap').length > 0 ) {
					return false;
				}
			    
				$('.retweet-popup').hide();
			})
        });
    });

    $(document).on('click','.likes-u', function(){
        var tweet_id    = $(this).data('tweet');
      
        
    //    console.log(tweet_id);
    
        $.post('intel/ajax/users.php', {likeby:tweet_id}, function(data){
            $('.popupUsers').html(data);
             
            $('.close-retweet-popup').click(function(){
                $('.retweet-popup').hide();
            })
            $(document).click(function(e){
				if( $(e.target).closest('.retweet-popup-body-wrap').length > 0 ) {
					return false;
				}
			    
				$('.retweet-popup').hide();
			})
        });
    });

    $(document).on('click','.count-subscribed-i', function(){
        var user_id    = $(this).data('subscribe');
      
       

    
        $.post('intel/ajax/users.php', {subscribed:user_id}, function(data){
            $('.popupUsers').html(data);
             
            $('.close-retweet-popup').click(function(){
                $('.retweet-popup').hide();
            })
            $(document).click(function(e){
				if( $(e.target).closest('.retweet-popup-body-wrap').length > 0 ) {
					return false;
				}
			    
				$('.retweet-popup').hide();
			})
        });
    });

    $(document).on('click','.count-subscribers-i', function(){
        var user_id    = $(this).data('subscribe');
      
        
  
    
        $.post('intel/ajax/users.php', {subscriber:user_id}, function(data){
            $('.popupUsers').html(data);
             
            $('.close-retweet-popup').click(function(){
                $('.retweet-popup').hide();
            })
            $(document).click(function(e){
				if( $(e.target).closest('.retweet-popup-body-wrap').length > 0 ) {
					return false;
				}
			    
				$('.retweet-popup').hide();
			})
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
    $.post('intel/ajax/comment.php', {showReply:tweet_id,user_id:user_id}, function(data){
        $('.popupComment').html(data);
         
        $('.close-retweet-popup').click(function(){
            $('.retweet-popup').hide();
        })
    });
});




});