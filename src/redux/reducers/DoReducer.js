import actionsName from "../actionsName";

const initialState = {
  tasks: [],
  isLoading: false,
};

const DoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsName.GET_SUCCESS:
      return { tasks: action.payload.tasks, isLoading: false };
    case actionsName.ADD_TASK:
      return {
        tasks: [
          {
            id: Math.floor(Math.random() * 1000),
            title: action.payload.taskTitle,
            date: action.payload.taskDate,
            completed: false,
          },
          ...state.tasks,
        ],
        isLoading: false,
      };
    case actionsName.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((val) => val.id !== action.payload.taskId),
      };
    case actionsName.CHECK_TASK:
      const id = state.tasks.findIndex(
        (val) => action.payload.taskId === val.id
      );
      let newTasks = [...state.tasks];
      newTasks[id].completed = true;
      newTasks.sort((a,b)=>a.id==action.payload.taskId?-1 : b.id==action.payload.taskId?1:0)

      return {
        tasks: [...newTasks],
        isLoading: false,
      };
    default:
      return state;
  }
};

export default DoReducer;
