import Task from "./Task";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "./../../redux/actions";

const ShowTasks = () => {
  
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  let tasks = useSelector((state) => state.tasks);
  tasks= tasks.slice(0,20).sort((a,b)=>a.completed-b.completed);


  const dispatch = useDispatch();
  return (
    <div className="col-lg-8">
      <table className="table">
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>time</td>
            <td>situation</td>
            <td>actions</td>
          </tr>
        </thead>
        <tbody>
            {
            tasks.map((val)=>{
                return <Task key={val.id}
                situation={val.completed}
                id={val.id}
                title={val.title}
                date={val.date || ''}
              />
            })}
          
        </tbody>
      </table>
    </div>
  );
};

export default ShowTasks;
