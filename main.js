let userName = '';
let userQuestion = 'Will I be a rich man';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

userName === true ? console.log('Hello, Jane!') : console.log('Hello!');
switch (randomNumber){
  case 1:
  eightBall = 'It is certian';
  break 

  case 2:
  eightball = 'It is decidely so';
  break

  case 3:
  eightball = 'Reply hazy try again';
  break 

  case 4:
  eightBall = 'Cannot predict now';
  break 

  case 5:
  eightBall = 'Do not count on it';
  break

  case 6: 
  eightBall = 'My sources say no';
  break 

  case 7: 
  eightBall = 'Outlook not so good';
  break

  case 8: 
  eightBall = 'Signs point to yes';
  break 

  default: 
  eightBall = 'I have no answer for you';
  break

}

if (randomNumber == 0) {
  eightBall = 'You are the bottom of the barrol my friend';
} else if(randomNumber == 1){
  eightBall = '1 not working';
  
} else if(randomNumber == 2){
  eightBall = '2 not working';
  
} else if(randomNumber == 3){
  eightBall = '3 not working';
  
}else if(randomNumber == 4){
  eightBall = '4 not working';
  
} else if(randomNumber == 5){
  eightBall = '5 not working';
  
} else if(randomNumber == 6){
  eightBall = '6 not working';
  
} else if(randomNumber == 7){
  eightBall = '7 not working';
  
} else if(randomNumber == 8){
  eightBall = '8 not working';
  
} else {
  console.log('I ran out of numbers.')
};
  



console.log(`The eight ball has spoken: ${eightBall}`);
// console.log(userQuestion);

// console.log(randomNumber);

