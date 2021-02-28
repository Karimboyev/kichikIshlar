var a=Math.floor(Math.random()*1000);
console.log('a=',a);

if(a%3==0 | a%5==0)
{
    if(a%15!=0){
        console.log('true');
    } else console.log('false');
} else console.log('false');