function Convert(string){
    let array= string.split(' ');
    let newString= [];
    let l= array.length;
    for(let i=0; i<l; i++){
        let word= `${array[i].charAt(0).toUpperCase()}${array[i].slice(1)}`
        newString.push(word);
    }
    return newString.join(' ');
}

console.log(Convert('the car drove fast'));

