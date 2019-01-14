$(document).ready(function(){
 //for the sticky navigation   
    $('.js--section-features').waypoint(function(direction){
        
        if(direction=='down'){
           // console.log('working');
            $('nav').addClass('sticky');
            $('#up').addClass('up1');
        }else{
         $('nav').removeClass('sticky'); 
         $('#up').removeClass('up1');
        }
    },{
      offset: '70px'  
    });
    
    
   $(".up").click(function() {
        $('html,body').animate({
            scrollTop: $(".header").offset().top
        }, 1000);
    });
        
     $(".js__scroll-to-plans").click(function() {
        $('html,body').animate({
            scrollTop: $(".js__section-plans").offset().top
        }, 1000);
    });
    
     $(".js__scroll-to-price").click(function() {
        $('html,body').animate({
            scrollTop: $(".js--section-features").offset().top
        }, 1000);
    });
    
/*Smooth Scroll-----------------------*/    
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });//smooth scroll
    
  $('.js__wp-1').waypoint(function(direction){
          $('.js__wp-1').addClass('animated fadeIn');               
   },{
      offset:'50%'
  });  
    
  $('.js__wp-2').waypoint(function(direction){
          $('.js__wp-2').addClass('animated fadeInUp');               
   },{
      offset:'50%'
  });
    
    
 $('.js__wp-3').waypoint(function(direction){
          $('.js__wp-3').addClass('animated fadeIn');               
   },{
      offset:'50%'
  });
    
    

     $('.js__wp-4').waypoint(function(direction){
          $('.js__wp-4').addClass('animated pulse');               
   },{
      offset:'50%'
  });
    
 
    $('.js__nav-icon').click(function(){
         var nav=$('.main-nav'); 
        var icon=$('#ion-icon');
        nav.slideToggle(200);
        if(icon.attr("name")=="reorder"){
             icon.attr("name","close"); 
        }else{
            icon.attr("name","reorder");
         }
        
       });
                            
                            
                            
    
    
});
















