import Task from "./Task";

const ShowTasks = () => {
    return <div className="col-lg-8">
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
                <Task situation="completed" id='1'title="go to home" date="21/5/1401"/>
                <Task situation="not-completed" id='2'title="study" date="21/5/1401"/>
            </tbody>
        </table>
    </div>
}
 
export default ShowTasks;