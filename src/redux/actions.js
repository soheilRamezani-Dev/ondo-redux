import axios from "axios"
import actionsName from "./actionsName";

export const fetchTasks = ()=> {
    return async (dispatch)=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos'); 
        dispatch(updateTasks(response.data))
    }
}

const updateTasks =(response) =>{
    const data = response.slice(0,20);
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

export const deleteTaskAction = (id)=> {
    return {
        type: actionsName.DELETE_TASK,
        payload: {
            taskId: id,
        }
    }
}

export const checkTaskAction = (id) => {
    return {
        type:  actionsName.CHECK_TASK,
        payload : {
            taskId : id,
        }
    }
}