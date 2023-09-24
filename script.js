score=0;
cross=true;
audiogo= new Audio('ahh.mp3');
audio= new Audio('theme.mp3');
setTimeout(()=>{
    audio.play();
},10)
document.onkeydown= function(e){
    console.log(e.keyCode)
   if(e.keyCode==38)
   {
    sage= document.querySelector('.sage');
sage.classList.add('animateSage');
setTimeout(()=>{
sage.classList.remove('animateSage')
} ,700);
   }
    if(e.keyCode==39){
    sage=document.querySelector('.sage')
    sageX=parseInt(window.getComputedStyle(sage,null).getPropertyValue('left'));
 sage.style.left= sageX+112+"px";
   }
    if(e.keyCode==37){
    sage=document.querySelector('.sage')
    sageX=parseInt(window.getComputedStyle(sage,null).getPropertyValue('left'));
 sage.style.left= sageX-112+"px";
}
}

setInterval(()=>{
    sage=document.querySelector('.sage')
    gameOver=document.querySelector('.gameOver')
    obstacle= document.querySelector('.obstacle')
    sx=parseInt(window.getComputedStyle(sage,null).getPropertyValue('left'));
    sy=parseInt(window.getComputedStyle(sage,null).getPropertyValue('top'));


    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX= Math.abs(sx-ox);
    offsetY= Math.abs(sy-oy);   
     if(offsetX< 127 && offsetY<89){
        obstacle.classList.remove('obstacleani');
        gameOver.innerHTML='GAME OVER'
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
             audio.pause();
        },1000)
     }
     else if(offsetX < 123 && cross){
        scoreCont.style.visibility='visible';
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
              },1000);
              aniDur = parseFloat(window.getComputedstyle(obstacle, null) .getPropertyValue('animation-duration'));
newDur = aniDur - 1;
obstacle.style.animationDuration = newDur + 's';

}
}, 10);
 
 function updateScore(score){
    scoreCont.innerHTML="YOUR SCORE:"+ score
 }
