document.getElementById('getText').addEventListener('click',getText)
document.getElementById('getUsers').addEventListener('click',getUsers)
document.getElementById('getPosts').addEventListener('click',getPosts)
document.getElementById('addPost').addEventListener('submit',addPost)

    function getText() {
        /* fetch('sample.txt')
        .then(function(res) {
           return res.text()
        })
        .then(function (data){
            console.log(data)
        }) */

        fetch('sample.txt')
        .then((res) => res.text())
        .then((data) => {
         document.getElementById('output').innerHTML = data
        })
        .catch((err) =>  console.log('Error'))
    }

function getUsers(){
    
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h1>Users</h1>'
        data.forEach(function(user) {

            //+= inseamna append ,se adauga la lista,pentru fiecare user din json */
            output += `
            <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Email: ${user.email}</li>
            </ul>
            `
        })
        document.getElementById('output').innerHTML=output
    })
}


function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h1>Posts</h1>'

        data.forEach(function(post) {
            output += ` 
            <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            </div>
            `
        })
        document.getElementById('output').innerHTML=output
    })
}

function addPost(e){
    e.preventDefault()

    // scriem .value ca sa ii atribuim valoare pe care o adaugam noi elementului cu id-ul title din html
    let title = document.getElementById('title').value
    let body = document.getElementById('body').value

    // punem si al doilea parametru, prin care dam override la useri din json si trecem datele noastre
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type':'application/json'
        },
        body:JSON.stringify({title:title, body:body})
      })
    .then((res) => res.json())
    .then((data) => console.log(data))
}







    