import {FaCheck,FaTimes} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { deleteTaskAction,checkTaskAction } from '../../redux/actions';

const Task = ({ situation, id, title, date }) => {

  const dispatch = useDispatch();
  const onDeleteTask = ()=> {
    dispatch(deleteTaskAction(id));
  }

  const onCheckTask = ()=> {
    dispatch(checkTaskAction(id))
  }

  return (
    <tr className={` m-2 alert alert-${situation ? "success" : "danger"}`}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{date}</td>
      <td>{situation ? "completed" : ""}</td>
      <td className="d-flex align-items-center">
        {situation
          ? <span onClick={onDeleteTask} role="button" className="border border-success rounded p-2"><FaTimes size={20}/></span>
          : <span onClick={onCheckTask} role="button" className="border border-danger rounded p-2"><FaCheck size={20}/></span>}
      </td>
    </tr>
  );
};

export default Task;
