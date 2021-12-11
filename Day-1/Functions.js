/*
 * Create the function factorial here
 */
function factorial(fact){
    let result = 1;
    for(let i=1; i<=fact; i++){
        result *= i
    }
    return result;
}