
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

//  const bill = 375;
//  const tip = bill <=300 && bill >=50 ? bill*0.15 : bill *0.2; 
//  console.log(`your bill was ${bill}, your tip was ${tip}, an total value is ${bill + tip}`);

//  function fruitProcessero ( apples, oranges){
//     const jucie = `jucies of ${apples} apples and juice of ${oranges} oranges is ready to drink `
//     return jucie;

//  }
//  const applesJucie = fruitProcessero(8,9);
//  console.log (applesJucie); 
//  const num = '34';
//  console.log(num);
  
//function declarartions "you can call the declaration fuction before declaring"
// function calAge1(brithYear){
//     return 2023 - brithYear;
// }
// const age1=calAge1(1999);//() in these brackets you give the aurgument/input and pirmetter.
// console.log(age1);
// //function expression'you have to declare the function and then you can call it' and the best parctice is to use expression fuctions 
// const age2=function(brithYear){
//     return 2023 -brithYear;
// }
// const calAge2=age2(1998);
// console.log(calAge2);
//*********arrow functions for one linears 
// const calAge3=birthYear =>2023 - birthYear;
// const age=calAge3(1991);
// console.log(age);
// // **********mult lines arrow function
// const calAge4=(birthYear,Name)=>{
//     const age= 2023-birthYear;
//     const retarimentAge = 65-age;
//     return `${Name} you have ${retarimentAge} years left to get retaired...`;
// }
// const findAge=calAge4(1999,"umar");
// const findAge1=calAge4(1979,"Mohsin");
// console.log(findAge,findAge1);
// ************function calling another function*********** .
     function cutFruitpieces(fruits){
        return fruits *2;

     }
  function fruitProcessero ( apples, oranges){
    let applespieces =  cutFruitpieces(apples);
          let orangepieces = cutFruitpieces(oranges);
         const jucie = `jucies of ${applespieces} apples and juice of ${orangepieces} oranges is ready to drink `
        return jucie;
    
      }
  const applesJucie = fruitProcessero(3,2);
      console.log (applesJucie); 