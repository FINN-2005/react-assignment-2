import { useParams, useNavigate } from "react-router-dom";

export default function Task({ tasks, SetTasks }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find(t => t.id === Number(id));

  if (!task) {
    return <h2>Task not found</h2>;
  }

  return (
    <div className="task-detail">

      <div className="task-detail-header">
        <button onClick={() => navigate(-1)}>← Back</button>
        <h2>Task Detail</h2>
      </div>

      <div className="task-card">
        <h2>{task.name.toUpperCase()}</h2>
        <p><strong>Status:</strong> {task.status}</p>

        <div className="task-desc">
          {task.description}
        </div>

        <div className="task-actions">
          <button
            className="btn"
            onClick={() =>
              SetTasks(prev =>
                prev.map(item =>
                  item.id === task.id
                    ? {
                        ...item,
                        status: item.status === 'active' ? 'completed' : 'active'
                      }
                    : item
                )
              )
            }
          >Toggle Status</button>
          <button
            className="btn danger"
            onClick={ () => 
              SetTasks(prev => {
                return prev.map(item => {
                  if (item.id == task.id) return null;
                  return item;
                }).filter(Boolean);
              })
            }
          >Delete</button>
        </div>
      </div>

    </div>
  );
}