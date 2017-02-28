$(document).ready(function(){
  // Create a new item
  $("button").click(function() {
    var input = $("#input").val();

    if (input === '')
      alert("Don't you need to do something?");
    else {
      var li = $("<li>").text(input);
      $("#input").val("");
      $(".begin").css("display","none");
      var span = $("<span>").addClass("close").text("\u00D7");
      $(li).append(span);
      $(li).prependTo("#myList").hide().slideDown("slow");
    }
  });

  // Press enter to add item
  $("#input").keypress(function (e) {
    if (e.which == 13) {
      $("button").click();
      return false;
    }
  });

  // Check items
  $("#myList").on("click", "li", function(e) {
    $(this).toggleClass("checked");
  });

  // Delete items
  $("#myList").on("click", ".close", function(e) {
    $(this).parent().animate({width: '0px'}, "slow", function() {
      if ($(this).parent().children().length == 1)
        $(".begin").css("display","block");
      $(this).remove();
    });

    e.stopPropagation();
  });
});
