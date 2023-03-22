
// var dogAge = prompt("what is the age of your dog");
// var humanAge = (dogAge - 2)*4+21;
// alert('your dog age ' + humanAge + " in humanage");
// love cal 
// prompt("enter your name");
// prompt("Enter your cursh name");

// let lovePercentage = Math.random() * 100;

// lovePercentage = Math.floor(lovePercentage)+1;
// alert(lovePercentage);
// // practising the js 
// const age=15;
// if(age>=18){
// console.log('Good you can drive Now👍');
// } else{
//    let yearLeft = 18-age;
// console.log('you have '+ yearLeft + ' years left to drive');
// }
// let massMark = 93;
// let heightMark = 1.88;
// let massJon = 83;
// let heightjon = 1.79;
// BMIMArk = massMark / heightMark ** 2;
// BMIJon = massJon / (heightjon*heightjon);
// // const MarkHigherBMI= BMIMark > BMIJon;
// if (BMIMArk > BMIJon){
//     console.log('Mark has (${BMIMArk}) the higher BMI');
// } else{
//     console.log('jon has (${BMIJon}) the higher BMI');}
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('umar'));
// console.log(Boolean({}));
// let money ;
// if (money){
//     console.log('Great you have the money');
// } else{
//     console.log('you are short of money');
// }

// let age = '18';
// if (age === 18) console.log('you becae adult just now ');
// if (age == 18) console.log('just adult');
//  const hasDrivinglicen = true;
//  const goodVision = true;
//  console.log(hasDrivinglicen && goodVision );
//  console.log(hasDrivinglicen || goodVision );
//  console.log(!hasDrivinglicen);
//   let scoreDolphines = (800+90+15) /3;
//   let scoreKoales = Math.floor((800+90+15) /3);
//   console.log(scoreDolphines, scoreKoales);
//   if (scoreDolphines > scoreKoales && scoreDolphines>=100){
//       console.log('Dolphines has won the match!');
//   } else if (scoreKoales > scoreDolphines && scoreKoales>=100){
//     console.log('Kolasea has won👏');

//   } else {
//     console.log('Both the teams has won');

//   }
// let day ='monday';
// switch (day)  {
//     case  'monday':
//         console.log('the first dY OF THE WEEK');
//         break;
//         case  'Tuesday':
//         console.log('the mazay dY OF THE WEEK');
//         break;
//         case  'wednesday':
//         console.log('the gusht dY OF THE WEEK');
//         break;
//         case  'Thursday':
//         console.log('the outting dY OF THE WEEK');
//         break;
//         case  'Friday':
//             case  'Saturday':
//                 case  'sunday':
//         console.log('the Last days OF THE WEEK');
//         break;
//         default:
//             console.log('invalid input');
// }
// let weekDays ='Friday';
//   if(weekDays=== 'monday'){
//     console.log('the first dY OF THE WEEK');
//   }else if(weekDays === 'tuesday'){
//     console.log('the mazay dY OF THE WEEK');
//   }else if(weekDays === 'Wednesday'){
//     console.log('the gusht dY OF THE WEEK');
//   }else if(weekDays === 'thursday'){
//     console.log('the outting dY OF THE WEEK');
//   }else if(weekDays === 'Friday' || weekDays ==='saturday'||weekDays === 'sunday'){
//     console.log('the Last days OF THE WEEK');
//   }else{
//     console.log('invalid');
//   }
// let bill = 275;
// if(bill >= 50 && bill < 300){
//    tip = (15/100)*bill;
//   console.log( " Bill "+ bill+" and Tip is "+ tip+" Total bill "+ (bill+tip));
// }else if(bill >300){
//   tip = (20/100)*bill;
//   console.log( " Bill "+ bill+" and Tip is "+ tip+" Total bill "+ (bill+tip));
// }     

 const bill = 275;
 const tip = bill <=300 && bill >=50 ? bill*0.15 : bill *0.2; 
 console.log('your bill was ${bill}, your tip was ${tip}, an total value is ${bill + tip}');
