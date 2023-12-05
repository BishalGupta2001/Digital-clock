let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

// 
setInterval(()=>{
    let currentDate =  new Date();
    hrs.innerText = (currentDate.getHours() < 10 ? "0" :"") +currentDate.getHours() ;
    min.innerText = (currentDate.getMinutes() < 10 ? "0" :"") + currentDate.getMinutes();
    sec.innerText = (currentDate.getSeconds() < 10 ? "0" :"") + currentDate.getSeconds();
},1000);