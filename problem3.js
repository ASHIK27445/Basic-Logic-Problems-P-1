const palindrome = (str) => {
    const original = str.toLowerCase()
    console.log(original)
    const reverse = str.split('').reverse().join('')
    console.log(reverse)
    if(original === reverse){
        return true
    }else{
        return false
    }
}

console.log(palindrome('madam'))
console.log(palindrome('hello'))