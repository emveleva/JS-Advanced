function solve(area, vol, input){
    let objects = JSON.parse(input);
    function calc(obj){
        let areaObj = Math.abs(area.call(obj));
        let volObj = Math.abs(vol.call(obj));
        return {area: areaObj, volume: volObj}
    } 
    return objects.map(calc)
}