import axios from "axios"
import actionsName from "./actionsName";

export const fetchTasks = ()=> {
    return async (dispatch)=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos'); 
        dispatch(updateTasks(response.data))
    }
}

const updateTasks =(response) =>{
    const data = response.slice(0,20).sort((a,b)=>a.completed-b.completed);
    return{
        type: actionsName.GET_SUCCESS,
        payload: {
            tasks: data
        }
    }
}

export const addTaskAction = (title , date) => {
    return {
        type: actionsName.ADD_TASK,
        payload: {
            taskTitle : title,
            taskDate : date,
        }
    }
}