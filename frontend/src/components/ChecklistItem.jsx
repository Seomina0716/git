function ChecklistItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <button
        type="button"
        className={`toggle-button ${task.done ? 'done' : ''}`}
        onClick={() => onToggle(task.id)}
      >
        {task.done ? '완료' : '대기'}
      </button>
      <span className={`task-text ${task.done ? 'task-done' : ''}`}>{task.text}</span>
      <button className="delete-button" type="button" onClick={() => onDelete(task.id)}>
        삭제
      </button>
    </li>
  );
}

export default ChecklistItem;
