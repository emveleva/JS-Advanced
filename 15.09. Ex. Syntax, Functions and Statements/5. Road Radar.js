function solve(arg){
    let speed = arg.shift();
    let area = arg.shift();
    let output = '';

    switch (area) {
        case 'motorway':
            if (speed > 130 && speed <= 130 + 20){
                output = 'speeding';
            } else if (speed > 130 && speed <= 130+40){
                output = 'excessive speeding'
            } else if (speed > 130){
                output = 'reckless driving';
            }
            break;
    
        case 'interstate':
            if (speed > 90 && speed <= 90 + 20){
                output = 'speeding';
            } else if (speed > 90 && speed <= 90+40){
                output = 'excessive speeding'
            } else if (speed > 90){
                output = 'reckless driving';
            }
            break;

        case 'city':
            if (speed > 50 && speed <= 50 + 20){
                output = 'speeding';
            } else if (speed > 50 && speed <= 50+40){
                output = 'excessive speeding'
            } else if (speed > 50){
                output = 'reckless driving';
            }
            break;

        case 'residential':
            if (speed > 20 && speed <= 20 + 20){
                output = 'speeding';
            } else if (speed > 20 && speed <= 20+40){
                output = 'excessive speeding'
            } else if (speed > 20){
                output = 'reckless driving';
            }
            break;

    }
    console.log(output)
}

solve([120, 'interstate'])