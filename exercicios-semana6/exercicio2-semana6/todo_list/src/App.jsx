import './App.css'
import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  function handleChangeInput(event) {
    const inputTask = event.target.value;

    setTask(inputTask);
  }

  function handleAddItemToList(event) {
    event.preventDefault();

    if (!task) {
      return
    };

    const newItem = {
      id: Date.now(),
      task: task
    };

    setItemsList([...itemsList, newItem]);
    setTask("");
  }

  function handleRemoveItemFromList(id) {
    const updatedItems = itemsList.filter((item) => item.id !== id);
    setItemsList(updatedItems);
  }

  return (
    <div className="todo-wrapper">
      <h1>To Do List</h1>
      <form onSubmit={handleAddItemToList}>
        <input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={task} />

        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-list" >
        {itemsList.map((item) => (
          <li key={item.id}>
            {item.task}
            <button onClick={() => handleRemoveItemFromList(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
