import express from 'express';
import cors from 'cors';
import checklistRouter from './routes/checklist.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use('/api/checklist', checklistRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`Checklist backend running on http://localhost:${PORT}`);
});
