export default function userReducer(state=[], action){
    switch(action.type){
        case 'ADD_USERS':
            return action.users
        case 'ADD_USER':
            return [...state, action.user]
        case 'EDIT_USER':
            return state.map(user => user.id === action.user.id ? action.user : user)
        default:
            return state
    }
    
}