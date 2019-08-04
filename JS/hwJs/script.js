// function ucFirst(str){
//     return str.charAt(0).toUpperCase()+str.slice(1);
//    }
  
//    alert (ucFirst('vasa'));
   


//    Случайное из интервала (0, max)
// var b = 10;
// var a = Math.random()*b;
// alert(a);
// Случайное из интервала (min, max)
// var b = 10;
// var a = 2;
// alert( a+Math.random()*(b-a));



// Задача на спам

// function checkSpam(a){
//      var b = 'viagra';
//      var c = 'xxx';
//     a = a.toLowerCase();
//     if (~a.indexOf(b)||~a.indexOf(c))
// alert (true);
// else alert (false);
// }
// checkSpam('XXX');


// Усечение строки


// function truncate(str,maxlength){
// if(str.length>maxlength) alert (str.slice(0,maxlength-3)+'...');
// else alert(str);
// }
// truncate('Hi Anastasiya’,2);

// или

// function truncate(str, maxlength) {
//   return (str.length > maxlength) ?
//     str.slice(0, maxlength - 3) + '...' : str;
// }


// Получить последний элемент массива
// var a = [0,1,2,3];
// a[a.length-1];

// Добавить новый элемент в массив

// var a = [0,1,2,3];
// a[a.length]="aaa";

// Создание массива


// var style = ["jass","bluse"];
// style.push("rok");
// style[style.length-2] = "class";
// style.shift();
// style.unshift("rap","cool");
// style



// Создайте дату

// var d = new Date (2012,1,20,3,12);
// alert( d )

// Имя дня недели
// var date = new Date(2012,0,6);
// d = date.getDay();
// (d==0) ? d="ВС": (d==1) ? d="ПН": (d==2) ? d="ВТ": (d==3) ? d="СР": (d==4) ? d="ЧТ":(d==5) ? d="ПТ":(d==6) ? d="СБ": d = "null";
// alert(d);

// через функц


// function getWeekDay(d){
//     var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// return days[d.getDay()];
// }
// var d = new Date();
// alert(getWeekDay(d));


// День недели в европейской нумерации

// function getLocalDay(d){
//     var b = new Date(2012, 0, 3);
// var c = [1,2,3,4,5,6.7];
// return c[b.getDay()-1];}
// alert(getLocalDay());

// или

// function getLocalDay(date) {

//   var day = date.getDay();

//   if (day == 0) { // день 0 становится 7
//     day = 7;
//   }

//   return day;
// }

// alert( getLocalDay(new Date(2012, 0, 3)) ); // 2


// День указанное количество дней назад

// function getDateAgo(date, days){
//     var dateAgo = date;
//     dateAgo.setDate(date.getDate()-days);
// }
// var date = new Date (2015, 0, 2);
// getDateAgo(date,2)
// alert(dateAgo);


// Последний день месяца?

// function getLastDayOfMonth(year, month){
//     var d = new Date(year, month+1,0);
//     alert (d.getDate());
// }
// getLastDayOfMonth(2012, 1);


// Сколько секунд уже прошло сегодня?

// function getSecondsToday(a){
//      alert( (a.getHours()*3600)+(a.getMinutes()*60)+a.getMilliseconds());}
// getSecondsToday(new Date());


// Сколько секунд - до завтра?

// function getSecondsToday(a){
//     var b = new Date(a.getFullYear(),a.getMonth(),a.getDate()+1);
//     alert(Math.round((b-a)/1000));}
// getSecondsToday(new Date());


// ДЗ


// function getMultip(){
//     var a = arguments[0];
//     var b = arguments[1];
//     return (arguments[1]) ?  a*b : 
//      function (){
//         b = arguments[0];
//        return a*b;
//     }
// }
// getMultip(2)(3);


// Сумма через замыкание

// function sum(a){
//     return function (b){
//    return a+b;
//     }
// }
// sum(2)(3);


// Счетчик

// function makeCounter(){
//     var carCounter = 1;
//     return function (){
//    return carCounter++;
//     }
// }
//  var counter = makeCounter();
// counter();


// Объект счётчика + функция

// function makeCounter(){
//     var carCounter = 1;
//  function counter (){
//    return carCounter++;
//     }
//     counter.set =  function (value){
//         carCounter = value;
//     }
//     counter.reset = function(){
//         carCounter = 1;
//     }
//     return counter;
// }
//  var counter = makeCounter();
// counter.set(3);
// counter();
// counter.reset();
// counter();



// Функция - строковый буфер


// function makeBuffer (){
//   var zoneBuffer = "";
//   return function buffer (){
//       for(var i = 0; i< arguments.length; i++){
//           zoneBuffer += arguments[i];
//       }
//       return zoneBuffer;
//   }
// }
// var buffer = makeBuffer();
// buffer(3);
// buffer(3);
// buffer();



// Строковый буфер с очисткой

// function makeBuffer (){
//    var zoneBuffer = "";
//    return function buffer (){
//        for(var i = 0; i< arguments.length; i++){
//            zoneBuffer += arguments[i];
//        }
//        buffer.clear = function(){
//            zoneBuffer='';
//        }
//        return zoneBuffer;
//    }
// }
// var buffer = makeBuffer();
// buffer(3);
// buffer(3);
// buffer();
// buffer.clear();
// buffer();









