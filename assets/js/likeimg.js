$(function(){
	$(document).on('click','.like-btn', function(){
 		var sweat_id  = $(this).data('tweet');
		var user_id   = $(this).data('user');
		var counter   = $(this).find('.likes-count');
		var count     = counter.text();
		var button    = $(this);

		//     $.post('http://localhost/twitterclone/intel/ajax/like.php', {like:sweat_id, user_id:user_id}, function(){
 		// 	counter.show();
 		// 	button.addClass('unlike-btn');
		// 	button.removeClass('like-btn');
		// 	count++;
		// 	counter.text(count);
		// 	button.find('.fa-heart').addClass('fas');
        //     button.find('.fa-heart').removeClass('far');
        //     button.find('.fa-heart').removeClass('mt-icon-reaction');
        //  }); 

         $.ajax({
            type: "POST",
            url: "intel/ajax/likeimg.php",
            data: {like:sweat_id, user_id:user_id},
            cache: false,
            success: function(data){
            // var result =   $('.tmp').html();
              
               counter.text(data);
               button.addClass('unlike-btn');
               button.removeClass('like-btn');
               
               button.find('.fa-heart').addClass('fas');
               button.find('.fa-heart').removeClass('far');
               button.find('.fa-heart').removeClass('mt-icon-reaction');

              
            }
          })
        
       

          
	});

	$(document).on('click','.unlike-btn', function(){
        var sweat_id  = $(this).data('tweet');
		var user_id   = $(this).data('user');
		var counter   = $(this).find('.likes-count');
		var count     = counter.text();
		var button    = $(this);

		// $.post('http://localhost/twitterclone/intel/ajax/like.php', {unlike:sweat_id, user_id:user_id}, function(){
 		// 	counter.show();
 		// 	button.addClass('like-btn');
		// 	button.removeClass('unlike-btn');
		// 	count--;
		// 	if(count === 0){
		// 		counter.hide();
		// 	}else{
		// 	  counter.text(count);
		// 	}
		// 	  counter.text(count);
        //     button.find('.fa-heart').addClass('far');
        //     button.find('.fa-heart').addClass('mt-icon-reaction');
		// 	button.find('.fa-heart').removeClass('fas');
        // }); 
        $.ajax({
            type: "POST",
            url: "intel/ajax/likeimg.php",
            data: {unlike:sweat_id, user_id:user_id},
            cache: false,
            success: function(data){
            // var result =   $('.tmp').html();
               if (data == 0)
               counter.text('');
              else  counter.text(data);

               button.addClass('like-btn');
		       button.removeClass('unlike-btn');
               
                button.find('.fa-heart').addClass('far');
                button.find('.fa-heart').addClass('mt-icon-reaction');
                button.find('.fa-heart').removeClass('fas');

              
            }
          })     

	});
});