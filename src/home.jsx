import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export function Home({tasks, SetTasks}) {
  const navigate = useNavigate();

  const [deleteMode, setDeleteMode] = useState(false);

  function createRow(task) {
  return (      
      <div 
        className={`task-row ${deleteMode ? "delete-mode" : ""}`}
        key={task.id}
        onClick={() => {
          if (deleteMode) {
            // delete instead of navigate
            SetTasks(prev => prev.filter(t => t.id !== task.id));
            setDeleteMode(false); // exit delete mode after one delete
          } else {
            navigate(`/task/${task.id}`);
          }
        }}
      >
        <div>{task.name.toUpperCase()}</div>
        <div>{task.status}</div>
      </div>
    );
  }

  function addTask() {
    const name = prompt("Enter task name:");
    if (!name) return;

    const description = prompt("Enter description:");
    
    SetTasks(prev => [
      ...prev,
      {
        id: Date.now(),
        name,
        description: description || "no description",
        status: "active"
      }
    ]);
  }

  const [searchParams, setSearchParams] = useSearchParams();

  const isFiltered = searchParams.get("filter") === "active";

  function toggleFilter() {
    if (isFiltered) {
      setSearchParams({});
    } else {
      setSearchParams({ filter: "active" });
    }
  }

  const filteredTasks = isFiltered
    ? tasks.filter(t => t.status === "active")
    : tasks;

  return (

    <div className="task-container">
      
      <div className="task-header">
        <h2>Task List</h2>

        <div className="task-controls">
          <button className="btn" onClick={addTask}>+</button>
          <button 
            className="btn" 
            onClick={() => setDeleteMode(prev => !prev)}
          >
            {deleteMode ? "Cancel" : "-"}
          </button>
          <button className="btn" onClick={toggleFilter}>Toggle</button>
        </div>
      </div>

      <div className="task-table">
        <div className="task-row header">
          <div>Task Name</div>
          <div>Status</div>
        </div>

        {filteredTasks.map(t => createRow(t))}

      </div>

    </div>
  );
}