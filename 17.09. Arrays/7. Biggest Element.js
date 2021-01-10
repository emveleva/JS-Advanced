function solve(input){
    let biggestNumber = input
    .map(row => Math.max(...row));

    console.log(Math.max(...biggestNumber))

}

solve([[20, 50, 10], [8, 33, 145]])