let hrs = document.getElementById('hour')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

function displaytime (){
    const D = new Date;

    let hh =  D.getHours();
    let mm =  D.getMinutes();
    let ss =  D.getSeconds();
    // console.log(hh,mm,ss);
   
   hrs.style.transform = `rotate(${hh * 30}deg)`
   min.style.transform = `rotate(${mm * 6}deg)`
   sec.style.transform = `rotate(${ss * 6}deg)`
}



setInterval(displaytime,1000)
