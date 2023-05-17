$(function(){
	

		$(document).on('click','.view', function(){
			var sweat_id    = $(this).data('sweat');
			var user_id     = $(this).data('view');
			$counter        = $(this).find(".likes-count");
			$count          = $counter.text();
			$button         = $(this);
			
			
	   	console.log(sweat_id);
           console.log(user_id);
			$.post('intel/ajax/view.php', {showPopup:sweat_id,user_id:user_id}, function(data){
				$('.popupView').html(data);
				 
				$('.close-share-popup').click(function(){
					$('.share-popup').hide();
				})
			});
		});



	$(document).one('click', '.view-it', function(event){
		$('.share-popup').addClass('active');
		var sweat_id   = $(this).data('sweat');
		var user_id    = $(this).data('view');
		// var flag   = $(this).data('tmp');
		// var qoq   = $(this).data('qoq');
		
	

		// tricky hint each function to select one class only
       var view ;
		$('.share-msg').each(function(){
		view =	$(this).val()
		});
        // event.stopImmediatePropagation();
		
		// console.log(sweat_id);
		// console.log(user_id);
        // console.log(view);
	
	    $.post('intel/ajax/view.php', {qoute:sweat_id,user_id:user_id,view:view}, function(data){
			
		   $('.share-popup').hide();
           $('.views').html(data);

	   location.reload();
	   
	    	// $counter.text(data);
	    	// $button.removeClass('share').addClass('shareed');
	    });

	});




    $(document).on('click','.reply', function(){
        var sweat_id    = $(this).data('sweat');
        var user_id     = $(this).data('view');
        $counter        = $(this).find(".likes-count");
        $count          = $counter.text();
        $button         = $(this);
        
        
       console.log(sweat_id);
       console.log(user_id);
        $.post('../intel/ajax/view.php', {showReply:sweat_id,user_id:user_id}, function(data){
            $('.popupView').html(data);
             
            $('.close-share-popup').click(function(){
                $('.share-popup').hide();
            })
        });
    });



$(document).one('click', '.reply-it', function(event){
    $('.share-popup').addClass('active');
    var view_id   = $(this).data('sweat');
    var user_id    = $(this).data('view');
    // var flag   = $(this).data('tmp');
    // var qoq   = $(this).data('qoq');
    


    // tricky hint each function to select one class only
   var view ;
    $('.share-msg').each(function(){
    view =	$(this).val()
    });
    // event.stopImmediatePropagation();
    
    // console.log(view_id);
    // console.log(user_id);
    // console.log(view);

    $.post('../intel/ajax/view.php', {reply:view_id,user_id:user_id,view:view}, function(data){
        
       $('.share-popup').hide();
       $('.views').html(data);

   location.reload();
   
        // $counter.text(data);
        // $button.removeClass('share').addClass('shareed');
    });

});
});