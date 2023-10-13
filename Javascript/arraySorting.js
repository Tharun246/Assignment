function sort(arr)
{ 
   const x=arr.split(" "); 
   for (let i=0;i<x.length-1;i++)
   { 
    if(x[i]<x[i+1])
    { 
        let temp=x[i]; 
        x[i]=x[i+1]
        x[i+1]=temp;
    }
     
   }
    return x;
}
