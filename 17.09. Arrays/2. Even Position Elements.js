function solve(input){
    let array = [];
    for (let i = 0; i < input.length; i++){
        if (i % 2 === 0){
            array.push(input[i])
        }
    }
    console.log(array.join(' '))
}

solve(['20', '30', '40'])