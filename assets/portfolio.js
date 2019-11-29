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
  $("#asteroidModal").on("shown.bs.modal", function(){
    if (!faviconSnake) {
      JsSnake.SnakeGame.snake_game(new JsSnake.FaviconDisplay.FaviconDisplay(document))
      faviconSnake = true;
    }
  });
  var canvasSnake;
  $("#asteroidModal").on("shown.bs.modal", function(){
    if (!canvasSnake) {
      JsSnake.SnakeGame.snake_game(new JsSnake.CanvasDisplay.CanvasDisplay(document.getElementById('snake-game-target')))
      asteroidGame = true;
    }
  });
});