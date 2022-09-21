import AddDoForm from "./components/add-do/AddDoForm";
import ShowTasks from "./components/show-tasks/ShowTasks";
const App = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <AddDoForm />
        <ShowTasks />
      </div>
    </div>
  );
};

export default App;
