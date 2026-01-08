const countVowels = (str) =>{
    return str.toLowerCase().split('').filter(letters => "aeiou".includes(letters)).length
}

console.log(countVowels('programming'))