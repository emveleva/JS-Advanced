function solve(input){
    let step = Number(input.pop());
    input.forEach((element, index) => {
        if (index % step === 0){
            console.log(element)
        }
    
    });
    
}

solve(['5', '20', '31', '4', '20', '2'])