function sum(...numbers) {
    let result = 0;
    for (let i of numbers)
        result += i;
    return result;
}

function average(...numbers) {
    return sum(...numbers) / numbers.length;
}

export { average, sum };

 