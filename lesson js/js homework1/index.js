var  temperature= Math.floor(Math.random()*100);
var  isSummer = Boolean(Math.round(Math.random()));
console.log('temperatura=',temperature);
console.log('Summer',isSummer);
if(temperature>60 && temperature<90)
{
    console.log('natija=ture');
} else if(isSummer==true && temperature>=90 && temperature<100)
{
    console.log('natija=true');
} else {
    console.log('natija=false')
}
