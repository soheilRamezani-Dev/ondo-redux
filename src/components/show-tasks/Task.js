const Task = ({situation,id,title,date}) => {
  return (
    <tr className={`alert alert-${situation==='completed'?'success':'danger'}`}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{date}</td>
      <td>{situation}</td>
      <td>no actions yet</td>
    </tr>
  );
};

export default Task;
