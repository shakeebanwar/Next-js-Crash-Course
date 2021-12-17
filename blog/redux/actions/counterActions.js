//Action Types
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const auth = "AUTH";


//Action Creator
export const incrementCounter = () => ({
   type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});

export const saveObj = (users) =>  (
    
    {
    
    type: auth,
    payload:users
});

