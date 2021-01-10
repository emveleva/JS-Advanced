function solve(fruitType, weight, price){
    let totalWeight = weight/1000;
    let totalMoney = totalWeight*price;
    console.log(`I need $${totalMoney.toFixed(2)} to buy ${totalWeight.toFixed(2)} kilograms ${fruitType}.`)
}

solve('orange', 2500, 1.80)