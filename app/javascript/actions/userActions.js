export const addUser = user => {
    return {
        type: "ADD_USER",
        user
    }
}

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

// Async
export const signup = (credentials, token) => {
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
        .then(response => response.json())
        .then(userData => {
            if(userData.error){
                console.log(userData.errors)
            } else {
                dispatch(addUser(userData.data.attributes))
            }
            
        })
        .catch(console.log())
    }
}

export const login = credentials => {
    return dispatch => {
        return fetch('http://localhost:3000/login', {
            credentials: 'include',
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
          })
          
        .then(response => response.json())
        .then(userData => {
            if(userData.errors){
                console.log(userData.errors)
            } else {
                dispatch(setCurrentUser(userData.data))
            }
            
        })
        .catch(console.log())
    }
}