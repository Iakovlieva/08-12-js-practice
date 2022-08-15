//1. Написати функцію, яка приймає в якості аргумента висоту прямокутника і його ширину, повертає площу прямокутника.

function RectangleSquare(height,width){
    if ((height>=0) && (width>=0)){
        return height * width;
    } else return null;
}
/*
//Виклик функції
let heightOfRectangle;
let widthOfRectangle;

do {
    heightOfRectangle=Number(prompt('Enter rectangle height'));
} while ((Number.isNaN(heightOfRectangle)));

do {
    widthOfRectangle=Number(prompt('Enter rectangle width'));
} while ((Number.isNaN(widthOfRectangle)));

if (RectangleSquare(heightOfRectangle,widthOfRectangle)!==null)
{alert('The square of this rectangle (h='+heightOfRectangle+', w='+widthOfRectangle+') is: '+RectangleSquare(heightOfRectangle,widthOfRectangle).toFixed(2)+' m2');
}else alert('can\'t calculate this Square');

*/



//2. Написати функцію, яка приймає в якості аргумента діаметр кола і повертає довжину кола (длина окружности по диаметру)

function CircleLength(diameter){
    return (diameter>=0) ? diameter * Math.PI : null;
}
/*
//Виклик функції
let diameterOfCircle=Number(prompt('Enter circle diameter'));
if (CircleLength(diameterOfCircle)!==null){
alert('The length of this circle (d='+diameterOfCircle+') is: '+CircleLength(diameterOfCircle).toFixed(2)+' m');
} else alert('can\'t calculate this CircleLength');

*/




//3. Написати функцію, яка приймає в якості аргумента висоту циліндра та діаметр основи і повертає об'єм циліндра.

function CilindreVolume(diameter,height){
    if ((height>=0) && (diameter>=0)){
        return diameter**2 * height * Math.PI / 4;
    } else return null;
}
/*
//Виклик функції
let diameterOfCilindre=Number(prompt('Enter cilindre diameter'));
let heightOfCilindre=Number(prompt('Enter cilindre height'));
if (CilindreVolume(diameterOfCilindre,heightOfCilindre)!==null){
alert('The volume of this cilindre (d='+diameterOfCilindre+', h='+heightOfCilindre+') is:'+CilindreVolume(diameterOfCilindre,heightOfCilindre).toFixed(2)+' m3');
} else alert('can\'t calculate this CilindreVolume');
*/




//4. Написати функцію, яка приймає два числа (діапазон) і виводити на консоль всі числа з цього діапазону, які діляться на 5.

function MultiplesFiveFromRange(from,to){
    let notOnlyToConsole='This numbers is multiples to 5 in range from ' + from + ' to ' + to + ' : \n';
    for (let i = from; i <= to; i++){
        if (i % 5 === 0){
            console.log(i);
            notOnlyToConsole += i + ' ;\n';
        }
    }
    return notOnlyToConsole;
}
/*
//Виклик функції
let fromRange=Number(prompt('Enter first value form range'));
let toRange=Number(prompt('Enter last value form range'));


((fromRange < toRange) && (toRange-fromRange >=5)) ? alert(MultiplesFiveFromRange(fromRange,toRange)): alert ('I cant find such values in this range');


/* другий спосіб перевірки
    if (fromRange > toRange){
        alert ('Something wrong in your range');
    } else if (toRange-fromRange <5){
        alert ('I cant find such values in this range');
    } else alert(MultiplesFiveFromRange(fromRange,toRange));
*/




//6. Реалізовати гру FizzBuzz для 100 чисел.  https://ru.wikipedia.org/wiki/Fizz_buzz

function FizzBuzz(){
    for ( let i = 1; i <= 100; i++){
        n='';        
        if ( i % 3 ===0 ){
            n+='Fizz ';
        }
        if ( i % 5 ===0 ){
            n+='Buzz ';
        }
        if (n===''){
            n=i+' ';
        }
        console.log(n);
    }
}

function FizzBuzz2(){
    let notOnlyToConsole='Result for first 100 numbers : ';
    let nForConsole;
    for ( let i = 1; i <= 100; i++){
        if (( i % 3 ===0 ) && ( i % 5 ===0 )){
            nForConsole='Fizz Buzz, '; notOnlyToConsole+='Fizz Buzz, ';
        } else if ( i % 3 ===0 ){
            nForConsole='Fizz, '; notOnlyToConsole+='Fizz, ';
        } else if ( i % 5 ===0 ){
            nForConsole='Buzz, '; notOnlyToConsole+='Buzz, ';
        } else {
            nForConsole=i+', '; notOnlyToConsole+=i+', ';
        }
        console.log(nForConsole);
    }
    return notOnlyToConsole;
}
/*Виклик функції
alert(FizzBuzz2());
*/


/*
Задачка із зірочкою (НЕОБОВʼЯЗКОВА)
Написати функцію, яка приймає коефіцієнти квадратного рівняння і вирішує рівняння, і виводить на консоль можливі значення Х.
*/

function rootsOfQuadraticEquation(a,b,c)
{
    let d=b**2 - 4 * a * c;
    if (d < 0) {
        x1 = null;
        x2 = null;
        message='Sorry, this equation haven\'t roots';
    } else if (d === 0){
        x1 = - b / (2 * a);
        x2 = null;
        message='This equation have only one root :';
    } else {
        x1=(-b + Math.sqrt(d))/(2 * a);
        x2=(-b - Math.sqrt(d))/(2 * a);
        message='This equation have two roots :';
    }
    console.log(message); let notOnlyToConsole=message;
    if (x1!==null) {console.log('x1 = '+x1); notOnlyToConsole+='\n' + 'x1 = '+ x1;}
    if (x2!==null) {console.log('x2 = '+x2); notOnlyToConsole+='\n' + 'x2 = '+ x2;} 
    return notOnlyToConsole;
}
/*Виклик функції
let koefA=Number(prompt('Enter "a" koefficient'));
let koefB=Number(prompt('Enter "b" koefficient'));
let koefC=Number(prompt('Enter "c" koefficient'));

alert(rootsOfQuadraticEquation(koefA,koefB,koefC));
*/


