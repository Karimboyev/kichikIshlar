let input=document.getElementById("input");
let k=null;
let n=null;
let amal=null;
document.getElementById("input").disabled = true;
function button(a){
    switch(a){
        case 0: {if(amal=='barobar'){amal=null;input.value='';}input.value+='0';}break;
        case 1: {if(amal=='barobar'){amal=null;input.value='';}input.value+='1';}break;
        case 2: {if(amal=='barobar'){amal=null;input.value='';}input.value+='2';}break;
        case 3: {if(amal=='barobar'){amal=null;input.value='';}input.value+='3';}break;
        case 4: {if(amal=='barobar'){amal=null;input.value='';}input.value+='4';}break;
        case 5: {if(amal=='barobar'){amal=null;input.value='';}input.value+='5';}break;
        case 6: {if(amal=='barobar'){amal=null;input.value='';}input.value+='6';}break;
        case 7: {if(amal=='barobar'){amal=null;input.value='';}input.value+='7';}break;
        case 8: {if(amal=='barobar'){amal=null;input.value='';}input.value+='8';}break;
        case 9: {if(amal=='barobar'){amal=null;input.value='';}input.value+='9';}break;
        case clean:{input.value="";k=null;n=null;amal=null;}break;
        case kopaytirish:{
            if(input.value!=''){
                if(k!=null && amal=='kopaytirish'){n=k*Number(input.value);input.value=n;}
                if(k!=null && amal=='bolish'){n=k/Number(input.value);input.value=n;}
                if(k!=null && amal=='ayirish'){n=k-Number(input.value);input.value=n;}
                if(k!=null && amal=='qoshish'){n=k+Number(input.value);input.value=n;}
                k=Number(input.value);input.value="";amal='kopaytirish';
            }
        }break;
        case bolish:{
            if(input.value!=''){
                if(k!=null && amal=='kopaytirish'){n=k*Number(input.value);input.value=n;}
                if(k!=null && amal=='bolish'){n=k/Number(input.value);input.value=n;}
                if(k!=null && amal=='ayirish'){n=k-Number(input.value);input.value=n;}
                if(k!=null && amal=='qoshish'){n=k+Number(input.value);input.value=n;}
                k=Number(input.value);input.value="";amal='bolish';
            }}break;
        case ayirish:{
            if(input.value!=''){
                if(k!=null && amal=='kopaytirish'){n=k*Number(input.value);input.value=n;}
                if(k!=null && amal=='bolish'){n=k/Number(input.value);input.value=n;}
                if(k!=null && amal=='ayirish'){n=k-Number(input.value);input.value=n;}
                if(k!=null && amal=='qoshish'){n=k+Number(input.value);input.value=n;}
                k=Number(input.value);input.value="";amal='ayirish';
            }}break;
        case qoshish:{
            if(input.value!=''){
                if(k!=null && amal=='kopaytirish'){n=k*Number(input.value);input.value=n;}
                if(k!=null && amal=='bolish'){n=k/Number(input.value);input.value=n;}
                if(k!=null && amal=='ayirish'){n=k-Number(input.value);input.value=n;}
                if(k!=null && amal=='qoshish'){n=k+Number(input.value);input.value=n;}
                k=Number(input.value);input.value="";amal='qoshish';
            }}break;
        case barobar:{
            if(k!=null && amal=='kopaytirish'){n=k*Number(input.value);input.value=n;}
            if(k!=null && amal=='bolish'){n=k/Number(input.value);input.value=n;}
            if(k!=null && amal=='ayirish'){n=k-Number(input.value);input.value=n;}
            if(k!=null && amal=='qoshish'){n=k+Number(input.value);input.value=n;}
            amal='barobar';
    }



        
    }
}
function backspace(){
    let a=new String;
    let b;
    a=input.value;
    b=a.split('');
    b.pop();
    a=b.join('');
    input.value=a;
}