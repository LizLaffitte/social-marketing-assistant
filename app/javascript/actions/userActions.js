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

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
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
                dispatch(addUser(userData.data))
                dispatch(setCurrentUser(userData.data))
            }
            
        })
        .catch(console.log())
    }
}


export const login = (credentials, token) => {
    return dispatch => {
        return fetch('http://localhost:3000/login', {
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
            if(userData.errors){
                console.log(userData.errors)
                //elsif user doesn't exist, redirect to signup form
            } else {
                dispatch(setCurrentUser(userData.data))
            }
            
        })
        .catch(console.log())
    }
}

export const getCurrentUser = (id) => {
    return dispatch => {
        return fetch(`http://localhost:3000/users/${id}`, { 
            credentials: "include",
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
        .then(response => response.json())
        .then(userData => {
            if(userData.errors){
                console.log(userData.errors)
            } else {
                dispatch(setCurrentUser(userData.data))
            }
            
        })
        .catch(console.log("test"))
    }
}

export const logOut = (token) => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3000/logout', {
        credentials: 'include',
        method: 'DElETE',
        headers: {
            "X-CSRF-Token": token,
          "Content-Type": "application/json"
        }
        })
        .then(response => response.text())
        .then(userData => {
            if(userData.errors){
                console.log(userData.errors)
            } else {
                
                console.log(userData.notice)
            }
            
        })
        .catch(console.log())
    }
}