/* $(function() {
    var topoffset = 70; //variable for menu height
  
    //Use smooth scrolling when clicking on navigation
    $('.navbar-nav a').click(function() {
      if (location.pathname.replace(/^\//,'') === 
        this.pathname.replace(/^\//,'') && 
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-topoffset
          }, 500);
          return false;
        } //target.length
      } //click function
    }); //smooth scrolling
  
  }); */


  $(document).ready(function() {

    $("#design").click(function() {
      $("#designtxt").toggle()
      $("#designimg").toggle()
    })
  
    $("#development").click(function() {
      $("#developtxt").toggle()
      $("#developimg").toggle()
    })
  
    $("#product").click(function() {
      $("#producttxt").toggle()
      $("#productimg").toggle()
    })
  
    // $('[data-toggle="tooltip"]').tooltip();


    $(".heffect").each(function() {
      console.log("heffect");
      $(this).hover(function() {
        console.log("hover");
        $(this).find("img.imgeffect").animate({
          height: "toggle"
        });
        $(this).find("p.texteffect").removeClass("text-hide");


      } );
      $(this).mouseleave(function(){
        console.log("mouseleave");
        $(this).find("p.texteffect").addClass("text-hide");
      });
    });
  
  });
  


  