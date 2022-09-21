import AddDoForm from "./components/add-do/AddDoForm";
import ShowTasks from "./components/show-tasks/ShowTasks";
import store from "./redux/store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <div className="container p-5">
      <div className="row">
          <Provider store={store}>
            <AddDoForm />
            <ShowTasks />
          </Provider>   
      </div>
    </div>
  );
};

export default App;
