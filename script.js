
var button = document.getElementById("start"),
  count = 0;
button.onclick = function() {
  count =count+1;
  if(count%2 !=0){
    start();
  }
  else{
    stop();
    document.getElementById("lap").innerHTML="Reset";
  }

}
var temp=false;

var button1 = document.getElementById("lap");
button1.onclick = function() {
  if(temp==true){
    lap();
  }
  else{
    reset();
  }
}
function start(){
    temp=true;
    document.getElementById("start").innerHTML="Stop";
    stopwatch();

       
}  
function stop(){
    temp=false;
    document.getElementById("start").innerHTML="Start";

}
var hour=0;
var minute=0;
var second=0;
var milisecond=0;

function reset(){
    temp=false;
    hour=0;
    minute=0;
    second=0;
    milisecond=0;
    document.getElementById("msec").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("hr").innerHTML="00";
    document.getElementById("lap").innerHTML="Lap"; 
}

function stopwatch(){
    
    if(temp==true){
        milisecond=milisecond+1;
    if(milisecond==100){
            second=second+1;
            milisecond=0;
        }
    if(second==60){
            minute=minute+1;
            second=0;
            milisecond=0;
        }
    if(minute==60){
            hour=hour+1;
            second=0;
            minute=0;
            milisecond=0;
        }
        var hourstring=hour;
        var minutestring=minute;
        var secondstring=second;
        var milisecondstring=milisecond;
    if(hour<10){
            hourstring="0"+ hourstring;
        }
    if(minute<10){
            minutestring="0"+ minutestring;
        }
    if(second<10){
            secondstring="0"+ secondstring;
        }
    if(milisecond<10){
            milisecondstring="0"+ milisecondstring;
        }
        document.getElementById("msec").innerHTML=milisecondstring;
        document.getElementById("sec").innerHTML=secondstring;
        document.getElementById("min").innerHTML=minutestring;
        document.getElementById("hr").innerHTML=hourstring;
    
        setTimeout(stopwatch,10)
    }
}
var countt = 1;
function lap(){
  var laptime1 = `${document.getElementById("hr").innerHTML}:${document.getElementById("min").innerHTML}:${document.getElementById("sec").innerHTML}:${document.getElementById("msec").innerHTML}`;
  const laps = document.querySelector(".laps");
  var li1 = document.createElement("li");
  li1.classList.add("lap-item");
  d1 = document.createElement("div");
  d1.innerHTML = `${countt}`;
  d2 = document.createElement("div");
  d2.innerHTML = laptime1;
  li1.appendChild(d1);
  li1.appendChild(d2);
  laps.appendChild(li1);
  countt++;
localStorage.setItem('laps',laptime1);
localStorage.getItem('laps',laptime1);
}
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey) {
      if (event.key === 's') start();
      if (event.key === 'x') stop();
      if (event.key === 'r') reset();
      if (event.key === 'l') lap();
      
  }
});

