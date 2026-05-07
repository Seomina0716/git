import { useState } from 'react';
import ChecklistItem from './ChecklistItem.jsx';

function Checklist({ tasks, onAdd, onToggle, onDelete }) {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) {
      return;
    }
    onAdd(text);
    setText('');
  };

  return (
    <div>
      <form className="input-row" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="새 체크리스트 항목 입력"
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">추가</button>
      </form>

      <ul className="task-list">
        {tasks.length === 0 ? (
          <li className="empty-state">현재 등록된 항목이 없습니다.</li>
        ) : (
          tasks.map((task) => (
            <ChecklistItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default Checklist;
