//initial state
const initialAppleState = {
    dirty: true,
    remainingBites: 5,
    color: 'red',
    background: 'white',
    stateToggle: true
};

//reducer
export default (state = initialAppleState, action) => {
    const { type } = action; // can also use { type, data }

    switch (type) {
        case 'WASH':
        return {
            ...state,
            dirty: false
        }
        case 'EAT':
        return {
            ...state,
            remainingBites: (state.remainingBites - action.bites) // minus 2 from the remaining number of bites
        }
        case 'ROT':
        return {
            ...state,
            color: 'brown'
        }
        case 'BG':
        return {
            ...state,
            background: 'blue'
        }
        case 'TG':
        return {
            ...state,
            stateToggle: !state.stateToggle
        }
        default:
        return state;
    }
}
