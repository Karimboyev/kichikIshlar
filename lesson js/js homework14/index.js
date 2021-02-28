var ertalab=Boolean(Math.round(Math.random()));
var ona=Boolean(Math.round(Math.random()));
var uxlayotgan=Boolean(Math.round(Math.random()));
console.log('ertalab=',ertalab);
console.log('ona=',ona);
console.log('uxlayotgan=',uxlayotgan);
if(ona)
{
    console.log('true');
} else if(ertalab | uxlayotgan) console.log('false');
else console.log('true');

