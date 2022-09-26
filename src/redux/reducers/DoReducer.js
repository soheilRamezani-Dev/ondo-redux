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
    default:
      return state;
  }
};

export default DoReducer;
