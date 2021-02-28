let h,m,s;
let vaqt;
let i=document.getElementById('minuts');
let k= document.getElementById('start');
function start(){
    m=0;
    h=0;
    s=1;
    m=document.getElementById('minuts').value;
    h=Math.floor(m/60);
    m=m%60;
    if(m>=0){
        document.getElementById('h').innerHTML=`${h}:`;
        if(m>=0 && m<10) document.getElementById('m').innerHTML=`0${m}:`;
        else document.getElementById('m').innerHTML=`${m}:`;
        document.getElementById('s').innerHTML=`00`;
        vaqt=setInterval(time,1000);
        i.disabled=true;
        k.disabled=true;
    } else {
        alert('Xato');
        document.getElementById('minuts').value='';
    }

    time(); 

}
function stop(){
    clearInterval(vaqt);
    i.disabled=false;
    k.disabled=false;
    document.getElementById('minuts').value='';
    s=1;
    h=0;
    m=0;
    document.getElementById('h').innerHTML=`0${h}:`;
    document.getElementById('m').innerHTML=`0${m}:`;
    document.getElementById('s').innerHTML=`00`;
}

function time(){
    if(h>=0){
        if(m>=0){
            s-=1;
            if(s>=0 && s<10) document.getElementById('s').innerHTML=`0${s}`;
            else document.getElementById('s').innerHTML=`${s}`;
            if(s==0){
                s=60;
            }
            if(s==60 && m==0){
                m=60;
                document.getElementById('h').innerHTML=`${h}:`;
                document.getElementById('m').innerHTML=`00:`;
            }
            if(s==59){
                m-=1;
                if(m>=0 && m<10) document.getElementById('m').innerHTML=`0${m}:`;
                else document.getElementById('m').innerHTML=`${m}:`;
                if(m==59) {h-=1;document.getElementById('h').innerHTML=`${h}:`;}
            }
        }
        if(h==0 && m==60 && s==60){
            clearInterval(vaqt);
            i.disabled=false;
            k.disabled=false;
            document.getElementById('minuts').value='';
            h=0;
            m=0;
            s=1;
        }
    }
    
}
