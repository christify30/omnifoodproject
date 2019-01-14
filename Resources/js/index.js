var headerBackground = document.getElementById('logo').style;// = 'linear-gradient(rgba(0,0,0,0.7), #0000), url("Resources/img/1.jpg")';
        
var images = ['linear-gradient(rgba(0,0,0,0.7), #0000), url("Resources/img/1.jpg")', 'linear-gradient(rgba(0,0,0,0.7), #0000), url("Resources/img/2.jpg")', 'linear-gradient(rgba(0,0,0,0.7), #0000), url("Resources/img/3.jpg")'];
var counter = 0;

setInterval(() => {
    headerBackground.backgroundImage = images[counter];
    counter += 1;
    if(counter >= 2){
    counter = 0;
    }
    
},3000);