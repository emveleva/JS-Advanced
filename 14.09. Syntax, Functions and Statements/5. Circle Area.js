function solve(arg){
    let inputType = typeof(arg)
    if (inputType !== 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    } else {
        let circleArea = Math.PI*arg*arg;
        console.log(circleArea.toFixed(2))
    }
}

solve('name')