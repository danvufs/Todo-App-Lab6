// Form.js
import { useState } from 'react';
import { MdAddTask } from 'react-icons/md';
import './Form.scss';

function Form({ onAddTask }) {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    if (description === '') {
      setErrorMessage('Enter a description!');
    } else {
      setIsSaving(true);
      await onAddTask(description, status);
      setDescription('');
      setStatus(false);
      setErrorMessage('');
      setIsSaving(false);
    }
  };

  return (
    <form className="form-container" onSubmit={handleFormSubmission}>
      <h2 className="form-heading">Add a new task:</h2>

      <hr></hr>
      {/* <p>Enter a description</p> */}

      {errorMessage !== '' && <div className="error-message">{errorMessage}</div>}
      {isSaving && <div className="saving-message">Saving...</div>}

      <label className="form-label">
        Description:
        <input
          type="text"
          maxLength={150}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="form-input"
        />
      </label>

      <label className="form-label">
        Status:
        <select
          value={status}
          onChange={(event) => setStatus(event.target.value === 'true')}
          className="form-select"
        >
          <option value={false}>Open</option>
          <option value={true}>Completed</option>
        </select>
      </label>

      <button type="submit" className="form-button" disabled={isSaving}>
        <MdAddTask /> Add
      </button>
    </form>
  );
}

export default Form;


/* Old Version */
// import { useState } from 'react';
// import styled from 'styled-components';
// import { MdAddTask } from 'react-icons/md';

// //Add the styled components here

// const FormContainer = styled.form`
//     margin: 20px;
//     padding: 20px 0 60px 0;
//     border-radius: 10px;
//     background-color: #f1f1f1;
//     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
// `;

// const Heading = styled.h2`
//     margin: 20px;
//     font-weight: bold;
//     color: #b6287d;
// `;

// const Label = styled.label`
//     display: block;
//     margin-bottom: 1rem;
//     margin-left: 20px;
//     font-weight: 600;
// `;

// const Input = styled.input`
//     width: 96%;
//     padding: 0.5rem;
//     font-size: 1rem;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     &:focus {
//     outline: none;
//     border-color: #aaa;
//   }
// `;

// const Select = styled.select`
//     padding: 0.5rem;
//     font-size: 1rem;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     margin-left: 10px;
//     &:focus {
//     outline: none;
//     border-color: #aaa;
//   }
// `;

// const Button = styled.button`
//     background-color: blue;
//     color: #fff;
//     padding: 10px 20px;
//     border-radius: 5px;
//     font-size: 1em;
//     cursor: pointer;
//     float: left;
//     margin-left: 20px;
// `;

// const ErrorMessage = styled.div`
//   margin-top: 1rem;
//   color: red;
//   font-weight: 600;
//   margin-left: 20px;
// `;

// // Form component for adding a new task
// function Form({ onAddTask }) {
//     // State for task description and status
//     const [description, setDescription] = useState('');
//     const [status, setStatus] = useState(false);
//     // State for error message display
//     const [errorMessage, setErrorMessage] = useState('');
//     // Handle form submission and add task to the task list
//     const handleFormSubmission = (event) => {
//         event.preventDefault();// Prevent form from submitting and refreshing the page

//         // Check if task description is entered
//         if (description === '') {
//             setErrorMessage('Enter a description.');
//         }
//         else {
//             // Call onAddTask function and pass description and status
//             onAddTask(description, status);

//             // Reset the form fields and error message
//             setDescription('');
//             setStatus(false);
//             setErrorMessage('');
//         }
//     }

//     return (
//         // Form container with onSubmit handler
//         <FormContainer onSubmit={handleFormSubmission}>
//             <Heading>Enter a description</Heading>

//             {/* Display error message if any */}
//             {errorMessage !== '' && (<ErrorMessage>{errorMessage}</ErrorMessage>)}
//             {/* Description input field */}
//             <Label>
//                 Description:
//                 <Input
//                     type='text'
//                     maxLength={150}
//                     value={description}
//                     onChange={(event) => setDescription(event.target.value)}
//                 />
//             </Label>
//             {/* Status select field */}
//             <Label>
//                 Status:
//                 <Select
//                     value={status}
//                     onChange={(event) => setStatus(event.target.value)}
//                 >
//                     <option value={false}>Open</option>
//                     <option value={true}>Completed</option>
//                 </Select>
//             </Label>
//             {/* Add button */}
//             <Button><MdAddTask /> Add</Button>
//         </FormContainer>
//     );

// }
// // Export the Form component
// export default Form;
