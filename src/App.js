import React, { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  const handleDeleteTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  const handleEditTask = (taskIndex) => {
    setTaskToEdit({ index: taskIndex, text: tasks[taskIndex].text });
  };

  const handleSaveEdit = (editedTaskText) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskToEdit.index) {
        return { ...task, text: editedTaskText };
      }
      return task;
    });
    setTasks(updatedTasks);
    setTaskToEdit(null);
  };

  const handleToggleTaskCompletion = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskInput
        onAddTask={handleAddTask}
        taskToEdit={taskToEdit}
        onSaveEdit={handleSaveEdit}
      />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
        onToggleTaskCompletion={handleToggleTaskCompletion}
      />
    </div>
  );
};

export default App;
