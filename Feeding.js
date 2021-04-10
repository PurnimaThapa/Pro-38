class feed{
    constructor(){}   

    display(){
     
      var button=createButton("Feed the Dog");
      button.position(400,125);

      if(button.mousePressed(function(){
         FoodS=FoodS-1; 
         gameState=1;
         database.ref('/').update({'gameState':gameState});
      }));
      
      var addFood=createButton("Add Food");
      addFood.position(500,125);

      if(addFood.mousePressed(function(){
        FoodS=FoodS+1;
        gameState=2;
        database.ref('/').update({'gameState':gameState});
      }));
    }
}