$(function(){

$(document).on('click','.subscribe-btn', function(e){
    let subscribe_id    = $(this).data('subscribe');
    let user    = $(this).data('user');
    let profile    = $(this).data('profile'); 
    let Subscribed , subscribers;
    
    $button = $(this);
    if($button.hasClass('subscribe')) {
        // alert(subscribe_id);
      $.post('core/ajax/subscribe.php', {subscribe:subscribe_id}, function(data){
			//  alert(data);
                $button.addClass('Subscribed');
                $button.removeClass('subscribe');
                $button.text("Subscribed");
                if (user == profile && profile != null) {
                 Subscribed = $('.count-Subscribed').html() ;
                 Subscribed++;
                 $('.count-Subscribed').html(Subscribed);
                }
                if (profile == null)
                    $('.count-subscribers').html(data);
            
        // $counter.text(data);
        // $button.removeClass('retweeted').addClass('retweet');
        // $c.removeClass('retweeted-i').addClass('retweet-i');			

     });
    } else {
        $.post('core/ajax/subscribe.php', {unsubscribe:subscribe_id}, function(data){
            $button.addClass('subscribe');
            $button.removeClass('Subscribed');
            $button.text("subscribe");
              
            if (user == profile && profile != null) {
                Subscribed = $('.count-Subscribed').html() ;
                Subscribed--;
                $('.count-Subscribed').html(Subscribed);
               }
               if (profile == null)
                   $('.count-subscribers').html(data);

          
            // $counter.text(data);
            // $button.removeClass('retweeted').addClass('retweet');
            // $c.removeClass('retweeted-i').addClass('retweet-i');			
    
         });
    }
     


});

$(document).on('mouseover' , '.Subscribed' , function(e) {
         
    $(this).html("Unsubscribe");

});
$(document).on('mouseout' , '.Subscribed' , function(e) {
         
    $(this).html("Subscribed");

});


});