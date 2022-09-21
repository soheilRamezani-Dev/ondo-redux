const AddDoForm = () => {
    return <div className="col-lg-4 bg-light p-5 border border-light rounded">
        <h2 className="text-center pb-3">submit task</h2>
        <form className="form">
            <div class="mb-3">
                <label htmlFor="title" class="form-label">Task title</label>
                <input type="text" class="form-control" id="title"/>
                <div class="form-text">type english</div>
            </div>
            <div class="mb-3">
                <label htmlFor="date" class="form-label">Task time</label>
                <input type="date" class="form-control" id="date"/>
                <div class="form-text">select date</div>
            </div>
            <button type="submit" class="btn btn-primary">Add Task</button>
        </form>
    </div>
}
 
export default AddDoForm;