fetch('https://reqres.in/api/users', {
    method:'POST',// setam metoda
    headers: {// la headers intotdeuna va fi asa 
        'Content-type':'application/json'
    },
    body: JSON.stringify({// json trebuie sa ii dai strigify
        name:'User 1'
    })
}).then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('Error'))// nu primim eroare, pentru ca fetch intotdeauna da ceva, daca nu e network error..etc
    // o sa dea eroare doar daca fetch ul nu e corect scris 










