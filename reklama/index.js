let a=document.getElementById('modal').style;
let b=document.getElementById('clos').style;
let t=5;
function timer(){
    document.getElementById('time').innerHTML=`${t}s`;
    t-=1;
}
function clos(){
    a.display="none";
}
window.onload=modal();
function modal(){
    let c=setInterval(timer,1000);
    a.display="block";
    timer();
    setTimeout(()=>{
        clearInterval(c);
        document.getElementById('time').style.display="none";
        b.display="block";
    },5000)   
}
