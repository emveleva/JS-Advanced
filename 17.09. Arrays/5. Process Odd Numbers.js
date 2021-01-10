function solve(input){
    let array = [];
    for (let i = 0; i < input.length; i++){
        if (i % 2 !== 0){
            let number = input[i]*2;
            array.push(number)
        }
    }
    let reversed = array.reverse();
    console.log(array.join(' '))
}

solve([3, 0, 10, 4, 7, 3])