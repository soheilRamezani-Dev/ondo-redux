import actionsName from "../actionsName";


const initialState = {
    tasks:[],
    isLoading: false
}

const DoReducer = (state = initialState , action)=> {
    switch (action.type){
        case actionsName.GET_SUCCESS : return {tasks: action.payload.tasks , isLoading:false}
        default: return state;
    }
}

export default DoReducer;