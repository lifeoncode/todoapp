import { useState } from "react";

const Input = () => {
  const [description, setDescription] = useState("");

  const addNewTodo = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const responseData = await response.json();
      console.log(responseData);
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
        />
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default Input;
