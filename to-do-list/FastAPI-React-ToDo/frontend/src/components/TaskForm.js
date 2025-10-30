import { useRef } from "react";

const TaskForm = ({ newTaskCreate, setNewTaskCreate, handleCreate }) => {
  const inputRef = useRef();

  return (
    <div>
      <form className={"w-full p-2"} onSubmit={handleCreate}>
        <input
          autoFocus
          ref={inputRef}
          className={"w-full caret-pink-500 !outline-none"}
          value={newTaskCreate}
          onChange={(e) => setNewTaskCreate(e.target.value)}
          placeholder="Create new task ;)"
        ></input>
      </form>
    </div>
  );
};

export default TaskForm;
