import { useState, useEffect } from "react";
import apiRequest from "../CRUD utils/apiRequest";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskList";

const MainMenu = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskUpdate, setNewTaskUpdate] = useState([]);
  const [newTaskCreate, setNewTaskCreate] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const readTasks = async () => {
      try {
        const response = await fetch("/api/items/");
        console.log("aaa");
        if (!response.ok) throw Error("Did not receive expected data");
        const fetchTasks = await response.json();
        setTasks(fetchTasks);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    readTasks();
  }, []);

  const updateTask = async (newTaskUpdate) => {
    const listItems = tasks.map((task) =>
      task.id == newTaskUpdate.id
        ? {
            ...task,
            is_active: newTaskUpdate.is_active,
            content: newTaskUpdate.content,
          }
        : task
    );
    setTasks(listItems);

    const myItem = listItems.filter((item) => item.id == newTaskUpdate.id);
    const updateOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        is_active: myItem[0].is_active,
        content: myItem[0].content,
      }),
    };
    const result = await apiRequest(`items/${newTaskUpdate.id}/`, updateOptions);
    if (result) setFetchError(result);
  };

  const handleUpdateActive = (e) => {
    updateTask(e);
  }

  const handleUpdateContent = (e) => {
    e.preventDefault();
    if (!newTaskUpdate) return;
    updateTask(newTaskUpdate);
    setNewTaskUpdate("");
  };

  const createTask = async (content) => {
    const new_id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const addTask = { id: new_id, is_active: true, content: content };
    const newTasks = [...tasks, addTask];
    setTasks(newTasks);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addTask),
    };
    const result = await apiRequest(`users/1/items/`, postOptions);
    if (result) setFetchError(result);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (!newTaskCreate) return;
    createTask(newTaskCreate);
    setNewTaskCreate("");
  };

  const deleteTask = async (item_id) => {
    const NewList = tasks.filter((listTask) => listTask.id !== item_id);
    setTasks(NewList);

    const deleteOptions = { method: "DELETE" };
    const reqUrl = `items/${item_id}/`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              FastAPI&React ToDo!
            </span>
          </a>
          <div className="flex items-center">
            <a
              href="#"
              className="text-sm font-medium text-pink-500"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav className="border-b-4 border-black">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="text-gray-900"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="localhost:4000/redoc/"
                  target="_blank"
                  className="text-gray-900"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900"
                >
                  Done
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900"
                >
                  Statistics
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="sticky top-0 bg-pink-500">
        <div className="p-4 bg-pink-500">
        <div className="w-1/2 p-2 mx-auto md:px-6 bg-white">
            <TaskForm
              className="w-50 p-10 content-center"
              newTaskCreate={newTaskCreate}
              setNewTaskCreate={setNewTaskCreate}
              handleCreate={handleCreate}
            ></TaskForm>
        </div>
        </div>
      </nav>
      <main>
        {isLoading && <p className={ "animate-pulse text-pink-500 p-40 text-center" }>Loading Items...</p>}
        {fetchError && (
          <p className={ "animate-pulse text-pink-500 p-40 text-center" }>{`Error: ${fetchError}`}</p>
        )}
        {!fetchError && !isLoading && (
          <TaskItem
            tasks={tasks}
            setTasks={setTasks}
            deleteTask={deleteTask}
            handleUpdateActive={handleUpdateActive}
            handleUpdateContent={handleUpdateContent}
            setNewTaskUpdate={setNewTaskUpdate}
          ></TaskItem>
        )}
      </main>
    </div>
  );
};

export default MainMenu;
