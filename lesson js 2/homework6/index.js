var a=Math.floor(Math.random()*150);
let tubEmas= false;
console.log('a=',a);
for(let i=2;i<Math.floor(Math.sqrt(a));i++)
{
    
    if(a%i==0)
    {
        tubEmas=true;
    }
}
if(tubEmas==false)
{
    console.log('a soni tub!');
} else console.log('a soni tub emas!');