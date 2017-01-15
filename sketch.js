

var buttonsArray = [];
var options = [];
var numberOpt,choiceWeight;

function setup() {
  
  createCanvas(screen.width,screen.height);

//valores de los botones, elegidos al azar
  numberOpt = 4
  for (i=0;i<numberOpt;i++){
  options[i]=floor(random(3500));
  }


  for (i=0;i<numberOpt;i++){
    
// Parte de creación de los botones
  buttonsArray[i]=createButton(options[i]);
  buttonsArray[i].position(100+width/4*i,200);
  buttonsArray[i].size(130,50);
  buttonsArray[i].value = options[i];
  
  
// Parte de estilo de los botones, si comentas: buttonsArray[i].style("font-size","48px")la siguiente y dejas la
// y dejas sin comentar: buttonsArray[i].class("buttons"), verás que no funciona...
  buttonsArray[i].style("font-size","48px")
  buttonsArray[i].class("buttons");
  

  }


 coo = createDiv("Click the button of your choice: ");
 coo.position(150, 350);
 coo.style("font-size","48px");
//var button1 = createButton("Apriétame");

//button1.class("buttons");
//button1.style("background-color", 'yellow');
//button1.size(200,100);
//button1.position(50, 50);

//button1.value = 3;
//var x = button1.value; 


}


function draw() {
  
  for (i=0;i<numberOpt;i++){

    buttonsArray[i].mousePressed(giveValue);

    if(mouseIsPressed){

      for (i=0;i<numberOpt;i++){
        if(true){
          
        }  
      options[i]=floor(random(3500));
      buttonsArray[i].value = options[i];
      buttonsArray[i].html(options[i]);
      }

    }
  }
  
}

giveValue = function(){
  
 background(random(255),random(255),random(255));
 x = this.value;
 coo.html("Click the button of your choice: " + x + "<br>" + "<br>"+ "Go for the next!" );
}

