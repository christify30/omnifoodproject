$(document).ready(function(){$(".js--section-features").waypoint(function(t){"down"==t?($("nav").addClass("sticky"),$("#up").addClass("up1")):($("nav").removeClass("sticky"),$("#up").removeClass("up1"))},{offset:"70px"}),$(".up").click(function(){$("html,body").animate({scrollTop:$(".header").offset().top},1e3)}),$(".js__scroll-to-plans").click(function(){$("html,body").animate({scrollTop:$(".js__section-plans").offset().top},1e3)}),$(".js__scroll-to-price").click(function(){$("html,body").animate({scrollTop:$(".js--section-features").offset().top},1e3)}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);(a=a.length?a:$("[name="+this.hash.slice(1)+"]")).length&&(t.preventDefault(),$("html, body").animate({scrollTop:a.offset().top},1e3,function(){var t=$(a);if(t.focus(),t.is(":focus"))return!1;t.attr("tabindex","-1"),t.focus()}))}}),$(".js__wp-1").waypoint(function(t){$(".js__wp-1").addClass("animated fadeIn")},{offset:"50%"}),$(".js__wp-2").waypoint(function(t){$(".js__wp-2").addClass("animated fadeInUp")},{offset:"50%"}),$(".js__wp-3").waypoint(function(t){$(".js__wp-3").addClass("animated fadeIn")},{offset:"50%"}),$(".js__wp-4").waypoint(function(t){$(".js__wp-4").addClass("animated pulse")},{offset:"50%"}),$(".js__nav-icon").click(function(){var t=$(".main-nav"),a=$("#ion-icon");t.slideToggle(200),"reorder"==a.attr("name")?a.attr("name","close"):a.attr("name","reorder")})});