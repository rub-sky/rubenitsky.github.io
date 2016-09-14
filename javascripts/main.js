//console.log('This would be the main JS file.');

$(document).ready(function(){
  var menuContact = $("#menuContact");
  var menuAbout = $("#menuAbout");

 // Contact info toggle
  menuContact.click(function(){
    $("#contactPanel").slideToggle();
  });

 // About section toggle
 menuAbout.click(function() {
    $("#aboutPanel").slideToggle();
 });

  // Project page side menu
  $(".sidemenu").click(function(){
      var itemId = $(this).data("item");

      // Set the item to be active after removing other active items.
      $(".sidemenu.active").removeClass("active").removeClass("left-border-emph");
      $(this).addClass("active").addClass("left-border-emph");

      // Hide the previous pane
      $(".pane:visible").each(function(){
          $(this).hide()
      });

      // Show the selected Item pane
      $("#"+itemId).show();
  });
});
