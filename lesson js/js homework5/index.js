var day=Math.floor(Math.random()*6.4+1);
var vacation=Boolean(Math.round(Math.random()));
var weekDaysOclock,weekendsOclock;
console.log(vacation);
if(vacation)
{
    weekDaysOclock='10:00';
    weekendsOclock='off';
} else{
    weekDaysOclock='7:00';
    weekendsOclock='10:00';
}
switch(day)
{
    case 1: console.log('Mon',weekDaysOclock); break;
    case 2: console.log('Tue',weekDaysOclock); break;
    case 3: console.log('Wed',weekDaysOclock); break;
    case 4: console.log('Thu',weekDaysOclock); break;
    case 5: console.log('Fri',weekDaysOclock); break;
    case 6: console.log('Sat',weekendsOclock); break;
    case 7: console.log('Sun',weekendsOclock);
}
