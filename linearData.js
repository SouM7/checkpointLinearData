let set1=[3,1,7,9];
let set2=[2,4,1,9,3];

function ifincludes(ar1,ar2) {
    
let sum=0;
for(let i=0 ; i < ar2.length ; i++){

if(ar2.includes(ar1[i])){
    
    sum=sum+(ar1[i]*2)

}
}

return(sum);
}

console.log(ifincludes(set1,set2));

function notincludes(ar1,ar2) {
    
    let sum=0;
    for(let i=0 ; i < ar1.length ; i++){

   if( ! ar2.includes(ar1[i]) ){
        
        sum=sum+ar1[i];
    
    }
    }
    console.log(sum);

    for(let i=0; i<ar2.length;i++){
        if( ! ar1.includes(ar2[i]) ){
        
            sum=sum+ar2[i];
        
        }
    
    }
    console.log(sum);
    return(sum);
}
    console.log(notincludes(set1,set2));