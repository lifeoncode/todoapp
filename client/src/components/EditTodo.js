import { useState } from "react";

const EditTodo = ({ task }) => {
  const [description, setDescription] = useState(task.description);

  // function to update a todo task
  const updateTodoTask = (taskID) => {
    console.log(`updating ${taskID}...`);
  };

  return (
    <>
      <button
        className="btn edit"
        onClick={() => {
          document.querySelector(".modal").classList.remove("hide");
        }}
      >
        edit
      </button>
      <div className="modal hide">
        <h3>Edit todo task</h3>
        <i
          className="fas fa-close"
          onClick={() => {
            document.querySelector(".modal").classList.add("hide");
          }}
        ></i>
        <input
          type="text"
          placeholder="enter text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit">save</button>
      </div>
    </>
  );
};

export default EditTodo;
