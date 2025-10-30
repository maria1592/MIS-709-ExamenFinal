import { useEffect, useRef } from "react";

const SubTaskItem = ({
  id,
  content,
  is_active,
  deleteTask,
  handleUpdateActive,
  handleUpdateContent,
  setNewTaskUpdate,
}) => {
  const inputRef = useRef(content);

  useEffect(() => {
    inputRef.current.value = content;
  }, []);

  return (
    <li className="p-5 list-none">
      <div className="flex justify-between group border-b-4 border-black hover:border-pink-500 p-5">
        <input
          className={
            is_active
              ? "float-left w-6 h-6 cursor-pointer rounded-full hover:bg-pink-500"
              : "float-left w-6 h-6 cursor-pointer rounded-full accent-black hover:accent-pink-500"
          }
          type="checkbox"
          onChange={() =>
            handleUpdateActive({
              id: id,
              is_active: !is_active, //kiedy zmienimy kontent bez wysłania go to is_active się pierdoli
              content: content,
            })
          }
          defaultChecked={!is_active}
        />
        <form onSubmit={handleUpdateContent}>
          <input
            className={
              is_active
                ? "caret-pink-500 placeholder:text-black focus:placeholder:text-white !outline-none"
                : "line-through !outline-none"
            }
            disabled={!is_active}
            ref={inputRef}
            defaultValue={inputRef.current.value}
            onChange={() =>
              setNewTaskUpdate({
                id: id,
                is_active: is_active,
                content: inputRef.current.value,
              })
            }
          />
        </form>
        <button className="hover:text-pink-500" onClick={() => deleteTask(id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default SubTaskItem;
