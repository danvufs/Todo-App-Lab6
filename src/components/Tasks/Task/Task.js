// Task.js
import './Task.scss';
import { MdOutlineChangeCircle, MdOutlineDeleteSweep } from 'react-icons/md';

function Task(props) {
  const handleStatusClick = () => {
    const id = props.task.id;
    props.onStatusChange(id);
  }
  const handleRemoveClick = () => {
    const id = props.task.id;
    props.onTaskRemove(id);
  }

  return (
    <div className="task-wrapper">
      <hr />
      <h3>{props.task.description}</h3>
      <div>Id: {props.task.id}</div>
      <div>Status: <span className={props.task.done ? 'completed' : 'open'}>{props.task.done ? 'Completed' : 'Open'}</span></div>
      <button className="change-status-button" onClick={handleStatusClick}><MdOutlineChangeCircle /> Change Status</button>
      <button className="remove-button" onClick={handleRemoveClick}><MdOutlineDeleteSweep /> Remove Task</button>
    </div>
  );
}

export default Task;

/* Old Version */

// import styled from 'styled-components';

// //Add the styled components here
// const TaskWrapper = styled.div`

//   margin: 20px;
//   padding: 40px;
//   border-radius: 10px;
//   background-color: #e6e6e6;
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
// `;

// const TaskDescription = styled.h3`
//   font-size: 1.2em;
//   font-weight: bold;
//   text-align: left;
//   margin-bottom: 10px;
//   font-family: Arial, sans-serif;
// `;

// const TaskId = styled.div`
//   font-size: 1em;
//   font-weight: normal;
//   text-align: left;
//   margin-bottom: 10px;
//   font-family: Arial, sans-serif;
// `;

// const TaskStatus = styled.div`
//   font-size: 1em;
//   font-weight: normal;
//   text-align: left;
//   margin-bottom: 10px;
//   font-family: Arial, sans-serif;
// `;

// const TaskButton = styled.button`
//   background-color: green;
//   color: white;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
//   text-align: center;
//   font-size: 1em;
//   font-family: Arial, sans-serif;
//   margin-right: 5px;
// `;

// const TaskButtonRemove = styled.button`
//   background-color: red;
//   color: white;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
//   text-align: center;
//   font-size: 1em;
//   font-family: Arial, sans-serif;
// `;


// // This component renders a single task and its associated buttons
// function Task(props) {
//   // Callback function to handle when the "Change Status" button is clicked
//   const handleStatusClick = () => {
//     // Extract the id of the task from the props object
//     const id = props.task.id;
//     // Call the onStatusChange callback function and pass in the task's id
//     props.onStatusChange(id);
//   }
//   // Callback function to handle when the "Remove" button is clicked
//   const handleRemoveClick = () => {
//     // Extract the id of the task from the props object
//     const id = props.task.id;
//     // Call the onTaskRemove callback function and pass in the task's id
//     props.onTaskRemove(id);
//   }
//   // Return the JSX for the task
//   return (
//     <TaskWrapper>
//       <TaskDescription>{props.task.description}</TaskDescription>
//       <TaskId>Id: {props.task.id}</TaskId>
//       <TaskStatus>Status: {props.task.done ? 'Completed' : 'Open'}</TaskStatus>
//       <TaskButton onClick={handleStatusClick}>Change Status</TaskButton>
//       <TaskButtonRemove onClick={handleRemoveClick}>Remove</TaskButtonRemove>
//     </TaskWrapper>
//   );
// }

// export default Task;
