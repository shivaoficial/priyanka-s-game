var timer = 65;
var score =0;
var hitValue;

function refreshingBubble(){
    var saving = "";
    for(var i=0 ; i<180 ;i++){
        var rn = Math.floor(Math.random()*10);
   saving += `<div id="bubble">${rn}</div>`;
   }  
   
   document.querySelector("#pbbl").innerHTML = saving;
}

function timing(){

    setInterval(function(){
        if(timer>0){
             timer--;
        document.querySelector(".timer").textContent = timer;
        }
        else{
            document.querySelector("#pbbl").innerHTML = `<h1 style="color:white;" >Game OVER! Score : ${score}</h1>`;
        }
       
    },1000);
}

function inrcsScore(){

    score += 10;
    document.querySelector(".score").textContent = score;
}

function hitChng(){
      hitValue =  Math.floor(Math.random()*10);
      document.querySelector(".hit").textContent = hitValue;
}

document.querySelector("#pbbl").addEventListener("click",function(dets){
   var res = Number(dets.target.textContent);
   
   if(res === hitValue ){
        inrcsScore();
        refreshingBubble();
        hitChng();
    }    
})


hitChng();
refreshingBubble();
timing();


var tl = gsap.timeline();

tl.to("#ready",{
    transform:"translateY(-100%)",
    delay:4,
    duration:2
})

tl.from("#page img",{
    y:20,
    repeat:-1,
    duration:0.5,
    yoyo:true,
    opacity:0
    
})