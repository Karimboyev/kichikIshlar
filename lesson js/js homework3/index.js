var caughtSpeeding = Math.floor(Math.random()*110);
var brithDay=Boolean(Math.round(Math.random()));
console.log('caughtSpeeding=',caughtSpeeding);
console.log('brithDay=', brithDay);

if(brithDay)
{
    if(caughtSpeeding<=65)
    {
        console.log('natija=0');
    } else if(caughtSpeeding>65 && caughtSpeeding<=85)
    {
        console.log('natija=1');
    } else
    {
        console.log('natija=2');
    }
} else
{
    if(caughtSpeeding<=60)
    {
        console.log('natija=0');
    } else if(caughtSpeeding>60 && caughtSpeeding<=80)
    {
        console.log('natija=1');
    } else
    {
        console.log('natija=2');
    }
}

