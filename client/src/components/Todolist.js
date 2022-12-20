import { useEffect, useState } from "react";

const Todolist = () => {
  // component state
  const [tasks, setTasks] = useState([]);
  // function to get all tasks saved in DB
  const getTodoTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const responseData = await response.json();
      // alter component state with fetched data
      setTasks(responseData);
    } catch (err) {
      console.error("something went wrong:", err.message);
    }
  };

  // this means the data fetching function above will be executed every time the page renders/refreshes
  useEffect(() => {
    getTodoTasks();
  }, []);

  // function to delete a todo task
  const deleteTask = async (taskID) => {
    try {
      await fetch(`http://localhost:5000/todos/${taskID}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      // filter tasks - find ones that still exist in DB
      setTasks(tasks.filter((task) => task.todo_id !== taskID));
    } catch (err) {
      console.error("something went wrong:", err.message);
    }
  };

  return (
    <>
      {tasks.map((task) => (
        <div className="task" key={task.todo_id}>
          <p>{task.description}</p>
          <div className="buttons">
            <button className="btn edit">edit</button>
            <button
              className="btn delete"
              onClick={() => {
                deleteTask(task.todo_id);
              }}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Todolist;
