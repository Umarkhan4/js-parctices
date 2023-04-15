
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
//      function cutFruitpieces(fruits){
//         return fruits *2;

//      }
//   function fruitProcessero ( apples, oranges){
//     let applespieces =  cutFruitpieces(apples);
//           let orangepieces = cutFruitpieces(oranges);
//          const jucie = `jucies of ${applespieces} apples and juice of ${orangepieces} oranges is ready to drink `
//         return jucie;
    
//       }
//   const applesJucie = fruitProcessero(3,2);
//       console.log (applesJucie); 
// const calAvager = (num,num2,num3)=>(num+num2+num3)/3;
// let Doliphinscore= calAvager(44,23,71);
// let Koalessave= calAvager(65,49,54);
   

// const checkWinner = function(avgDolphin,avgKoales){
//    if(avgDolphin >=2 * avgKoales){
//       console.log(`The dolphine win 🎉(${avgDolphin}) vs (${avgKoales})`);

//    } else if(avgKoales >=2 * avgDolphin){

//       console.log(`The Koales win🎉(${avgKoales}) vs (${avgDolphin})`);
// }else{
//    console.log('noone win');
// }
// };
// checkWinner(Doliphinscore,Koalessave);
// Doliphinscore= calAvager(85,54,41);
// Koalessave= calAvager(23,34,27);
// checkWinner(Doliphinscore,Koalessave);
// ******Arrays*******
// const calAge = function(birthYear){
//    return 2037 - birthYear;
// }
// const friends = [1990,2000,2004];
// const ages = calAge(friends[0]);
// const ages1 = calAge(friends[1]);
// const ages2= calAge(friends[friends.length-1]);
// console.log(ages,ages1,ages2);
// //using array with in an array**********
// const preSent =[calAge(friends[0]),calAge(friends[1]),calAge(friends[friends.length-1])];
// console.log(preSent);
// // Adding elements to arrays by push, pop, unshift ,shift,******
// const yaar=['mohsin' ,'usama', 'umar' , 'sibi',];
// console.log(yaar);
// yaar.push('sunny');
// console.log(yaar);
// yaar.unshift('Adana');
// console.log(yaar);
// yaar.pop();
// console.log(yaar);
// yaar.shift();
// console.log(yaar);
// if(yaar.includes('usama')){
//    console.log('you have a friend name Usama...')
// }
// const tipCal =function(bill){ 
   
// if(bill >= 50 && bill < 300){
//       let tipAbove50 = tip =Math.floor( (15/100)*bill);
//       console.log( " Bill is "+ bill+" and Tip is "+ tip+" Total bill is "+ (bill+tip));
//     }else if(bill >300){
//       let tipAbove300 =tip = Math.floor((20/100)*bill);
//       console.log( " Bill is "+ bill+" and Tip is "+ tip+" Total bill is "+ (bill+tip));
//     } }
//     console.log (tipCal(100));
    // const caltip = function (bill){
    //   return bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2
    // }

    // const bills=[125,555,44];
    // const tips = [caltip(bills[0]),caltip(bills[1]), caltip(bills[2])];
    // // console.log(tips);
    // const total = [bills[0] + tips[0] ,bills[1]+tips[1] ,bills[2]+tips[2]];
    // console.log(total,tips,bills);
    // // *****Object*****
    // const Umar={
    //   firstName : "umar",
    //   lastName : "khan",
    //   age : 2050-1999,
    //   job :"webdevloper",
    //   friend :['mohsin','usama','sunny'],
    // };
    // // calling the properties from thr object........
    // // console.log(Umar["age"]);
    // // // const interstedIn=prompt('Hi, what do you what to know about umar');
    // // if (Umar[interstedIn]){
    // // console.log(Umar[interstedIn]);
    // // } else {
    // //   console.log('please chose the right option');
    // // };
    // // Umar.location="pakistan";
    // // Umar["twitter"]='umerkhan@788';
    // // console.log(Umar);
    // console.log(`${Umar.firstName} has ${Umar.friend.length} friends and his best friend is ${Umar.friend[0]}....`);
    // // methodes pratcies****
    // const Umar = {
    //   firstName : 'umar',
    //   lastName : 'khan',
    //   birthYear : 1991,
    //   job :'webdevloper',
    //   friend :['mohsin','usama','sunny'],
    //   Drivinglicence:false,
    //  calAge : function(){
    //   this.age = 2037 - this.birthYear;
    //   return this.age;
    //  },
    //  getsummary:function (){
    //   return `${this.firstName} is a ${this.calAge()} years old ${this.job} and has  ${this.Drivinglicence?'a ' :'no '}driving licence`},
    // };
    // Umar.friend.push('khan');
    // console.log(Umar);
    // console.log(Umar.getsummary());
//*************challange*************/
    // const Markmiler = {
    //   firstName : 'Mark',
    //   lastName : 'Miler',
    //   mass :'78',
    //   height : '1.69',
    //   calBMI : function(){
    //     this.BMI=Math.floor( this.mass / this.height **2);
    //      return this.BMI;
    //    },
    //    getdetails:function(){
    //     return`${this.firstName} BMI ${this.calBMI()} `
    //   }
    //  }
    //  const jonasmith = {
    //   firstName : 'jonas',
    //   lastName : 'smith',
    //   mass :'92',
    //   height : '1.9',
    //   calBMI : function(){
    //    this.BMI=Math.floor( this.mass / this.height **2);
    //     return this.BMI;
    //   },
    //   getdetails:function(){
    //     return`${this.firstName} BMI ${this.calBMI()} `
    //   }
    //  };
    //  console.log(jonasmith.getdetails());
    //  console.log(Markmiler.getdetails());
    //  if(jonasmith.BMI > Markmiler.BMI){
    //   console.log(`jona BMI is ${jonasmith.BMI} greater`)
    //  }else{
    //   console.log(`mark has ${Markmiler.BMI} greater BMI`);
    //  };
    //  ************************Loops************
  // for (let rep = 1; rep <=10; rep++){
  //   console.log(`Umar has ${rep} cars`)
  //};
  const Umar = [
    'umar',
    'khan',
     2037 - 1999,
     'teacher',
     ['mohsin','sunny','usama'],
     true,      
  ];
  types=[]
  for(let i=[0]; i < Umar.length; i++){
    console.log(Umar[i], typeof Umar[i]);
    // types = typeof Umar[i];
    types.push (typeof Umar[i]);
  };
  console.log(types);
  const years  = [  1999,2000,2002,2004]
  age =[];
for( i=0; i<years.length;i++){
 
  age.push(2037-years[i])
};
console.log(age);
// continue ad break...............
