//initial state
const initialOtherState = {
    essai: 'tenté'
};

//reducer
export default (state = initialOtherState, action) => {
    const { type } = action; // can also use { type, data }

    switch (type) {
        case 'ESSAI':
        return {
            ...state,
            essai: 'réussi'
        }
        default:
        return state;
    }
}
