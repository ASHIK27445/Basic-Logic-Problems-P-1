const findEvenNumber = (numbers) => {
    const evenNumbers = []

    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0){
            evenNumbers.push(numbers[i])
        }
    }
    return evenNumbers
}

console.log(findEvenNumber( [1, 2, 3, 4, 5, 6]))