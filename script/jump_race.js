 var game_canvas;
 var game_context;
 var cloudx;
 var cloduy;
 var texto="hola";
 var counter=0;
 var loaded = false;

 
///setInterval(updateGame, 10);

 function initGame () {
 if (!loaded) {
     loaded = true;
     game_canvas = document.getElementById("gameCanvas");
     game_context = game_canvas.getContext("2d");
     setInterval(updateGame,10);
  }
  cloudx = game_canvas.width;
  cloudy = game_canvas.width;
 
 }

 var initTime = Date.now();
 var currentTIME = 0;
 var currentFPS= 0;
 var iddleTime = 250;



 function updateGame () {
     
     currentTIME = (Date.now())-initTime;
     initTime = Date.now();
     iddleTime -= currentTIME;
     currentTIME /= 1000.0;
     if (iddleTime <= 0) {
        currentFPS = 1 /(currentTIME);
        iddleTime = 250; 
     }
     
     
     
 	game_context.clearRect(0, 0,game_canvas.width, game_canvas.height); 

 	game_context.fillStyle = "red";

 	game_context.fillRect(50, 50, 100, 100); 


 	game_context.fillStyle = "green";

 	game_context.fillRect(40,(game_canvas.height-100) , 50, 100);  


 	 game_context.fillStyle = "blue";

 
 	game_context.fillRect((game_canvas.width/2)+50,(game_canvas.height/2) ,75, 75);



    cloudx=cloudx-1
	game_context.fillStyle = "white";
 	game_context.fillRect((cloudx),10, 100, 50);

 	cloudy=cloudy+1
 	game_context.fillStyle = "yellow";
 	game_context.fillRect((cloudy-400),20,100,50);

      
	game_context.fillStyle = "orange";
 	game_context.fillRect(game_canvas.width-cloudx,50,100,50);


 	game_context.fillStyle = "black";
 	game_context.fillRect((game_canvas.width-200),0,200,30);

	texto="FPS=" + currentFPS.toFixed(2);
	counter=counter+1;
	game_context.fillStyle = "white";
	game_context.font = "16px Arial";
	game_context.fillText(texto+counter,game_canvas.width-75,20);



}
// JESUS CONDE (YOUTUBE) Y W3SCHOOLS.COM