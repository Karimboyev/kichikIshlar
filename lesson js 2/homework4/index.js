var a=Math.floor(Math.random()*1000);
console.log('a=',a);
let i,k,n;
for(let i=1; i<=a;i++)
{
    n=0;
    for(k=1;k<i;k++)
    {
        if(i%k==0)
        {
            n+=k;
        }
    }
    if(n==k)
    {
        console.log(k);
    }
}