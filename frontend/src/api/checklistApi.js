const BASE_URL = 'http://localhost:4000/api/checklist';

const fetchTasks = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error('체크리스트를 불러오는 중 오류가 발생했습니다.');
  }
  return response.json();
};

const addTask = async (text) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || '항목 추가 중 오류가 발생했습니다.');
  }
  return response.json();
};

const toggleTask = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}/toggle`, {
    method: 'PATCH'
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || '상태 변경 중 오류가 발생했습니다.');
  }
  return response.json();
};

const deleteTask = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || '삭제 중 오류가 발생했습니다.');
  }
};

export default {
  fetchTasks,
  addTask,
  toggleTask,
  deleteTask
};
