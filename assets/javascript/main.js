
$(document).ready(function(){
//10 songs, Acutal words user has to make a guess 
const songs=["legends",
             "badliar",
             "bodakyellow",
             "chanel",
             "Despacito",
             "newrules", 
             "humble",
             "greenlight",
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
var clue = $(".clue-box");
var number= number();
console.log(number);
//displaying image-clue
//artistImage is the image location
var artistImage="assets/images/"+number+".jpg";
var image = $("<img>");
//-------------------
//****************
//var image="<img src=\"assets/images/1.jpg\"></img>";
image.attr("src",artistImage);
image.addClass("image-clue");

clue.replaceWith(image);
//populating the guess-box
$(".clue-name").addClass("big-font");
$(".clue-name").replaceWith(artist[number]);
var song=songs[number];

var answerArray=[];
for (var i=0;i<song.length;i++){
    answerArray[i]="_";
}
var counter=song.length;
while (counter>0){
    $(".blank").replaceWith(answerArray.join(" "));
        
    document.addEventListener('keypress', (event) => {
    var guess = event.key;
    alert(guess);
    });
    for(var j=0;j<song.length;j++){
        if(song[j]===guess){
            answerArray[j]=guess;
            counter--;
        }
    }
}
});    
});