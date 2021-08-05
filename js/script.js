






///challenge 3 rock paper scessor*********


function rpsGame(yourChoice){
    var humanChoice;
    var BotChoice;
    humanChoice=yourChoice.id;
    console.log(humanChoice);
    BotChoice=randomNum();
    console.log(BotChoice);
    var hc=humanChoice;
    var resultText;

    //conditioning part
    switch(hc){
        case '0':
            if(BotChoice=='0'){
                  resultText='Tie';
                //printing***images***and show message
                showResult(humanChoice,BotChoice,resultText);
                break;
            }
            else if(BotChoice=='1'){
                 resultText='Defeat';
                 showResult(humanChoice,BotChoice,resultText);
                break;
            }
            else if(BotChoice=='2'){
                //alert('Win');
                 resultText='Win';
                 showResult(humanChoice,BotChoice,resultText);

                break;
            }
          


            case '1':
                if(BotChoice=='0'){
                    //alert('win');
                    resultText='Win';
                    showResult(humanChoice,BotChoice,resultText);

                    break;
                }
                else if(BotChoice=='1'){
                   // alert('tie');
                   resultText='Tie';
                   showResult(humanChoice,BotChoice,resultText);
                    break;
                }
                else if(BotChoice=='2'){
                    //alert('Defeat');
                    resultText='Defeat';
                    showResult(humanChoice,BotChoice,resultText);
                    break;
                }




                case '2':
                    if(BotChoice=='2'){
                        //alert('tie');
                        resultText='Tie';
                        showResult(humanChoice,BotChoice,resultText);
                        break;
                    }
                    else if(BotChoice=='1'){
                       // alert('win');
                       resultText='Win';
                       showResult(humanChoice,BotChoice,resultText);
                        break;
                    }
                    else if(BotChoice=='0'){
                        //alert('Defeat');
                        resultText='Defeat';
                        showResult(humanChoice,BotChoice,resultText);
                        break;
                    }
                     
                   
            
            



    }




}

function randomNum(number){
   var number= Math.floor(Math.random()*3);
   return number;
}

function showResult(humanChoice,BotChoice,resultText){
   var containerRPS = document.getElementById('rps-container-result');
   var containerRPSreset = document.getElementById('rps-container-reset');
   var imgH= document.createElement('img');
   if(humanChoice=='0'){
      imgH.src="images/rock.png";
     
   }
   else if(humanChoice=='1'){
    imgH.src="images/paper.png";
   }
   else if(humanChoice=='2'){
    imgH.src="images/scissor.png";
   }

   var resultHeader = document.createElement('h4');
   var FinalText=document.createTextNode(resultText);
   resultHeader.appendChild(FinalText);
   /////time of reset what msg to show////////

   
   if(resultText=='Win'){
    var resetHeader=document.createElement('h4');
     var textOfResetWin = document.createTextNode(' Congratulations!!');
       var playAgainImg = document.createElement('button');
       playAgainImg.innerHTML="Play Again";
       resetHeader.appendChild(textOfResetWin);
       containerRPSreset.style.background="green";
       containerRPSreset.style.color="white";
       
   }

   else if (resultText =='Defeat'){
    var resetHeader=document.createElement('h4');
    var textOfResetDefeat = document.createTextNode(' Oops!!! better luck next Time!');
    var playAgainImg = document.createElement('button');
    playAgainImg.innerHTML="Play Again";
    resetHeader.appendChild(textOfResetDefeat);
    containerRPSreset.style.background="darkred";
       containerRPSreset.style.color="white";

   }

   else if (resultText =='Tie'){
    var resetHeader=document.createElement('h4');
    var textOfResetDefeat = document.createTextNode(' Match Tied! ');
    var playAgainImg = document.createElement('button');
    playAgainImg.innerHTML="Play Again";
    resetHeader.appendChild(textOfResetDefeat);
    containerRPSreset.style.background="yellow";
       containerRPSreset.style.color="black";

   }
   
   


   ///*/****/ */
   var imgB= document.createElement('img');
   if(BotChoice=='0'){
      imgB.src="images/rock.png";
   }
   else if(BotChoice=='1'){
    imgB.src="images/paper.png";
   }
   else if(BotChoice=='2'){
    imgB.src="images/scissor.png";
   }

   containerRPS.appendChild(imgH);
   containerRPS.appendChild(resultHeader);
   containerRPS.appendChild(imgB);
   containerRPSreset.appendChild(resetHeader);
   containerRPSreset.appendChild( playAgainImg);

   //code to create new item nd add new function*************

   playAgainImg.onclick = function() {myResetFunction()};;
    
   //changing id to delete them while reseting again ***/

   imgH.setAttribute('id','deleteimgH');
   resultHeader.setAttribute('id','deleteresultHeader');
   imgB.setAttribute('id','deleteimgB');
   resetHeader.setAttribute('id','deleteresetHeader');
   playAgainImg.setAttribute('id','deleteplayAgainImg');

   






   
}

function myResetFunction(){
   var removingimgH = document.getElementById('deleteimgH');
   var removingResultHeader = document.getElementById('deleteresultHeader');
   var removingimgB = document.getElementById('deleteimgB');
   var removingResetHeader = document.getElementById('deleteresetHeader');
   var removingPlayAgainImg = document.getElementById('deleteplayAgainImg');


   removingimgH.remove();
   removingResultHeader.remove();
   removingimgB.remove();
   removingResetHeader.remove();
   removingPlayAgainImg.remove(); 
}


function showImagesHere(){
      var imageS=document.createElement('img');
      imageS.src="images/rock.png";
      var imageShowingDiv=document.getElementById('iShow');
      imageShowingDiv.appendChild(imageS);
      imageS.setAttribute('id','dIds');
}

function showingImageDeleted(){
       var deleteButtonTap =document.getElementById('dIds');
       deleteButtonTap.remove();
}