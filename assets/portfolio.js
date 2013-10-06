$(function(){
  $("#openAsteroidModal").on("click", function(){
    $("#asteroidModal").modal()
  });
  var game;
  $("#asteroidModal").on("shown.bs.modal", function(){
    if (game) {
      game.restart();
    }else{
      game = new Asteroids.Game();
      game.start();
    }
  });
});