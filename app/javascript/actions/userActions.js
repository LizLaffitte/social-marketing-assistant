export const signup = credentials => {
    return dispatch => {
        return fetch('/signup', {
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
               console.log("You did it")
            }
            
        })
        .catch(console.log())
    }
}