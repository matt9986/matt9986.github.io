$(function(){
  var asteroidGame;
  $("#asteroidModal").on("shown.bs.modal", function(){
    if (asteroidGame) {
      asteroidGame.restart();
    }else{
      asteroidGame = new Asteroids.Game();
      asteroidGame.start();
    }
  });
  var faviconSnake;
  $("#faviconSnake").on("shown.bs.modal", function(){
    if (!faviconSnake) {
      JsSnake.SnakeGame.snake_game(new JsSnake.FaviconDisplay.FaviconDisplay(document))
      faviconSnake = true;
    }
  });
  var modalSnake;
  $("#modalSnake").on("shown.bs.modal", function(){
    if (!modalSnake) {
      JsSnake.SnakeGame.snake_game(new JsSnake.CanvasDisplay.CanvasDisplay(document.getElementById('snake-game-target')))
      modalSnake = true;
    }
  });
});