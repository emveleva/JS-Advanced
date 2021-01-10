function solve(input){
    let length = input.length;
    let list = {};
    for (let i = 0; i < length; i++){
        if (i % 2 === 0){
            list[input[i]] = Number(input[i+1]);
        }
    }
    console.log(list)
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])