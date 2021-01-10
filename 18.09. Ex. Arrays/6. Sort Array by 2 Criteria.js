function solve(input){
    let sortedAssending = input.sort((a, b) => a.length - b.length ||  a.localeCompare(b));
    // let sortedAplhabetic = sortedAssending.sort((a, b) => a.localeCompare(b))
    console.log(sortedAssending.join('\n'))
}

solve(['alpha', 'beta', 'gamma'])