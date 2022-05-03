// return which player won! In case of a draw return Draw!

const rps = (p1, p2) => {
  if (p1 == p2)
    return 'Draw!';
  
  if (p1 == 'rock' && p2 == 'scissors')
    return 'Player 1 won!'
  else if (p1 == 'scissors' && p2 == 'paper')
    return 'Player 1 won!'
  else if (p1 == 'paper' && p2 == 'rock')
    return 'Player 1 won!'
  else
    return 'Player 2 won!';
};

//Write function bmi that calculates body mass index (bmi = weight / height2).

function bmi(weight, height) {
  const bmi = weight / (height * height);
  if(bmi <= 18.5)
    return "Underweight";
  if(bmi <= 25.0)
    return "Normal"
  if(bmi <= 30.0)
    return "Overwight"
  if(bmi > 30)
  return "Obese";
}

//multiply a given number by eight if it is an even number and by nine other wise.

function simpleMultiplication(number) {
  if(number % 2 == 0){
    return number * 8
  }else{
    return number * 9
  }
  }
  