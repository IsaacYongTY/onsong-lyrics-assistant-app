const myFunction = (data, callback) => {
    setTimeout( () => {
        console.log(data)

    callback()
    
    }, 2000)

    
}

myFunction('First function', () => {
    console.log('Callback function')
})