function solve(string){
    let regex = /[A-Za-z]+/gm;
    let matches = string.match(regex);
    let output = [];
    matches.forEach(match => {
        output.push((match.toUpperCase()))
        
    });
    console.log(output.join(', '))
}

solve('Hi, how are you?')