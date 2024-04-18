import React from "react";

const TaskList = ({
  tasks,
  onDeleteTask,
  onEditTask,
  onToggleTaskCompletion,
}) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTaskCompletion(index)}
          />
          <span>{task.text}</span>
          <button onClick={() => onEditTask(index)}>Edit</button>
          <button onClick={() => onDeleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
