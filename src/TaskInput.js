import React, { useState, useEffect } from "react";

const TaskInput = ({ onAddTask, taskToEdit, onSaveEdit }) => {
  const [task, setTask] = useState(taskToEdit ? taskToEdit.text : "");

  useEffect(() => {
    setTask(taskToEdit ? taskToEdit.text : "");
  }, [taskToEdit]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddOrEditTask = () => {
    if (task.trim()) {
      if (taskToEdit) {
        onSaveEdit(task);
      } else {
        onAddTask(task);
      }
      setTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder={taskToEdit ? "Edit task" : "Enter a new task"}
      />
      <button onClick={handleAddOrEditTask}>
        {taskToEdit ? "Save" : "Add Task"}
      </button>
    </div>
  );
};

export default TaskInput;
