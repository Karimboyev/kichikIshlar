var a=Math.floor(Math.random()*1000);
console.log('a=',a);
if((a-1)%20==0 | (a-2)%20==0 | (a+1)%20==0 | (a+2)%20==0)
{
    console.log('true');
} else console.log('false')