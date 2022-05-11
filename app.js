const post = {
    title: 'All about fetch',
    body: 'The fetch is so coool',
    userId: 1
}

const newPost = post =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(post),
        headers: ({'Content-type':'application/json'
        })
    }
    return  fetch(`http://jsonplaceholder.typicode.com/posts`,options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.log('Error'))
}

console.log(newPost(post))