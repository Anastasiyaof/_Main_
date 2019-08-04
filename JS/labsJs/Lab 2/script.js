// var result = prompt('введите число');
// var b
// if (result === null){
//     b="jnvtyf";
// }else  if (result<=100 && result>=95) {
//     b="A  100-95";}
//     else if(result<=94 && result>=85){ 
//     b="B ";
// }
// else if(result<=84 && result>=75){ 
//     b="C ";
// } else if(result<=74 && result>=65){ 
//     b="D ";
// }
// else if(result<=64 && result>=60){ 
//     b="E ";
// }
// else if(result<=59 && result>=0){ 
//     b="FX ";
// }
// else {
//     b="Попробуй еще"
// }

// вывод цвета
// var a = confirm ("Согласен?");
//  document.getElementById("screen"); 
//  var b =document.getElementById("screen"); 
//  b.innerHTML=`gfghjkl`;
//  b.style="color:black";

// var result = prompt('введите число');
// switch (result) {
//     case 1:
//         alert('min');
//         break;
//     case 5:
//         alert('middle');
//         break;
//     case 5:
//         alert('max');
//         break;
//     default:
//         alert('Я таких значений не знаю');
// }



// var n = 13
// var result = prompt('угадай число');

//  while (result!==13) {
//     result = prompt('Не угадал. Угадай число');
//     if (result==13) break
//  }
  
//  alert('Поздравляю');





// for (var i = 1; i <=10; i++) {


//     for (var J = 1; J <=10; J++) {
//         document.getElementById("screen"); 
//          var b =document.getElementById("screen"); 
//          b.innerHTML=(i+"*"+j+"="+i*j);}
// }

//  var b =["Катя","как дела?","пошли гулять"];
//  document.getElementById("screen"); 
//   var a = document.getElementById("screen"); 
//   a.innerHTML=b;

// var b =[2,5,10,11];
// if(b.indexOf(7)!==-1) {
//     alert("Yes")
// } 
// else{
//     alert("no")
// }


// var a = {
//     name: "Паша",
//     sername: "Дикий",
//     phone: "09388455",
//     car: "Красная",
//     marcers: [1,2,3]
// }
// // for(var key in a){
// //     console.log("key",key, "val", a[key])
// // }
// var b = {
//     name: "Настя",
// sername: "Александровна",
//     phone: "0936669",
//     car: "Красная",
//     marcers: [4,5,8]
// }
// for(var key in b){
//     if(a[key]==b[key]){
//         document.getElementById("screen"); 
//         var obj = document.getElementById("screen"); 
//   obj.innerHTML=("key:" + key+","+" val:"+b[key]);
        
//     }
    
// }

// var c
// function add(a,b) {
//    c= a+b;}
//     add(1,2);
//     alert(c);

//     function minus(a,b) {
//        c= a+b;}
//         minus(5,2);
//        alert(c);

// document.getElementById("screen");
//     var a=getElementById("screen");
// var i,j;
// for(i=0;i<=10;i++){
//     for(j=0;j<=10;j++){
//     }
//     alert=(i*j)
// }


// var str="april";
// alert(str[1] + str[2]);


// var dd = "методы";
// for(i=0;i<dd.length;i++){
// alert(dd[i]);
// }

// var dd = "методы";
// for(i=dd.length;i>=0;i--){
// alert(dd[i]+"\n");
// }


// var a = "Серега";
// for(i=a.length;i>=0;i--){
//     if(a[i]==a.indexOf("е")){
//         alert(i)
//     }
// }

// var a="так что аргументы меняются местами";
// if(a.indexOf('аргументы')>=0) {
//     alert("аргументы".slice(2,-1));
// }
   
// function arg(a,b){
// if(a.indexOf(b)>=0) {
//     alert(a.slice(a.indexOf(b)));
//     return;
// }
//  alert('no');
// }
// arg("так что аргументы меняются местами",'аргументы');

// var names = 'Маша, Петя, Марина, Василий';

// var arr = names.split(', ');

// for (var i = 0; i < arr.length; i++) {
//   alert( 'Вам сообщение ' + arr[i] );
// }



// var res1;
// function strSplit(a,b){
//   res1= a.split(b)
// }
// function check(c,d){
//     if(c.indexOf(d)>=0) {
//      alert(d);
//       return;
// }
// }
// strSplit('Маша, Петя, Марина, Василий',', ');
// check(res1,"Петя");

// var res1;
// function strSplit(a,b){
//   res1= a.split(b);
//   var res2 = res1.reverse();
//   alert(res2.join(' '))
// }
// strSplit('Маша, Петя, Марина, Василий',', ');



