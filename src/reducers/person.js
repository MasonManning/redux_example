const personReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            return state
            // return state = [...state, { name: "Tony" }]
            // {
            //     state.push([...state, { name: "Tony" }])
            //     return state
            // }
        default:
            return state
    }
}

export default personReducer