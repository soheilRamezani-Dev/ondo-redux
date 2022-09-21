import axios from "axios"
import actionsName from "./actionsName";

export const fetchTasks = ()=> {
    return async (dispatch)=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos'); 
        dispatch(updateTasks(response.data))
    }
}

const updateTasks =(response) =>{
    return{
        type: actionsName.GET_SUCCESS,
        payload: {
            tasks: response
        }
    }
}