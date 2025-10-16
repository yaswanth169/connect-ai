# ConnectAI - Command Reference

## 🚀 Quick Commands

### Development
```bash
# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📦 Installation

```bash
# Navigate to project
cd connect-ai

# Install dependencies
npm install

# Start development
npm run dev
```

---

## 🏗️ Project Commands

### Create New Component
```bash
# UI Component
touch src/components/ui/NewComponent.tsx

# Layout Component
touch src/components/layout/NewLayout.tsx

# Page Component
touch src/pages/NewPage.tsx
```

### Add to Index Exports
```typescript
// src/components/ui/index.ts
export { NewComponent } from './NewComponent';

// src/pages/index.ts
export { NewPage } from './NewPage';
```

---

## 🎨 Tailwind Commands

### Generate Tailwind Config
```bash
npx tailwindcss init -p
```

### Watch Tailwind (if needed)
```bash
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
```

---

## 📝 TypeScript Commands

### Check Types
```bash
npx tsc --noEmit
```

### Check Specific File
```bash
npx tsc --noEmit src/components/ui/Button.tsx
```

---

## 🧹 Code Quality

### Format Code (if prettier installed)
```bash
npx prettier --write "src/**/*.{ts,tsx}"
```

### Lint (if eslint installed)
```bash
npx eslint src/**/*.{ts,tsx}
```

---

## 📦 Package Management

### Install Package
```bash
npm install package-name
```

### Install Dev Package
```bash
npm install -D package-name
```

### Update Packages
```bash
npm update
```

### Check Outdated
```bash
npm outdated
```

---

## 🌐 Network Commands

### Find Port Usage
```bash
# Windows
netstat -ano | findstr :3000

# Kill Process
taskkill /PID <PID> /F
```

### Change Port
Edit `vite.config.ts`:
```typescript
server: {
  port: 3001, // Change port here
}
```

---

## 🔧 Vite Commands

### Build with Debug
```bash
npm run build -- --debug
```

### Build and Analyze
```bash
npm run build -- --mode production
```

### Clear Vite Cache
```bash
# Remove node_modules/.vite
rm -rf node_modules/.vite
```

---

## 📁 File Operations

### Create New Page Structure
```bash
# Create page file
touch src/pages/MyPage.tsx

# Add route in App.tsx
# Add navigation in Sidebar.tsx
```

### Create Component with Test
```bash
touch src/components/ui/MyComponent.tsx
touch src/components/ui/MyComponent.test.tsx
```

---

## 🎯 Git Commands (if using Git)

### Initial Commit
```bash
git init
git add .
git commit -m "Initial commit: ConnectAI React app"
```

### Common Workflow
```bash
# Check status
git status

# Add files
git add .

# Commit
git commit -m "Description of changes"

# Push
git push origin main
```

---

## 🚢 Deployment Commands

### Build Production
```bash
npm run build
# Output in: dist/
```

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy
```

### Deploy to GitHub Pages
```bash
npm run build
# Then push dist/ folder
```

---

## 🔍 Debugging

### Show Vite Config
```bash
npx vite --help
```

### Show Build Size
```bash
npm run build
# Check dist/ folder size
```

### Analyze Bundle
```bash
npm install -D rollup-plugin-visualizer
# Add to vite.config.ts
```

---

## 📊 Performance

### Build Stats
```bash
npm run build
# Check output for bundle sizes
```

### Lighthouse Audit
```bash
# Open Chrome DevTools
# Run Lighthouse audit
```

---

## 🛠️ Maintenance

### Clean Install
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Update Vite
```bash
npm install -D vite@latest
```

### Update React
```bash
npm install react@latest react-dom@latest
```

---

## 🎨 Customization Commands

### Add New Tailwind Color
Edit `tailwind.config.js`:
```javascript
colors: {
  brand: {
    500: '#YOUR_COLOR'
  }
}
```

### Add New Font
In `index.html`:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
```

In `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Inter', 'sans-serif']
}
```

---

## 📱 Testing

### Manual Testing Checklist
```bash
# 1. Start dev server
npm run dev

# 2. Test in browser
- Check all pages load
- Test responsive design (resize window)
- Click SSO login
- Navigate all menu items
- Test forms and inputs
- Check mobile menu

# 3. Build and preview
npm run build
npm run preview
```

---

## 🔐 Environment Setup

### Create .env file
```bash
touch .env

# Add variables:
VITE_API_URL=http://localhost:3000/api
VITE_SSO_PROVIDER=your-sso-provider
```

### Load Environment Variables
```typescript
// In your code:
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 🎯 Quick Fixes

### Port Already in Use
```bash
# Change port in vite.config.ts
# Or kill process on port 3000
```

### Module Not Found
```bash
npm install
# Or clean install:
rm -rf node_modules && npm install
```

### TypeScript Errors
```bash
# Check tsconfig.json
# Restart TypeScript server in editor
```

### Tailwind Not Working
```bash
# Check tailwind.config.js content paths
# Verify @tailwind directives in index.css
# Restart dev server
```

---

## 📚 Documentation

### View Package Docs
```bash
# React
https://react.dev

# Vite
https://vitejs.dev

# Tailwind
https://tailwindcss.com

# React Router
https://reactrouter.com

# Lucide Icons
https://lucide.dev
```

---

## 🎉 Common Workflows

### Add New Feature Page
```bash
# 1. Create page
touch src/pages/MyFeature.tsx

# 2. Add to index
# Edit src/pages/index.ts

# 3. Add route
# Edit src/App.tsx

# 4. Add to sidebar
# Edit src/components/layout/Sidebar.tsx

# 5. Test
npm run dev
```

### Add New UI Component
```bash
# 1. Create component
touch src/components/ui/MyComponent.tsx

# 2. Export from index
# Edit src/components/ui/index.ts

# 3. Use in pages
import { MyComponent } from '../components/ui';
```

---

**Command Reference Complete!** 🚀

**Most Common Commands:**
```bash
npm run dev     # Start development
npm run build   # Build for production
npm run preview # Preview production build
```

**Visit:** http://localhost:3000

