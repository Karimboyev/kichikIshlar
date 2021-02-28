var a=Math.floor(Math.random()*100);
var n=0;
console.log('a=',a);
for(let i=1; i<=a; i++)
{
    if(a%i==0)
    {
        n++;
        console.log(i);
    }
}

console.log("bo'luvchilar yig'indisi=",n);