document.querySelector('#signup-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const firstName = e.target.elements.firstName.value
    const lastName = e.target.elements.lastName.value
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    const confirmPassword = e.target.elements.confirmPassword.value

    if(!firstName.length) {
        const el = document.createElement('scan')
        el.textContent = '*required'
        document.querySelector('#first-name-row').appendChild(el)
    }

    if(!lastName.length) {
        const el = document.createElement('scan')
        el.textContent = '*required'
        document.querySelector('#last-name-row').appendChild(el)
       
    }

    if(!email.length) {
        const el = document.createElement('scan')
        el.textContent = '*required'
        document.querySelector('#email-row').appendChild(el)
    }

    if(!password.length) {
        const el = document.createElement('scan')
        el.textContent = '*required'
        document.querySelector('#password-row').appendChild(el)
        
       
    }
    
    if(!confirmPassword.length) {
        const el = document.createElement('scan')
        el.textContent = '*required'
        document.querySelector('#confirm-password-row').appendChild(el)
       
    }

    if(password !== confirmPassword) {
        const el = document.createElement('scan')
        el.textContent = '*Password does not match'
        return document.querySelector('#confirm-password-row').appendChild(el)
        
    }



       fetch('./users', {method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, email, password })
        }).then((response)=> {
            response.json().then((data) => {
                console.log(data)

                if (data.errors) {

                    if(data.errors.lastName) {
                        console.log('Last name is required')
                    }
                    
                    if(data.errors.password) {
                        return console.log('Password must be longer than 6 characters')
                    }
                    
                }  
                
                window.location.href = './'
                    
                

            })
            
        })

        
})