import express from 'express';
import checklistStore from '../checklistStore.js';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(checklistStore.getAll());
});

router.post('/', (req, res) => {
  const { text } = req.body;
  if (typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ error: 'Task text must be a non-empty string.' });
  }

  const newTask = checklistStore.addTask(text);
  return res.status(201).json(newTask);
});

router.patch('/:id/toggle', (req, res) => {
  const { id } = req.params;
  const updated = checklistStore.toggleTask(id);
  if (!updated) {
    return res.status(404).json({ error: 'Task not found.' });
  }
  return res.json(updated);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const removed = checklistStore.deleteTask(id);
  if (!removed) {
    return res.status(404).json({ error: 'Task not found.' });
  }
  return res.status(204).end();
});

export default router;
