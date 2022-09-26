const Task = ({situation,id,title,date}) => {
  return (
    <tr className={`alert alert-${situation?'success':'danger'}`}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{date}</td>
      <td>{situation?'completed':''}</td>
      <td>no actions yet</td>
    </tr>
  );
};

export default Task;
