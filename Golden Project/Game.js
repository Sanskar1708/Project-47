class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      player1 = createSprite(1350,1474,10,10);
      player1.addImage(playerImage);
      player1.scale = 0.5;
      }
      
      play() {
      form.hide();
      Player.getPlayerInfo();
      
      console.log(allPlayers.length);

        if(allPlayers !== undefined /*&& allPlayers.length !== 0 */){
          
          image(background1,0,0,width,height);
          
          
          spawnMonster1();
          spawnMonster2(); 
          spawnMonster3(); 
          spawnMonster4(); 

          monster1Group.bounceOff(wallGroup);
          monster2Group.bounceOff(wallGroup);
          monster3Group.bounceOff(wallGroup);
          monster4Group.bounceOff(wallGroup);

        if (monster1Group.isTouching(player1) || monster2Group.isTouching(player1) || monster3Group.isTouching(player1) || monster4Group.isTouching(player1)) {
          monster1Group.destroyEach(); 
          monster2Group.destroyEach();
          monster3Group.destroyEach();
          monster4Group.destroyEach();
          GameOver.addImage(GameOverloseImage);
          player1.destroy();
          gameState = 2;
        }



        if (keyIsDown(UP_ARROW)) {
            player1.y = player1.y - 20
            player.x = player1.x
            player.y = player1.y
            player.update()
          }
        
          if (keyIsDown(DOWN_ARROW)) {
            player1.y = player1.y + 20
            player.x = player1.x
            player.y = player1.y
            player.update()
          }
        
          if (keyIsDown(LEFT_ARROW)) {
            player1.x = player1.x - 20
            player.x = player1.x
            player.y = player1.y
            player.update()
          }
        
          if (keyIsDown(RIGHT_ARROW)) {
            player1.x = player1.x + 20
            player.x = player1.x
            player.y = player1.y
            player.update()
          }
        
          player1.bounceOff(wallGroup);
     }
     drawSprites()
 }
     end() {
     GameOver.visible = true
     
     }
}