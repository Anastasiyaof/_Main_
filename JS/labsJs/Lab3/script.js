var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var fourth = document.getElementById('fourth');
var fifth = document.getElementById('fifth');
var sixth = document.getElementById('sixth');
var seventh = document.getElementById('seventh');
var eigth = document.getElementById('eigth');

var nowWindow = window;
var windowNew = "";
var docWrite = function(obj){
    if(!obj) {alert("нет обьекта"); return;}
    var strWindow = Object.getOwnPropertyNames(obj).toString();
    obj.document.write(strWindow);
  }
  
  first.addEventListener("click", function(){docWrite(nowWindow)});
  
  second.addEventListener("click", function(){
    windowNew = window.open("", "", "width=200, height=200");
  });
  
  third.addEventListener("click", function(){docWrite(windowNew)});

  fourth.addEventListener("click", function(){
      windowNew.resizeTo(1000,1000);
  });

  
  fifth.addEventListener("click", function(){
    windowNew.resizeBy(-100,-100);
  });

  sixth.addEventListener("click", function(){
      windowNew.scrollBy(100,0);
    //   windowNew.scrollTo(250,0);
});

seventh.addEventListener("click", function(){
    windowNew.focus();
  });

  eigth.addEventListener("click", function(){
    windowNew.close();
    window.focus();
  });