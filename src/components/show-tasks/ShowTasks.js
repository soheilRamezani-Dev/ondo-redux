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
                <tr className="alert alert-success">
                    <td>1</td>
                    <td>go to home</td>
                    <td>21/5/1401</td>
                    <td>completed</td>
                    <td>no actions yet</td>
                </tr>
                <tr className="alert alert-danger">
                    <td>2</td>
                    <td>study</td>
                    <td>21/5/1401</td>
                    <td>not-completed</td>
                    <td>no actions yet</td>
                </tr>
            </tbody>
        </table>
    </div>
}
 
export default ShowTasks;