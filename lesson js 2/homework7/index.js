var a=150;
for(let i=2;i<=a;i++)
{
    var tubEmas=false;

    for(let k=2;k<i;k++)
    {
        if(i%k==0) tubEmas=true;
    }
    if(tubEmas==false) console.log(i);
}