function solve(num){
    let string = num.toString();
    let result = true;
    let sum = 0;
    for (let i = 0; i < string.length; i++){
        sum += Number(string[i])
        let counter = i;
        if (i === string.length-1){
            break;
        }
        if (string[i] != string[counter+1]){
            result = false;
        }
    }
    console.log(result)
    console.log(sum)
}

solve(2222222)