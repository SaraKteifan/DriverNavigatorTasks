function arrayReverse(arr){
    let l=arr.length;
    let newArr=[];
    let j= l-1;
    for(let i=0; i<l; i++){
       newArr[i]= arr[j];
       j--;
       if (j<0){
           break;    
        }
}
    return newArr;
}


document.getElementById('Result').innerHTML= JSON.stringify(arrayReverse([8, 3, 4, 8, 4, 8]));