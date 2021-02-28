var konfet=Math.floor(Math.random()*18);
var choy = Math.floor(Math.random()*18);
console.log('konfet=',konfet);
console.log('choy=',choy);
if(choy<5 | konfet<5)
{
    console.log('0');
} else if(choy>=2*konfet | konfet>=2*choy)
{
    console.log("2");
} else console.log('1');
