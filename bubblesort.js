//bubble sort
a = [-2, 45, 0, 11, -9]
// a=[1,2,3]
for(i=0;i<a.length-1;i++){
    swapped = false;
    for(j=0;j<a.length-i-1;j++){
        if(a[j]>a[j+1]){
            temp=a[j];
            a[j]=a[j+1];
            a[j+1]=temp;
            swapped=true;
        }
    }
    if(swapped==false){
        break;
    }
}
console.log(a)
console.log(swapped);

// for(value of a){
//     console.log(value);
// }
//of is for value
//in is for index or key