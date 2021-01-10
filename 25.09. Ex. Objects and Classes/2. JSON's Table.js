function solve(input){
    let obj = {};
    console.log('<table>')
    input.forEach(element => {
        let converted = JSON.parse(element);
        console.log('<tr>')
        console.log(`<td>${converted.name}</td>`)
        console.log(`<td>${converted.position}</td>`)
        console.log(`<td>${converted.salary}</td>`)
        console.log('</tr>')

    });
    console.log('</table>')
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'])
