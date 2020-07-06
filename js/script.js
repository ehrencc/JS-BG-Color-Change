//Create array with colors 
var colors = ["red","silver","teal","orange","pink","gold",
              "maroon","beige","purple"];

/* Created function to change style sheets BG Color 
   using a random number within the array */ 
function changeBG(){
  document.body.style.backgroundColor= colors[Math.floor(Math.random()*colors.length)]
}; 