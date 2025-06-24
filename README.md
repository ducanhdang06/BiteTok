# 🚀 Next.js + TypeScript + Tailwind Full Stack App

A modern, type-safe full-stack web application built with cutting-edge technologies.

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
my-nextjs-app/
├── frontend/              # Next.js application
│   ├── src/
│   │   └── app/
│   │       ├── page.tsx   # Main page
│   │       ├── layout.tsx # Root layout
│   │       └── globals.css # Global styles
│   ├── tailwind.config.js # Tailwind configuration
│   └── tsconfig.json     # TypeScript configuration
├── backend/              # Express.js API
│   ├── server.js         # Main server file
│   ├── package.json      # Backend dependencies
│   └── .env              # Environment variables
├── package.json          # Root scripts
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd my-nextjs-app
```

2. **Install all dependencies:**
```bash
npm install
npm run install-all
```

### 🖥️ Development

**Run both frontend and backend:**
```bash
npm run dev
```

This starts:
- 🎨 Frontend (Next.js): http://localhost:3000
- 🔧 Backend (Express): http://localhost:5000

**Individual commands:**
- Frontend only: `npm run client`
- Backend only: `npm run server`

## 🌟 Features

### ✅ What's Included
- **Type Safety** - Full TypeScript integration
- **Modern UI** - Beautiful Tailwind CSS styling with glassmorphism effects
- **Responsive Design** - Works on all devices
- **API Integration** - Frontend connects to backend API
- **CRUD Operations** - Create and read users/posts
- **Error Handling** - Proper error states and loading indicators
- **Modern React** - Hooks, functional components, and best practices

### 🎯 API Endpoints
- `GET /api/health` - Server health check
- `GET /api/users` - Get all users
- `POST /api/users` - Create new user
- `GET /api/users/:id` - Get user by ID
- `GET /api/posts` - Get all posts with authors
- `POST /api/posts` - Create new post

### 🎨 UI Components
- **Tab Navigation** - Switch between Users and Posts
- **User Cards** - Display user information with avatars
- **Forms** - Add new users with validation
- **Loading States** - Smooth loading animations
- **Error Handling** - User-friendly error messages

## 🏗️ Building for Production

```bash
# Build frontend
npm run build

# Start production servers
npm start
```

## 🔧 Development Commands

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Install dependencies
npm run install-all
npm run install-client
npm run install-server
```

## 📚 Learning Resources

- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **TypeScript**: [typescriptlang.org](https://www.typescriptlang.org/)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## 🚀 Deployment Options

- **Vercel** (recommended for Next.js)
- **Netlify** 
- **Railway** (for full-stack)
- **Heroku**
- **AWS/GCP/Azure**

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the ISC License.

---

**Happy coding! 🎉**