import FormInput from "./FormInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../../redux/actions";

const AddDoForm = () => {
    const dispatch = useDispatch();
    const [input,setInput] = useState({title:'',date:''});
    const onAddTask = (e)=> {
        e.preventDefault();
        dispatch(addTaskAction(input.title,input.date));
    }

    return <div className="col-lg-4 bg-light p-5 border border-light rounded">
        <h2 className="text-center pb-3">submit task</h2>
        <form onSubmit={onAddTask} className="form">
            <FormInput id="title" type="text" title="Task title" formText="type english" value={input} setvalue={setInput} />
            <FormInput id="date" type="date" title="select date" formText="select date" value={input} setvalue={setInput} />
            <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
    </div>
}
 
export default AddDoForm;