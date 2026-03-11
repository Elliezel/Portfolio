let z = 1;

/* BOOT LOADING BAR */
let progress = 0;
let bar = document.getElementById("loadingProgress");
let bootInterval = setInterval(()=>{
  progress += 2;
  bar.style.width = progress + "%";
  if(progress >= 100){
    clearInterval(bootInterval);
    document.getElementById("bootScreen").style.display="none";
  }
},50);

/* CLOCK */
function updateClock(){
  let clock = document.getElementById("taskClock");
  let now = new Date();
  clock.innerText = now.toLocaleTimeString();
}
setInterval(updateClock,1000);

/* OPEN WINDOW CENTERED */
function openWindow(id){
  let win = document.getElementById(id);
  win.style.display="block";
  z++;
  win.style.zIndex = z;
  win.style.left=(window.innerWidth/2 - win.offsetWidth/2)+"px";
  win.style.top=(window.innerHeight/2 - win.offsetHeight/2)+"px";
}

/* CLOSE WINDOW */
function closeWindow(id){document.getElementById(id).style.display="none";}

/* MINIMIZE WINDOW */
function minimizeWindow(id){document.getElementById(id).style.display="none";}

/* DRAG WINDOWS */
let windows = document.querySelectorAll(".window");
windows.forEach(win=>{
  let title=win.querySelector(".title-bar");
  title.onmousedown=function(e){
    z++; win.style.zIndex=z;
    let shiftX=e.clientX-win.getBoundingClientRect().left;
    let shiftY=e.clientY-win.getBoundingClientRect().top;
    function moveAt(pageX,pageY){win.style.left=pageX-shiftX+"px";win.style.top=pageY-shiftY+"px";}
    function onMouseMove(e){moveAt(e.pageX,e.pageY);}
    document.addEventListener("mousemove",onMouseMove);
    document.onmouseup=function(){document.removeEventListener("mousemove",onMouseMove);document.onmouseup=null;};
  };
});

/* START MENU */
function toggleStartMenu(){
  let menu=document.getElementById("startMenu");
  menu.style.display = menu.style.display==="block"?"none":"block";
}