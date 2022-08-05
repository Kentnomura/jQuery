$(function() {
  // 「#language-wrapper」にhoverしたときのhoverイベントを作成してください
  $("#language-wrapper").hover(
    function(){
      $(".language-text").fadeIn();
    },
    function(){
      $(".language-text").fadeOut();
    }
  );
  $("#hide-text").click(function(){
    $("#text").slideUp('slow');
  });

  $("#change-text").click(function(){
    $("#text-chenge").text("Hello World");
  });

});

