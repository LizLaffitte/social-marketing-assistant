export const addUser = user => {
    return {
        type: "ADD_USER",
        user
    }
}
export const signup = (credentials, token) => {
    console.log(credentials)
    console.log(JSON.stringify(credentials))
    return dispatch => {
        return fetch('http://localhost:3000/signup', {
            credentials: 'include',
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
          })
        .then(response => response.text())
        .then(userData => {
            console.log(userData)
            // if(userData.error){
            //     console.log(userData.errors)
            // } else {
            //     dispatch(addUser(userData.data))
            // }
            
        })
        .catch(console.log())
    }
}