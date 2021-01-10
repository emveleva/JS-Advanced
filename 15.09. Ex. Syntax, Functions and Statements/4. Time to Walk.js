function solve(steps, length, speed){
    let distance = steps * length;
    let breaks = Math.floor(distance/500);
    let speedMeters = speed * 5 / 18;
    let time = distance/speedMeters+breaks*60;
    let hours = Math.floor(time/3600);
    let minutes = Math.floor(time/60);
    let seconds = Math.ceil(time%60);

        console.log(`${hours < 10 ? 0 : ''}${hours}:${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`)
    

    
}

solve(2564, 0.70, 5.5)