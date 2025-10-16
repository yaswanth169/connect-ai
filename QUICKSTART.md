# ConnectAI - Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Your Browser
Navigate to `http://localhost:3000`

---

## 📱 What You'll See

### Landing Page (/)
- Professional hero section with gradient effects
- Feature showcase with 6 key capabilities
- Integration grid showing 270+ connectors
- Real-time statistics dashboard
- Call-to-action sections

### Dashboard (/dashboard)
- Real-time metrics: Rows, Queries, Connections, Users
- Query performance breakdown by HTTP method
- Active connections status
- Recent activity timeline
- 7-day performance trends

### Integrations (/integrations)
- Browse 270+ data source connectors
- Filter by category (AI, BI & Reporting, Dev, ETL, etc.)
- Search functionality
- Connection status indicators
- Quick connect buttons

### Sources (/sources)
- View all connected data sources
- Monitor connection status
- See row counts and database types
- Add new data sources

---

## 🎯 Key Features to Try

### 1. SSO Login
- Open the sidebar (click menu on mobile)
- Click "SSO Login" button at the bottom
- See user profile display after login
- Click "Logout" to sign out

### 2. Navigation
- Click through different sidebar menu items
- Notice active route highlighting
- Try responsive layout (resize browser)
- Test mobile menu (< 1024px width)

### 3. Dark Theme
- Entire app uses professional dark theme
- Hover effects on cards and buttons
- Smooth transitions throughout
- Gradient accents on interactive elements

### 4. Responsive Design
- Desktop: Full sidebar always visible
- Tablet/Mobile: Collapsible sidebar with overlay
- Adaptive layouts for all screen sizes
- Touch-friendly button sizes

---

## 🧩 Project Structure Overview

```
src/
├── components/
│   ├── ui/              ← Reusable components (Button, Card, Input, Badge)
│   └── layout/          ← Layout components (Sidebar, Header, MainLayout)
├── pages/               ← Page components (Landing, Dashboard, etc.)
├── App.tsx              ← React Router setup
└── main.tsx             ← App entry point
```

---

## 🎨 Customization

### Change Primary Color
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Change these values
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

### Add New Page
1. Create `src/pages/MyPage.tsx`
2. Add route in `src/App.tsx`
3. Add nav link in `src/components/layout/Sidebar.tsx`

### Modify Sidebar Navigation
Edit `navigationSections` array in `src/components/layout/Sidebar.tsx`

---

## 🔧 Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

## 📚 Component Usage Examples

### Button
```tsx
import { Button } from './components/ui';
import { Plus } from 'lucide-react';

<Button variant="primary" size="lg" icon={Plus}>
  Add New
</Button>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent } from './components/ui';

<Card hover>
  <CardHeader>
    <CardTitle>My Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content here</p>
  </CardContent>
</Card>
```

### Input
```tsx
import { Input } from './components/ui';
import { Search } from 'lucide-react';

<Input 
  label="Search" 
  icon={Search}
  placeholder="Type to search..."
/>
```

---

## 🎉 Next Steps

1. ✅ Explore all pages and features
2. ✅ Customize colors and branding
3. ✅ Add real API integration
4. ✅ Implement actual SSO authentication
5. ✅ Add more pages as needed
6. ✅ Deploy to production

---

## 💡 Tips

- **Hot Reload**: Changes auto-refresh in browser
- **TypeScript**: Full type safety throughout
- **Icons**: Use Lucide React for consistent icons
- **Responsive**: Test at different screen sizes
- **Performance**: Built with Vite for fast HMR

---

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- Review component files in `src/components/ui/`
- Inspect page layouts in `src/pages/`
- Tailwind docs: https://tailwindcss.com
- React docs: https://react.dev

---

**Enjoy building with ConnectAI! 🚀**

