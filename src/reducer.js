export const initialState = {
    user: null,
};


export const reducer = (state, action) => {
    console.log("A",action);
    console.log("S",state);

    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default: 
            return state;
    }
}