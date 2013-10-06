$(function(){
  $("#openAsteroidModal").on("click", function(){
    $("#asteroidModal").modal()
  });
  $("#asteroidModal").on("shown.bs.modal", function(){
    var game = new Asteroids.Game();
    game.start();
  });
});