class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset = createButton('Reset');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth - 120, 20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      PlayerCount+=1;
      player.index = PlayerCount;
      player.update();
      player.updateCount(PlayerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
      Player.updateCarsAtEnd(0);

      //To delete a column/child from the database
      database.ref('/').child("players").remove();
    })

  }
}
//  "/" --> refers to the main database in which the value you want to change is present
