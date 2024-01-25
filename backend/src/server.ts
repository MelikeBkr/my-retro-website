import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

// Mock resume data
const resumeData = `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`;

app.get('/about', (req, res) => {
  res.json({ resume: resumeData });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
