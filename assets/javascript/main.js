
$(document).ready(function(){
    //10 songs, Acutal words user has to make a guess 
    const songs=["legends",
                "badliar",
                "bodakyellow",
                "chanel",
                "despacito",
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
    var number=0;
    var song=""
    var answerArray=[];
    var guess="";
    
    
    $(".play").on("click", function() 
    {    
            
            number=Math.floor(Math.random()*songs.length);
            console.log(number);                            //CONSOLE!
            song=songs[number];
            console.log(song);                              //CONSOLE!        
            var counter=song.length;                        //CONSOLE!
            console.log(counter);  
            var life=5;                         
            var clue = $(".clue-box");
            var artistImage="assets/images/"+number+".jpg";
            var image = $("<img>");
            
            image.attr("src",artistImage);
            image.addClass("image-clue");
            clue.replaceWith(image);
            
            $(".clue-name").addClass("big-font");
            $(".clue-name").replaceWith(artist[number]);
           
            
            for (var i=0;i<song.length;i++)
            {
                answerArray[i]="_";
                console.log(i);                             //CONSOLE!
            }
            
            console.log(answerArray);                       //CONSOLE!
            $("#blank").empty();
            $("#blank").append(answerArray.join("  "));
            $(".letter").append("Letters that has already been typed: ");
            //****************************************************************** */
            document.onkeyup=function (event)
                {
                guess = event.key;
                $(".letter").append(" "+guess);
                console.log("checkpoint:1");
                console.log("------------")
                console.log("song length")
                console.log(song.length);
                console.log("------------")
                $(".life").empty();
                    $(".life").append(life); 
                    alert(life);
                    $(".life").append(": lives remaining"); 
                    
                for(var j=0;j<song.length;j++)
                {
                    if(song[j]===guess){
                        answerArray[j]=guess;
                        console.log(answerArray);
                        $("#blank").empty();
                        $("#blank").append(answerArray.join(" "));
                        counter--;
                        console.log(counter);
                        
                    }
                        
                }life--;
                if (counter==0){
                    $(".message").empty();
                    $(".message").append("Congratulations!!");
            
                }
                if(life==0) {
                    $(".message").empty();
                    $(".message").append("You lost the game");
                }
            }
    });    
});