import { useState } from "react";

const EditTodo = ({ task }) => {
  const [description, setDescription] = useState(task.description);

  // function to update a todo task
  const updateTodoTask = async () => {
    try {
      const body = { description };
      await fetch(`http://localhost:5000/todos/${task.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error("something went wrong:", err.message);
    }
  };

  return (
    <>
      {/* edit task button */}
      <button
        className="btn edit"
        onClick={() => {
          document.querySelector(`#id${task.todo_id}`).classList.remove("hide");
        }}
      >
        edit
      </button>

      {/* modal container */}
      <div className="modal hide" id={`id${task.todo_id}`}>
        <h3>Edit todo task</h3>
        <div
          className="close-btn"
          onClick={() => {
            document.querySelector(`#id${task.todo_id}`).classList.add("hide");
            setDescription(task.description);
          }}
        >
          <i
            className="fas fa-close"
            // no need for click event on icon because the click event will bubble to parent
            // thus closing the edit component
          ></i>
        </div>

        <input
          type="text"
          placeholder="enter text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit" onClick={updateTodoTask}>
          save
        </button>
      </div>
    </>
  );
};

export default EditTodo;
