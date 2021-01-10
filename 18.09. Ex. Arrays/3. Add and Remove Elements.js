function solve(input){
    let initialNumber = 1;
    let arr = [];
    input.forEach(element => {
        if (element === 'add'){
            arr.push(initialNumber)
        } else {
            arr.pop()
        }
        
        initialNumber += 1;
    });
    arr.length === 0 ? console.log('Empty') : console.log(arr.join('\n'))
}

solve(['remore','remove','remove'])