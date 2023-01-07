import { useState } from "react";

const Input = () => {
  // component state
  const [description, setDescription] = useState("");
  // function to make post request - persists new data to DB
  const addNewTodo = async (e) => {
    e.preventDefault();
    // if input field is empty
    if (!description.trim()) {
      document.querySelector("input").classList.add("error");
      return false;
    }

    try {
      const body = { description };
      await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // refresh page when data is persisted
      window.location = "/";
    } catch (err) {
      console.error("womthing went wrong:", err.message);
    }
  };

  return (
    <>
      <form onSubmit={addNewTodo}>
        <input
          type="text"
          placeholder="Enter task to do..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onFocus={(e) => {
            e.target.classList.remove("error");
          }}
        />
        <button type="submit">save task</button>
      </form>
    </>
  );
};

export default Input;
