canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


sight_ancho=120;
sight_alto=120;

background_image = "IMG_2207.png";

sight_image = "IMG_2208.jpeg";

sight_x = 10;
sight_y = 10;


 function add(){
    background_imgTag=new Image();                           
    background_imgTag.onload = uploadBackground;                                                                   // Carga la imagen
    background_imgTag.src = background_image;

    sight_imgTag = new Image();  
    sight_imgTag.onload = uploadsight;   
    sight_imgTag.src = sight_image;
}                                     


function uploadBackground(){
    ctx.drawImage (background_imgTag ,0,0, canvas.width, canvas.height);
}                       

function uploadsight(){
    ctx.drawImage(sight_imgTag, sight_x, sight_y, sight_ancho, sight_alto);
    }



window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='40'){
        down();
    }
    if(keyPressed=='37'){
        left();
    }
    if(keyPressed=='39'){
        right();
    }
}


function up(){
if(sight_y >=0){
    sight_y = sight_y - 5;
    uploadBackground();
    uploadsight();
 }
}
function down(){
    if(sight_y <=500){
        sight_y = sight_y + 5;
        uploadBackground();
        uploadsight();
 }
}
function left(){
    if(sight_x >=0){
        sight_x = sight_x - 5;
        uploadBackground();
        uploadsight();
     }
    }
function right(){
    if(sight_x <=700){
        sight_x= sight_x + 5;
        uploadBackground();
        uploadsight();
     }
    }