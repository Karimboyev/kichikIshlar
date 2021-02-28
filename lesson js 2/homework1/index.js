var a=Math.floor(Math.random()*100);
console.log('a=',a);
console.log("bo'luvchilari:")
for(let i=1; i<=a;i++)
{
    if(a%i==0)
    {
        document.getElementById('demo').innerHTML=i;
    }
}