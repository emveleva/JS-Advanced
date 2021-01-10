function solve(input){
    let towns = {};
    let length = input.length;
    while ((line = input.shift()) !== undefined){
        let [town, population] = line.split(' <-> ');
        
        if (towns[town] === undefined){
            towns[town] = Number(population);
        } else {
            towns[town] += Number(population);
        }   
    
}
for (let kvp of Object.entries(towns)){
    console.log(`${kvp[0]} : ${kvp[1]}`)
}
}
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)