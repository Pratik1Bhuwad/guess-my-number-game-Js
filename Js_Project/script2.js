let secretNumber=Math.trunc(Math.random()*20)+1;
console.log('secret number:',secretNumber);

let score=20;
let highscore=0;

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent='⛔ No number!';
    }else if(guess===secretNumber){
        document.querySelector('.message').textContent='correct Answer!👀😘🤩';
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=secretNumber;

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }


    }else if (guess>secretNumber){
        if (score>1){
        document.querySelector('.message').textContent='To High!😬';
        score--;
        document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='You lost the game 😬';
            score=0;
            document.querySelector('.score').textContent=score;
        }
    }else if (guess<secretNumber){
        if (score>1){
        document.querySelector('.message').textContent='To Low!😟';
        score--;
        document.querySelector('.score').textContent=score;
        } else{
            document.querySelector('.message').textContent='You lost the game 😬';
            score=0;
            document.querySelector('.score').textContent=score;
        }
    }
});

document.querySelector('.again').addEventListener('click',function (){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    console.log('secret number:',secretNumber);
    document.querySelector('.message').textContent='start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});
