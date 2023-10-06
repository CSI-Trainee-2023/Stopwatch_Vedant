var h=0;
var m=0;
var s=0;
var c=0;
var countt = 1;
var button = document.getElementById("start"),
  count = 0;
button.onclick = function() {
  count += 1;
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

function reset(){
    temp=false;
    h=0;
    m=0;
    s=0;
    c=0;
    document.getElementById("msec").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("hr").innerHTML="00";
    document.getElementById("lap").innerHTML="Lap"; 

}

function stopwatch(){
    
    if(temp==true){
        c+=1;
        if(c>99){
            s+=1;
            c=0;
        }
        if(s>60){
            m+=1;
            s=0;
            c=0;
        }
        if(m>60){
            h+=1;
            s=0;
            m=0;
            c=0;
        }
        var hstring=h;
        var mstring=m;
        var sstring=s;
        var cstring=c;
        if(h<10){
            hstring="0"+ hstring;
        }
        if(m<10){
            mstring="0"+ mstring;
        }
        if(s<10){
            sstring="0"+ sstring;
        }
        if(c<10){
            cstring="0"+ cstring;
        }
        document.getElementById("msec").innerHTML=cstring;
        document.getElementById("sec").innerHTML=sstring;
        document.getElementById("min").innerHTML=mstring;
        document.getElementById("hr").innerHTML=hstring;
    
        setTimeout(stopwatch,10)
    }
}

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

}
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey) {
      if (event.key === 's') start();
      if (event.key === 'x') stop();
      if (event.key === 'r') reset();
      if (event.key === 'l') lap();
      
  }
});
