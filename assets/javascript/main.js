
$(document).ready(function(){
//10 songs, Acutal words user has to make a guess 
const songs=["legends",
             "bad liar",
             "bodak yellow",
             "chanel","Despacito",
             "new rules", 
             "humble",
             "green light",
             "imagine",
             "money"];
             
//10 corresponding artist

const artist=["Kelsea Ballerini",
             "Selena Gomez",
             "Cardi B",
             "Frank Ocean",
             "Luis Fonsi",
             "Dua Lipa",
             "Kendrik Lamar", 
             "Lorde",
             "John Lenon",
             "Pink Floyd"];
$(".play").on("click", function() {
                
               
function number(){
    //var counter=Math.floor (Math.random() *100000000);
    return Math.floor(Math.random()*10);
}
//selects the corresponding divs
var clue = $("#clue-box");
var number= number();
console.log(number);
var artistImage="assets/images/"+number+".jpg";
console.log(artistImage);
//------------------
//creating a var "image" which represents <img>
var image = $("<img>");
//-------------------
//****************
//var image="<img src=\"assets/images/1.jpg\"></img>";
image.attr("src",artistImage);
image.addClass("image-clue");
//image.src("assets/images/1.jpg");
clue.replaceWith(image);

});    
});