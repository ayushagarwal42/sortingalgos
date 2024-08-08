// selection sort

let a=[20,12,10,15,2];

for(let step=0;step<a.length-1;step++){
    let minidx=step;
    for(i=step+1;i<a.length;i++){
        if(a[i]<a[minidx]){
            minidx=i
        }
    }
    let temp=a[step];
    a[step]=a[minidx];
    a[minidx]=temp;
}
console.log(a)