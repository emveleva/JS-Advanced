function solve(input){
    let number = Number(input.shift());
    
    while (input.length > 0){
        let command = input.shift();
        switch (command) {
            case 'chop':
                number /= 2;
                break;
        
            case 'dice':
                number = Math.sqrt(number)
                break;
            
            case 'spice':
                number += 1;
                break;

            case 'bake':
                number = number * 3;
                break;

            case 'fillet':
                number = number - number * 20/100;
                break;
        }
        console.log(number)
    }
}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet',])