import {FaCheck,FaTimes} from 'react-icons/fa'
const Task = ({ situation, id, title, date }) => {
  return (
    <tr className={` m-2 alert alert-${situation ? "success" : "danger"}`}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{date}</td>
      <td>{situation ? "completed" : ""}</td>
      <td className="d-flex align-items-center">
        {situation
          ? <span role="button" className="border border-success rounded p-2"><FaTimes size={20}/></span>
          : <span role="button" className="border border-danger rounded p-2"><FaCheck size={20}/></span>}
      </td>
    </tr>
  );
};

export default Task;
