var numbers=document.querySelector(".number");function setProperty(e){red.style.setProperty("--animation-time",e+"s")}function changeAnimationTime(){setProperty(Math.floor(12*Math.random())+3)}setInterval(changeAnimationTime,1e3);