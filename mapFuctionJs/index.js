function parametr(a,b){
    return b(a);
}
function firstMap(a,b,i=0){
    if(i<=a.length){
        parametr(a[i],b);
        i++;
        return firstMap(a,b,i)
    }
}
let a=[1,2,3,5,6,8];
firstMap(a,(x)=>{
    console.log(x);
})
