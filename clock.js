
//setInterval------- while using animations we can use this method to set time span 
//it takes value in milliseconds ---- 1000millisec = 1sec
/*var a = 0;
var id = setInterval(anim,100)

function anim(){
    a = a+10;
    if(a==500)
    {
        clearInterval(id);
    }
    else{
        var target = document.querySelector("#test3");
        target.style.width=a +'px';
    }
}*/

/*var t;
var date;
t = new Date();
date = t.toDateString();
document.write(date);*/

var t;
var date;
var interval = setInterval(dateString,1000);
function dateString(){
     t = new Date();
     date = t.toDateString();
     document.querySelector("#date").innerHTML=date;
}

var a;
var time;
var h;
var m;
var s;
var hours;
var eve;
var id = setInterval(timing,1000);
function timing(){
     a = new Date();
     h = a.getHours();
     if(h>12){
        eve = "pm";
         h =  h - 12;
         hours = '0'+h;
    }
    else{
        eve="am";
        hours = h;
    }
     
     m = a.getMinutes();
     if(m<10){
        m = '0'+m;
    }
     s = a.getSeconds();
     if(s<10){
        s = '0'+s;
    }
     time = hours+':'+m+':'+s+eve;
     document.querySelector("#time").innerHTML=time;
}

