function reverse(name) 
{
    const  words=name.split(' ');
    let j=0;
    while(j<words.length)
    {  
        let len=words[j].length;
        let rev="";
        for(let i=len-1;i>=0;i--)
        { 
           rev+=words[j][i];
        } 
        words[j]=rev;
        j+=1; 
    }
    
    return words.join(' ');
}
 