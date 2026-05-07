const tasks = [
  { id: '1', text: 'Toss 스타일 체크리스트 앱 구조 설계', done: false },
  { id: '2', text: '메모리 저장 방식으로 간단한 브라우저 체크리스트 구현', done: false }
];

const getAll = () => [...tasks];

const addTask = (text) => {
  const newTask = {
    id: `${Date.now()}`,
    text: text.trim(),
    done: false
  };
  tasks.unshift(newTask);
  return newTask;
};

const toggleTask = (id) => {
  const task = tasks.find((item) => item.id === id);
  if (!task) return null;
  task.done = !task.done;
  return task;
};

const deleteTask = (id) => {
  const index = tasks.findIndex((item) => item.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};

export default {
  getAll,
  addTask,
  toggleTask,
  deleteTask
};
