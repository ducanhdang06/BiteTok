const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User' }
];

let posts = [
  { id: 1, title: 'Getting Started with Next.js', content: 'Next.js is amazing!', authorId: 1 },
  { id: 2, title: 'TypeScript Best Practices', content: 'Type safety is important.', authorId: 2 }
];

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Backend server is running!', 
    timestamp: new Date().toISOString(),
    status: 'healthy'
  });
});

// User routes
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

app.post('/api/users', (req, res) => {
  const { name, email, role = 'User' } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    role
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

// Post routes
app.get('/api/posts', (req, res) => {
  const postsWithAuthors = posts.map(post => {
    const author = users.find(u => u.id === post.authorId);
    return {
      ...post,
      author: author ? author.name : 'Unknown'
    };
  });
  res.json(postsWithAuthors);
});

app.post('/api/posts', (req, res) => {
  const { title, content, authorId } = req.body;
  
  if (!title || !content || !authorId) {
    return res.status(400).json({ error: 'Title, content, and authorId are required' });
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    authorId: parseInt(authorId)
  };
  
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
});