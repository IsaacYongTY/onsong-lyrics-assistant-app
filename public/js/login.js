
document.querySelector('#login-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const email = e.target.elements.email.value
    const password = e.target.elements.password.value


    // fetch('./users/login', {method: 'POST', headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'  
    //     },
    //     body: JSON.stringify({ email, password })
    // }).then((response) => {
    //     if (response.status !== 200) {
    //         return console.log('Invalid credentials')
    //     }

    //    console.log('Login successful')
        // response.json().then((data) => {
        //     console.log('in')
        //     fetch('./about', {method: 'GET', headers: {
        //         'Authorization': 'Bearer ' + data.token,
        //         }
                

        //     //window.location.href = './'
        //     })

            
        // }).catch()
    // })

    
})


