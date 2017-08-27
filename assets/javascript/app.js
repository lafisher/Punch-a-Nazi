//variables

var numberToWin = 0;
var numberOptions = [];
var mysticNum = 0; 
var gelflingNum = 0; 
var crystalNum = 0;
var aughraNum = 0; 
var nazioneNum = 0;
var nazitwoNum = 0; 
var score = 0; 
var winCount = 0;
var lossCount = 0;

//create button click for start quest button / reset game 

//generate random number 

function startGame () {  	
score =0;  
numberToWin = Math.floor((Math.random() * (120-19)) + 19);
console.log(numberToWin);

//append to quest div
document.getElementById("quest").innerHTML = numberToWin;
document.getElementById("score").innerHTML = score;

//and generate random numbers for each div
var numberOptions = [
mysticNum = Math.floor((Math.random() * 12) + 1),

gelflingNum = Math.floor((Math.random() *  12) + 1),

crystalNum = Math.floor((Math.random() *  12) + 1),

aughraNum = Math.floor((Math.random() *  12) + 1),

nazioneNum = Math.floor((Math.random() *  12) + 1),

nazitwoNum = Math.floor((Math.random() *  12) + 1),
];
console.log(mysticNum);
console.log(gelflingNum);
console.log(crystalNum);
console.log(aughraNum);
console.log(nazioneNum);
console.log(nazitwoNum)

// asign random number values to each charater 	
// and attach to each character div 
	for (var i = 0; i < numberOptions.length; i++) {
		var mysticImage = $("#nazi1");
		 mysticImage.attr("data-mysticvalue", mysticNum);
	}

	for (var i = 0; i < numberOptions.length; i++) {
		var gelflingImage = $("#nazi2");
		 gelflingImage.attr("data-gelfingvalue", gelflingNum);
	}

	for (var i = 0; i < numberOptions.length; i++) {
		var shardImage = $("#nazi3");
		 shardImage.attr("data-shardsvalue", crystalNum);
	}

	for (var i = 0; i < numberOptions.length; i++) {
		var aughraImage = $("#nazi4");
		 aughraImage.attr("data-aughravalue", aughraNum);
	}
  for (var i = 0; i < numberOptions.length; i++) {
    var nazioneImage = $("#nazi5");
     nazioneImage.attr("data-nazionevalue", nazioneNum);
  }
  for (var i = 0; i < numberOptions.length; i++) {
    var nazitwoImage = $("#nazi6");
     nazitwoImage.attr("data-nazitwovalue", nazitwoNum);
  } 
}

startGame();

 //check for win/lose
 function checkWinLose () {
 	if (score == numberToWin) {
     	 winCount++;
      	 alert("Yes! You punched ALL the Nazis!!");

      	 document.getElementById("win").innerHTML = winCount;
    
      	 startGame();
          
 	}

    else if (score >= numberToWin) {
       	 lossCount++;	
       	 alert("Whoops! You missed a few Nazis, Punch again!");
      
       	 document.getElementById("lose").innerHTML = lossCount;
    
       	 startGame();
        
    };
 };

//on click functions for each character 

//append crystal magic wisdom love with new score for every char click
function crystalPower () {

$("#nazi1").on("click", function() {
	var mysticNum = ($(this).attr("data-mysticvalue"));
    mysticNum = parseInt(mysticNum);
    
    score += mysticNum;

    document.getElementById("score").innerHTML = score;

    	checkWinLose ();
});

$("#nazi2").on("click", function() {
	var gelflingNum = ($(this).attr("data-gelfingvalue"));
    gelflingNum = parseInt(gelflingNum);
    
    score += gelflingNum;

    document.getElementById("score").innerHTML = score;

    	checkWinLose ();
});

$("#nazi3").on("click", function() {
	var crystalNum = ($(this).attr("data-shardsvalue"));
    crystalNum = parseInt(crystalNum);
    
    score += crystalNum;

    document.getElementById("score").innerHTML = score;
     
        checkWinLose ();
});

$("#nazi4").on("click", function() {
	var aughraNum = ($(this).attr("data-aughravalue"));
    aughraNum = parseInt(aughraNum);
    
    score += aughraNum;

    document.getElementById("score").innerHTML = score;
     
  		checkWinLose ();  
});

$("#nazi5").on("click", function() {
  var nazioneNum = ($(this).attr("data-nazionevalue"));
    nazioneNum = parseInt(nazioneNum);
    
    score += nazioneNum;

    document.getElementById("score").innerHTML = score;
     
      checkWinLose ();  
});

$("#nazi6").on("click", function() {
  var nazitwoNum = ($(this).attr("data-nazitwovalue"));
    nazitwoNum = parseInt(nazitwoNum);
    
    score += nazitwoNum;

    document.getElementById("score").innerHTML = score;
     
      checkWinLose ();  
});
};

crystalPower ();

function resetButton () {
 $(document).on("click", "#clickme", function(){
  startGame();
 
 });
};
resetButton();

// i have no idea why these need to continue to live here, but when i comment them out everything breaks
document.getElementById("win").innerHTML = winCount;
document.getElementById("lose").innerHTML = lossCount;


//if quest == CMWL you win! flash you win image and win text over game play reset game

//else quest >! CMWL you lose! flash lose image and lose text over game play reset game 
// $(document).on("click", ".className", functionName);

//"What was sundered and undone"
//"Shall be whole the Two made One"
//"You win!"