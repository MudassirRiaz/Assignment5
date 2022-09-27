// If-else exercise
// 1. Write a ts program to find maximum between two numbers.
// var num1=34
// var num2=54
// if(num1>num2)
// console.log(num1, "is Maximum")
// else
// console.log(num2, "is Minimum")
// 2. Write a ts program to find maximum between three numbers.
// var num1 = 23
// var num2 = 55
// var num3 = 34
// let largest;
// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }
// console.log("The largest number is " + largest);
// 3. Write a ts program to check whether a number is negative, positive or zero.
// var number = 34
// if (number > 0) {
//     console.log("The number is positive");
// }
// else if (number == 0) {
//   console.log("The number is zero");
// }
// else {
//      console.log("The number is negative");
// }
// 4. Write a ts program to check whether a number is divisible by 5 and 11 or not.
// var num=54
// if((num%5==0)&&(num%11==0)){
//         console.log(num," is divisible of 5 and 11")
// }
// else
// console.log(num,"is not divisible of 5 and 11")
// 5. Write a ts program to check whether a number is even or odd.
// var num=33
// if(num%2==0)
// console.log(num,"is even")
// else
// console.log(num, "is odd")
// 6. Write a ts program to check whether a year is leap year or not.
// var year=2005
// if(year%4==0)
// console.log(year, "is leap year")
// else
// console.log(year,"is not leap year")
// 7. Write a ts program to check whether a character is alphabet or not.
// var char:any = 'a'
// if(typeof char!=='string')
// console.log(char, "is not string")
// else
// console.log(char," is string")
// 8. Write a ts program to input any alphabet and check whether it is vowel or consonant.
// var char:string='C'
// if((char=='a')||(char=='e')||(char=='i')||(char=='o')||(char=='u')||
// (char=='A')||(char=='E')||(char=='I')||(char=='O')||(char=='U'))
// console.log(char, "is Vowel")
// else
// console.log(char,"is not Vowel")
// 9. Write a ts program to input any character and check whether it is alphabet, digit or special character.
// var char:any = 56
// if(typeof char =='string')
// console.log(char, "is string")
// else if(typeof char=='number')
// console.log(char," is number")
// else
// console.log(char, "is special key")
// 10. Write a ts program to check whether a character is uppercase or lowercase alphabet.
// var char:string=''
// if(char==char.toUpperCase())
// console.log(char, " is Uppercase Alphabet")
// else
// console.log(char," is lowerchase aplhabet")
// 11. Write a ts program to input week number and print week day.
// var weknum:number = 2;
// if(weknum=1)
// console.log("Monday")
// else if(weknum=2)
// console.log("Tuesday")
// else if(weknum=3)
// console.log("Wednesday")
// else if(weknum=4)
// console.log("Thuresday")
// else if(weknum=5)
// console.log("Friday")
// else if(weknum=6)
// console.log("Saturday")
// else if(weknum=7)
// console.log("Sunday")
// else
// console.log("not weeknumber")
// 12. Write a ts program to input month number and print number of days in that month.
// 13. Write a ts program to count total number of notes in given amount.
// 14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.
// 15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.
// 16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.
// 17. Write a ts program to find all roots of a quadratic equation.
// 18. Write a ts program to calculate profit or loss.
// 19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
// let m1,m2,m3,m4,m5,sum,avg
// m1=80
// m2=90
// m3=98
// m4=98
// m5=84
// sum=m1+m2+m3+m4+m5
// console.log("total marks" ,sum)
// avg=sum/5
// console.log('average=',avg)
// if(avg>=90){
//   console.log("Grade A")
// }
// else if(avg>=80){
//   console.log("Grade B")
// }
// else if(avg>=70){
//   console.log("Grade C")
// }
// else if(avg>=60){
//         console.log("Grade D")
//       }
// else if(avg<=40){
//         console.log("Grade E")
//       }
//       else if(avg>=40){
//         console.log("Fail")
//       }
// 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// var bscSalry=22000
// var Total;
// if(bscSalry<=10000){
//         var hra=bscSalry/100*20
//         var da=bscSalry/100*80
//         Total=bscSalry+hra+da
//         console.log("Total Salary", Total)
// }
// else  if(bscSalry<=20000){
//         var hra=bscSalry/100*25
//         var da=bscSalry/100*90
//         Total=bscSalry+hra+da
//         console.log("Total Salary", Total)
// }
// else  if(bscSalry>20000){
//         var hra=bscSalry/100*30
//         var da=bscSalry/100*95
//         Total=bscSalry+hra+da
//         console.log("Total Salary", Total)
// }
// 21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
//  var unit=330
//  if(unit<=50){
//         var bill= unit*.50
//         var srchrge= bill/100*20
//         bill+=srchrge
//         console.log( "Total bill", bill)
//  }
//  else if(unit<=150){
//         var funit= unit-50
//          var unt= 50*.50
//         var bill= funit*.75
//                 bill+=unt
//         var srchrge= bill/100*20
//         bill+=srchrge
//         console.log( bill)
//  }
//  else if(unit<=250){
//         var funit= unit-50
//          var unt= 50*.50
//          var sunit=funit-100
//          var unt2=100*.75
//         var bill= sunit*1.20
//                 bill+=unt
//                 bill+-unt2
//         var srchrge= bill/100*20
//                 bill+=srchrge
//         console.log( bill)
//  }
//  else if(unit>250){
//         var bill= unit*1.50
//         var srchrge= bill/100*20
//         bill+=srchrge
//         console.log( "Total bill", bill)}
