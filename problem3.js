const palindrome = (str) => {
    const original = str.toLowerCase()
    const reverse = str.split('').reverse().join('')
    if(original === reverse){
        return true
    }else{
        return false
    }
}

console.log(palindrome('madam'))
console.log(palindrome('hello'))