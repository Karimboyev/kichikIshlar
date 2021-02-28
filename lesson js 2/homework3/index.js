var a=Math.floor(Math.random()*150);
var n=0;
console.log('a=',a);
for(let i=1; i<a;i++)
{
    if(a%i==0)
    {
        n+=i;
    }
}
if(n==a)
{
    console.log("a soni mukammal son!");
} else console.log("a soni mukammal son emas!")