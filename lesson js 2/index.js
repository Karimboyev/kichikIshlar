var a=Boolean(0);
var k=2,n=0;
while(a)
{
    for(let i=1;i<=k;i++)
    {
        if(k%i==0)
        {
            n++;
        }
    }
    if(n==2)
    {
        // document.getElementById("demo").innerHTML(k);
        console.log(k);
    }
    k++;
    n=0;
}
