const pingPong = (num) =>{
    for(let i=1; i<=num; i++){
        i%3 === 0 && i%5 === 0 ? console.log('PingPong') :
        i%3 === 0 ? console.log('Ping') :
        i%5 === 0 ? console.log('Pong') :
        console.log(i)
    }
}

pingPong(20)