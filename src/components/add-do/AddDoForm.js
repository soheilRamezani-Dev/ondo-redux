import FormInput from "./FormInput";

const AddDoForm = () => {
    return <div className="col-lg-4 bg-light p-5 border border-light rounded">
        <h2 className="text-center pb-3">submit task</h2>
        <form className="form">
            <FormInput id="title" type="text" title="Task title" formText="type english" />
            <FormInput id="date" type="date" title="select date" formText="select date" />
            <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
    </div>
}
 
export default AddDoForm;