// function strSplit(a,b){
// res1= a.split(b).reverse().join(' ');
// alert(res1)}
// strSplit('Маша, Петя, Марина, Василий',', ');


// var arr = ["Я", "изучаю", "JavaScript"];
// arr.splice(0,2, "мы", 'изучаем');
// alert(arr);
// arr.splice(2,1);
// alert(arr);
// arr.splice(1,2, "хотим","изучать","JavaScript");
// alert(arr);


// var arr = ["Почему", "надо", "учить", "JavaScript"];
// var brr = arr.slice();
// brr.splice(1,1, "не  надо");
// alert(brr);
// alert(arr);

// brr.sort();

// brr.reverse(brr.sort());
// alert(brr);



// var a = [1,2,3];
// var b = [4,5,6];
// var c = a.concat(b);
// alert(c);



// var arr = ["Яблоко", "Апельсин", "Груша"];
// var str = ""
// arr.forEach(function(item, i, arr) {
//     if(item==='Апельсин')
//   alert( str+=item );
// });


// var a = [0,33,1020,100000,35,78,2300,7500,325, "Портфель", "Стакан", "мишка"];


// var num = a.filter(function(number) {
//    return number>=200 && number<=5000
// });
// alert(num);
// var str = a.filter(function(string) {
//     return typeof string === 'string'
//  });
//  alert(str);


// var a = [3,9,15,18];
// var namepow = a.map(function(pow) {
//     return Math.pow(pow,3);
//   });
  
  
//   alert( namepow );

//   var a = [3,9,15,18];
// var namepow = a.map(function(item, i) {
//    var c = a[i-1] ? a[i-1] : 0;
//     return Math.pow(item,c);
//   });
  
  
//   alert( namepow );


// var obj = {
//     name: 'Anastasiya',
//     phone: '09355232654',
//     car: 'red',
//     email: "ghjklkjhg@kjhgf",
// };

// function countKey (obj){
//     var count = 0;
//     for (var key in obj) {
//     count++;}
//     alert (count);
// }
// countKey(obj);
  

// function KeyName (obj, key){
//     var count = 0;
//     for (var key in obj) { 
//     if (key == 'undefined') alert("null");
//     else alert(count);
// }
// }
// KeyName(obj,name);




// var date = new Date(2014, 11, 31);
// // function formatDate(date){
// var options = {
//   era: 'long',
//   year: 'numeric',
//   month: 'numeric',
//   day: 'numeric',
 
// };
// var b = date.toLocaleString(options);
// alert(b.getFullYear()+b.getMonth()+""+b.getDate())
// // function formatDate();



// function go() {
//     var sum = 0;
//     for(var i=0;i< arguments.length;i++){
//     sum = arguments[i]+sum;}
//     alert(sum);
//   }
//   go(1,2);



// function go(...arr) {
//     var sum = 0;
//     for(var i=0;i< arr.length;i++){
//     sum = arr[i]+sum;}
//     alert(sum);
//   }
//   go(1,2);



// function forCallBack (arr1,arr2){
// arr2();
// setTimeout(arr1,1000);
// };
// function a (){
//     console.log('1');
// };
//  function b(){
//     console.log('2');
// };
// forCallBack (a,b);



// function sayHiBye(firstName, lastName) {

//  sayHiBye.fullName = function () {
//       return firstName + " " + lastName;
//     }
  
//   }
//   sayHiBye("Вася", "Пупкин");
//   console.log(sayHiBye.fullName());\

// function sum(a){
//    return function(b){
//        return a*b
//    }
// }
// alert(sum(2)(3));



// Проверка на аргумент-undefined
// function f(x){
//         (arguments.length>0) ? alert(1) : alert(0);
//     }
// f(2);
// или alert( arguments.lengs ? 1:0)


// Сумма аргументов
// function sum (){
//     var b = 0;
//     for (var i = 0; i<arguments.length; i++){
        
//        b += arguments[i];
//     }
//     return b;
// }
 
//  alert(sum(2,3,2));


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




// var obj ={
//     name: 'Anastasiya',
//     sername: 'Fom',
//     fullname: function(){
//        alert( this.name +' '+this.sername);
//     }
// }
// obj.fullname();

// function fullName2(){
//     alert( this.name +' '+this.sername);
// }
// obj.fullName2 = fullName2;




// function Calculator(){
//     var a = 0;
//     var b = 0;
//     this.read = function (){
//         a =+ prompt("a?");
//         b =+ prompt("b?");
//     };
//     this.sum =  function(){
//       return a+b;
//     };
//     this.mul = function(){
//         return a*b;
//     };
// }
// var calculator = new Calculator();
// calculator.read();
// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() )