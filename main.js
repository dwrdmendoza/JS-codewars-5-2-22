//codewars session.

/* You ask someone their age and they always answer with "x years old",
where x is a random number between 0 and 9.

write a program that returns the age(0-9) as an integer.a

assume the test input string is always a valid string. For example, the 
test input may be "1 year old" or "5 years old". The first character in the string is always a number. */

function getAge(inputString){
  //parsesInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned.
  return parseInt(inputString);
}
---------------------------------------------------------------------------

/* who rememnbers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following pharses each time a petal was torn:

* I love you 
* alittle
* alot
* passionately
* madly
* not at all 

when the last petal was torn there were cries of excitement, dreams, surghing thoughts and emotions.I
your goal in this katat is to determine which pahrse the girls would say for a flower of a given number of petals, nb_petals > 0. */

function howmUchILoveYou(nbPetals){
  let x = nbPetals % 6
  if(x === 1){
    return 'I love you'
  }else if(x===2){
    return 'alittle'
  }else if(x===3){
    return 'alot'
  }else if(x===4){
    return 'passionately'
  }else if(x===5){
    return 'madly'
  }else if(x===6 || x===0){
    return 'not at all'
  }
}