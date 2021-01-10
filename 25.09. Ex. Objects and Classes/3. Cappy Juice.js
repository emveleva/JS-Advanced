function solve(input){
    let obj = {};
    let bottles = {};

    input.forEach(element => {
        let [fruit, quantity] = element.split(' => ');
        quantity = Number(quantity);
        if (!obj[fruit]){
            obj[fruit] = quantity;
        } else {
            obj[fruit] = obj[fruit] + quantity;
        }
            if (obj[fruit] >= 1000) {
                let bottlesMade = Math.floor(obj[fruit] / 1000);
                obj[fruit] = obj[fruit] - bottlesMade * 1000;
                if (!bottles[fruit]){
                    bottles[fruit] = bottlesMade;
                } else {
                    bottles[fruit] += bottlesMade;
                }
            
        }
    });
    let result = Object.entries(bottles);
    for (let kvp of result){
        console.log(`${kvp[0]} => ${kvp[1]}`)
    }
}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
)