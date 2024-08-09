a=[67, 44, 82, 17, 20]
for(i=1;i<a.length;i++){
    key=a[i];
    j=i-1;
    // Shift elements of a[0..i-1], that are greater than key, to one position ahead of their current position
    while(j>=0 && a[j]>key){
        a[j+1]=a[j];
        j--;
    }
    a[j+1]=key;// Insert the key into its correct position
}
console.log(a);