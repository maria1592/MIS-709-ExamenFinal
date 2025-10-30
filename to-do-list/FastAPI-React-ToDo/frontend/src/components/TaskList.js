import "../index.css";
import SubTaskItem from "./SubTaskList";

const TaskItem = ({
  tasks,
  deleteTask,
  handleUpdateActive,
  handleUpdateContent,
  setNewTaskUpdate,
}) => {

  const tasksList = tasks.map((task) => (
    <div key={task.id}>
      <SubTaskItem
        key={task.id}
        is_active={task.is_active}
        content={task.content}
        id={task.id}
        deleteTask={deleteTask}
        handleUpdateActive={handleUpdateActive}
        handleUpdateContent={handleUpdateContent}
        setNewTaskUpdate={setNewTaskUpdate}
      />
    </div>
  ));

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-1/2 p-5">{tasksList}</div>
      </div>
    </div>
  );
}

export default TaskItem;
