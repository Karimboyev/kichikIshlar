var a=Math.floor(Math.random()*20);
var outsideMod=Boolean(Math.round(Math.random()));
console.log('a=',a);
console.log('outsideMod=',outsideMod);
if(outsideMod)
{
    if(a<=1 | a>=10)
    {
        console.log('true');
    } else{
        console.log('false');
    }
} else
{
    if(a<=1 | a>=10)
    {
        console.log('false')
    } else {
        console.log('true')
    }
}