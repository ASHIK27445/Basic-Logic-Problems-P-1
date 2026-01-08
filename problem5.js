const removeDup = (num) =>{
    return num.filter((value, index)=> num.indexOf(value) === index)
}

console.log(removeDup([1, 2, 2, 3, 4, 4]))