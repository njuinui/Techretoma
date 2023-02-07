
// break and continue 

const ScoreS = [50,25,0, 30, 100, 20, 10];

for (let i = 0; i < ScoreS.length; i++) {

    // let say we don't want to show the score 0 
    if(ScoreS[i] === 0 ){
        continue;
    }
    console.log('Your scores: ', ScoreS[i]);

    if (ScoreS[i] === 100) {
        console.log('Congrats, you got the top score!');
        break;//Break enable you go out of the loop when the condition is reach even if the remaining values still satify the condition.
    }
    
}