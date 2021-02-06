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

export const redirectUser = (location) => {
    return {
        type: "REDIRECT_USER",
        location
    }
}

// Async
export const signup = (credentials, token) => {
    return dispatch => {
        return fetch('/signup', {
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
        return fetch('/login', {
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
                if(userData.errors == "User doesn't exist"){
                   dispatch(redirectUser("/signup")) 
                }
                //elsif user doesn't exist, redirect to signup form
            } else {
                dispatch(setCurrentUser(userData.data))
            }
            
        })
        .catch(console.log())
    }
}

export const getCurrentUser = (id) => {
    console.log("id")
    return dispatch => {
        return fetch(`/users/${id}`, { 
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
        return fetch('/logout', {
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

export const twtLogin = (token) => {
    return dispatch => {
        return fetch(`http://127.0.0.1:3000/auth/twitter/callback`, {
            credentials: 'include',
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-Token": token
            }
          })
          
        .then(response => response.json())
        .then(resp => {
            if(resp.errors){
                console.log(resp.errors)
                
            } else {
                console.log(resp)
                // dispatch(setCurrentUser(userData.data))
            }
            
        })
        .catch(console.log())
    }
}