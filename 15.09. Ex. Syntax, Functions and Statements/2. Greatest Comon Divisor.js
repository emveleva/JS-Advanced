function solve(num1, num2){
    if (num2){
        return solve(num2, num1%num2);
    } else {
        return Math.abs(num1)
    }
}

solve(15, 5)