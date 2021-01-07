export const addPost = post => {
    return{
        type: 'ADD POST',
        post

    }
}

export const addPosts = posts => {
    return {
        type: 'ADD POSTS',
        posts
    }
}

export const createPost = postFormData => {
    return dispatch =>{
        const post = {post: postFormData}
        return fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(post)
        })
        .then(response => response.json())
        .then(data => {
            if(data.errors){
                alert(data.errors)
            } else {
                console.log(data)
            }
        })
        .catch(console.log("Sometihng went wrong."))
    }
}