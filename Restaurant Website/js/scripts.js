
        $(document).ready(function(){
            $('#myCarousel').carousel( { interval: 1000 } );

            $('#carousel_button').click(function(){

                if($('#carousel_button').children('span').hasClass('fa-pause'))
                {
                $('#myCarousel').carousel('pause');
                $('#carousel_button').children('span').removeClass('fa-pause');
                $('#carousel_button').children('span').addClass('fa-play');
                }

                else if($('#carousel_button').children('span').hasClass('fa-play'))
                {
                $('#myCarousel').carousel('cycle');
                $('#carousel_button').children('span').removeClass('fa-play');
                $('#carousel_button').children('span').addClass('fa-pause');
                }
            });
           $('#login').click(function(){
           $('#loginModal').modal('show');
           $('#close_button').click(function(){
               $('#loginModal').modal('hide');
           });
           });   
           
           $('#reserve_form').click(function(){
               $('#main_modal').modal('show');
           $('#reserve_close').click(function(){
               $('#main_modal').modal('hide');
           })

           })
        });
   