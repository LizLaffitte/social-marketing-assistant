export const addUser = user => {
    return {
        type: "ADD_USER",
        user
    }
}
export const signup = credentials => {
    console.log(credentials)
    return dispatch => {
        return fetch('http://localhost:3000/signup', {
            credentials: 'include',
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
          })
        .then(response => response.json())
        .then(userData => {
            if(userData.error){
                console.log(userData.errors)
            } else {
                dispatch(addUser(userData.data))
            }
            
        })
        .catch(console.log())
    }
}