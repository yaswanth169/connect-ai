# BPAZ MCP - Enterprise Model Context Protocol Platform

A professional React application for connecting Barclays enterprise tools to AWS Bedrock foundation models. Built with React, Vite, Tailwind CSS, and modern best practices.

## Features

- 🎨 **Modern Dark Theme UI** - Professional, clean design with dark mode
- 🔐 **SSO Authentication** - Single Sign-On login integration in sidebar
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🧩 **Reusable Components** - Clean component architecture with TypeScript
- 🎯 **Enterprise Tools** - Jira, Confluence, GitLab, AWS CloudWatch, Grafana, Prometheus, Power BI, AWS S3
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🔍 **React Router** - Client-side routing with protected routes

## Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icon set
- **React Router DOM** - Client-side routing

## Project Structure

```
bpaz-mcp/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── index.ts
│   │   └── layout/          # Layout components
│   │       ├── Sidebar.tsx
│   │       ├── Header.tsx
│   │       ├── MainLayout.tsx
│   │       └── index.ts
│   ├── pages/               # Page components
│   │   ├── Landing.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Integrations.tsx
│   │   ├── Sources.tsx
│   │   ├── SourceDetail.tsx
│   │   ├── NotFound.tsx
│   │   └── index.ts
│   ├── data/                # JSON data files (mock data)
│   │   ├── sources.json     # Data sources configuration
│   │   ├── integrations.json # Integration platforms
│   │   ├── dashboard.json   # Dashboard statistics
│   │   └── README.md        # Data folder documentation
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles with Tailwind
├── public/                  # Static assets
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd bpaz-mcp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Key Features

### Landing Page
- Hero section with gradient effects
- Feature cards showcasing capabilities
- Integration showcase grid
- Statistics dashboard
- Call-to-action sections

### Dashboard
- Real-time metrics and statistics (powered by JSON data)
- Query performance monitoring
- Active connections overview
- Recent activity timeline
- Trend indicators

### Enterprise Tools
- **List View**: Browse all 8 enterprise tools with summary stats
- **Detail View**: Click any source to view comprehensive details
- Connection information (host, port, database)
- Performance metrics (uptime, rows, tables, size)
- Connect/Disconnect functionality
- Visual status indicators

### AWS Bedrock Models
- 22 foundation models from AWS Bedrock
- Category-based filtering (LLM, Open Source, Image Generation)
- Search functionality
- Connection status badges
- Models: Claude 3.5 Sonnet, Claude 3 Opus/Sonnet/Haiku, Amazon Titan, Llama 3, Mistral, Cohere, and more

### Sidebar Navigation
- Organized navigation sections
- Active route highlighting
- SSO login/logout functionality
- User profile display
- Responsive mobile menu

### Data Management
- **Centralized JSON Data**: All mock data stored in `/src/data/` folder
- **Easy API Migration**: Structure ready for API integration
- **Type-Safe**: Full TypeScript support
- **Well Documented**: Comprehensive data structure documentation

## Component Library

### UI Components

- **Button** - Variants: primary, secondary, ghost, danger
- **Card** - With header, title, description, and content sections
- **Input** - With label, error states, and icon support
- **Badge** - Status indicators with multiple variants

### Layout Components

- **Sidebar** - Responsive sidebar with navigation and SSO login
- **Header** - Top header with mobile menu toggle and actions
- **MainLayout** - Main layout wrapper with sidebar and content area

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`:
- Primary colors (blue shades)
- Dark theme colors
- Custom gradients

### Adding New Pages

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/layout/Sidebar.tsx`

### Styling

All styles use Tailwind CSS utility classes. Custom styles can be added in:
- `src/index.css` for global styles
- Component files for component-specific styles

## SSO Integration

The SSO login button is located in the sidebar. To integrate with a real SSO provider:

1. Update the `handleSSOLogin` function in `Sidebar.tsx`
2. Add OAuth/SAML configuration
3. Implement token management
4. Add protected route logic

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License

## Author

Built for Barclays enterprise environment with AWS Bedrock integration

