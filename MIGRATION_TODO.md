# ConnectAI Migration TODO

## ✅ Completed

### Visual Fixes
- [x] Fixed color scheme - sidebar now has distinct dark background (#0a0a0a)
- [x] Main content area uses #0d0d0d background
- [x] Removed all hover zoom effects (scale transformations)
- [x] Added custom scrollbar styling
- [x] Installed Ant Design and React Icons
- [x] Created Loader component with fullscreen and inline variants
- [x] Created SkeletonCard component for loading states
- [x] Configured Ant Design theme for dark mode
- [x] Removed sample SSO login logic
- [x] Added Feedback modal with form in sidebar
- [x] Updated Button hover effects (removed zoom)
- [x] Updated GlassCard hover effects (removed zoom)

## 🚧 In Progress / TODO

### High Priority - Visual & UX
- [ ] Replace ALL emojis with React Icons throughout the app
  - [ ] Landing page integrations section
  - [ ] Integrations page cards
  - [ ] Dashboard icons
  - [ ] Replace Lucide icons with React Icons where appropriate

- [ ] Add loading delays for JSON data rendering
  - [ ] Integrations page - 500ms delay
  - [ ] Sources page - 500ms delay
  - [ ] Dashboard - 500ms delay

- [ ] Fix remaining hover zoom effects
  - [ ] Dashboard stat cards
  - [ ] Integration cards
  - [ ] Source cards
  - [ ] Landing page stats

### Convert to Documentation Website
- [ ] Integrations Page → Documentation Center
  - [ ] Add code examples for each integration
  - [ ] Add "View Documentation" button → opens modal
  - [ ] Modal should show:
    - Integration overview
    - Setup instructions
    - Code examples (with syntax highlighting)
    - API endpoint information
    - "Connect Now" button with endpoint URL input

- [ ] Sources Page → Documentation Center
  - [ ] Similar structure to Integrations
  - [ ] Add connection guides
  - [ ] Show sample code snippets

- [ ] Add Documentation Modal Component
  - [ ] Use Ant Design Modal
  - [ ] Include Tabs for different sections
  - [ ] Add Collapse/Accordion for code examples
  - [ ] Add Copy-to-clipboard for code
  - [ ] Show endpoint URL input in Connect section

### TypeScript to JavaScript Conversion
Priority files to convert:
- [ ] src/App.tsx → src/App.jsx
- [ ] src/pages/*.tsx → src/pages/*.jsx
- [ ] src/components/layout/*.tsx → src/components/layout/*.jsx
- [ ] src/components/ui/*.tsx → src/components/ui/*.jsx
- [ ] Update tsconfig.json or remove it
- [ ] Update vite.config.ts → vite.config.js

### Additional Components Needed
- [ ] DocumentationModal component
  - Use Ant Design Modal, Tabs, Collapse
  - Syntax highlighting for code (use `react-syntax-highlighter`)
  - Copy button for code snippets

- [ ] EndpointConnectForm component
  - Input for endpoint URL
  - Validation
  - Test connection button
  - Success/error states

- [ ] CodeBlock component
  - Syntax highlighting
  - Copy to clipboard
  - Language selection
  - Line numbers

### UI Enhancements with React Icons
Replace current icons with React Icons:
```javascript
import { 
  FiDatabase,    // Database
  FiZap,         // Zap/Lightning
  FiShield,      // Security
  FiLayers,      // Layers
  FiBarChart2,   // Charts
  FiClock,       // Clock
  FiServer,      // Server
  FiActivity,    // Activity
  FiUsers,       // Users
  FiSettings,    // Settings
  FiBookOpen,    // Documentation
  FiCode,        // Code
  FiGitBranch,   // Integrations
} from 'react-icons/fi'; // Feather Icons

// Or use other icon sets:
// - react-icons/ai (Ant Design)
// - react-icons/bi (BoxIcons)
// - react-icons/md (Material Design)
// - react-icons/ri (Remix Icon)
```

### Gradient Effects
Add gradient backgrounds to:
- [ ] Card headers
- [ ] Icon containers
- [ ] Section dividers
- [ ] Button hover states (subtle gradients)

Example gradient classes to add:
```css
.gradient-purple-blue {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.gradient-green-cyan {
  background: linear-gradient(135deg, #06b6d4 0%, #10b981 100%);
}
.gradient-orange-red {
  background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
}
```

## 📦 Additional npm Packages Needed

```bash
npm install react-syntax-highlighter
npm install @types/react-syntax-highlighter (if keeping TS)
```

## 🎨 Design Guidelines

### Colors
- Background: #0d0d0d
- Sidebar: #0a0a0a
- Cards: rgba(255, 255, 255, 0.05) with backdrop blur
- Borders: rgba(255, 255, 255, 0.1)
- Text Primary: #ffffff
- Text Secondary: #a3a3a3
- Accent: White with gradients for visual interest

### No Zoom Effects
- All hover effects should be subtle
- Use opacity, border, and color transitions
- NO transform: scale() effects
- Smooth transitions (300ms duration)

### Icons
- Use React Icons (Feather Icons recommended for consistency)
- Icon size: 20px (default), 24px (large), 16px (small)
- Add gradient backgrounds to icon containers
- Stroke width: 2 for clear visibility

### Loading States
- Show Loader component while fetching data
- Add 500ms minimum delay for visual feedback
- Use SkeletonCard for list items
- Show loading text: "Loading integrations...", etc.

## 📝 Next Steps

1. Install react-syntax-highlighter
2. Create DocumentationModal component
3. Update Integrations page to use modal
4. Replace all emojis with React Icons
5. Add loading delays to data fetching
6. Convert TS files to JS (if needed)
7. Add gradient effects
8. Test all interactions and animations

## 🚀 Commands

```bash
# Install additional dependencies
npm install react-syntax-highlighter

# Development
npm run dev

# Build (after TS→JS conversion might need updates)
npm run build
```

