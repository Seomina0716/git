import { useEffect, useState } from 'react';
import Checklist from './components/Checklist.jsx';
import checklistApi from './api/checklistApi.js';

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    checklistApi.fetchTasks().then(setTasks).catch(() => {
      setError('서버에서 체크리스트를 불러오지 못했습니다.');
    });
  }, []);

  const handleAdd = async (text) => {
    try {
      const newTask = await checklistApi.addTask(text);
      setTasks((prev) => [newTask, ...prev]);
      setError('');
    } catch (err) {
      setError(err.message || '항목 추가에 실패했습니다.');
    }
  };

  const handleToggle = async (id) => {
    try {
      const updated = await checklistApi.toggleTask(id);
      setTasks((prev) => prev.map((task) => (task.id === id ? updated : task)));
      setError('');
    } catch (err) {
      setError(err.message || '상태 변경에 실패했습니다.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await checklistApi.deleteTask(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
      setError('');
    } catch (err) {
      setError(err.message || '삭제에 실패했습니다.');
    }
  };

  return (
    <main className="app-shell">
      <section className="card">
        <header className="card-header">
          <div>
            <h1>Toss 스타일 체크리스트</h1>
            <p>메모리 저장 방식으로 간단하게 구현된 독립형 프론트/백엔드 앱입니다.</p>
          </div>
        </header>

        <Checklist
          tasks={tasks}
          onAdd={handleAdd}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />

        {error && <p className="error-message">{error}</p>}
      </section>
    </main>
  );
}

export default App;
