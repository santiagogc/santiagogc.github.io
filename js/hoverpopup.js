 $('#hoverMe').hover(function() {
     $('#tooltip').stop().fadeIn(1000);
     $('#blurAll').stop().fadeIn(1000);
     //DISABLE SCROLL
     $('html, body').css({
         'overflow': 'hidden',
         'height': '100%'
     });
     //
 }, function() {
     $(document).keydown(function(e) {
         if (e.keyCode == 27) { // escape key maps to keycode `27`
             $('#tooltip').stop().fadeOut(1000);
             $('#blurAll').stop().fadeOut(1000);
             // RESTORE SCROLL
             $('html, body').css({
                 'overflow': 'auto',
                 'height': 'auto'
             });
             //
         }
     });
 });
