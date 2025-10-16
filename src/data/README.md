# Data Folder

This folder contains JSON files with hardcoded data for the application. These files serve as mock data during development and can be easily replaced with API calls in the future.

## Files

### sources.json
Contains data source configurations including:
- Database connections (MySQL, PostgreSQL, MongoDB, etc.)
- Connection details (host, port, database name)
- Status information (connected/offline)
- Metrics (rows, tables, size, connections)
- Performance data (uptime, last sync)

**Usage:**
```typescript
import sourcesData from '../data/sources.json';
```

### integrations.json
Contains integration platform configurations including:
- AI platforms (ChatGPT, Claude, MCP, etc.)
- BI & Reporting tools (Power BI, Tableau)
- Other categories (CRM, ERP, No-Code/Low-Code)
- Connection status and connector counts

**Usage:**
```typescript
import integrationsData from '../data/integrations.json';
```

### dashboard.json
Contains dashboard statistics and activity data including:
- Stats (rows, queries, connections, users)
- Recent queries with success rates
- Active connections
- Recent activity timeline

**Usage:**
```typescript
import dashboardData from '../data/dashboard.json';
```

## Future API Integration

To replace these JSON files with API calls:

1. Create an API service file (e.g., `src/services/api.ts`)
2. Implement fetch functions that match the JSON structure
3. Update components to use the API service instead of importing JSON
4. Add loading states and error handling

### Example API Service

```typescript
// src/services/api.ts
export const api = {
  getSources: async () => {
    const response = await fetch('/api/sources');
    return response.json();
  },
  
  getSourceById: async (id: string) => {
    const response = await fetch(`/api/sources/${id}`);
    return response.json();
  },
  
  getIntegrations: async () => {
    const response = await fetch('/api/integrations');
    return response.json();
  },
  
  getDashboardData: async () => {
    const response = await fetch('/api/dashboard');
    return response.json();
  }
};
```

### Example Component Update

**Before (using JSON):**
```typescript
import sourcesData from '../data/sources.json';

export const Sources = () => {
  return (
    <div>
      {sourcesData.map(source => (
        <div key={source.id}>{source.name}</div>
      ))}
    </div>
  );
};
```

**After (using API):**
```typescript
import { useEffect, useState } from 'react';
import { api } from '../services/api';

export const Sources = () => {
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    api.getSources()
      .then(setSources)
      .finally(() => setLoading(false));
  }, []);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      {sources.map(source => (
        <div key={source.id}>{source.name}</div>
      ))}
    </div>
  );
};
```

## Data Structure

### Source Object
```typescript
{
  id: string;              // Unique identifier
  name: string;            // Display name
  type: string;            // Database type (MySQL, PostgreSQL, etc.)
  status: string;          // "connected" or "offline"
  rows: number;            // Total row count
  description: string;     // Description
  host: string;            // Host address
  port: number;            // Port number
  database: string;        // Database name
  lastSync: string;        // ISO 8601 timestamp
  version: string;         // Database version
  size: string;            // Storage size
  tables: number;          // Number of tables
  connections: number;     // Active connections
  uptime: string;          // Uptime percentage
}
```

### Integration Object
```typescript
{
  id: string;              // Unique identifier
  name: string;            // Display name
  category: string;        // Category (AI, BI & Reporting, etc.)
  icon: string;            // Emoji icon
  count: number;           // Number of connectors
  connected: boolean;      // Connection status
}
```

### Dashboard Stats Object
```typescript
{
  stats: Array<{
    title: string;         // Stat title
    value: string;         // Display value
    change: string;        // Percentage change
    trend: string;         // "up" or "down"
    icon: string;          // Icon name
  }>;
  recentQueries: Array<{
    name: string;          // HTTP method
    queries: number;       // Query count
    success: number;       // Success rate
    status: string;        // "success" or "warning"
  }>;
  activeConnections: Array<{
    name: string;          // Connection name
    queries: number;       // Query count
    status: string;        // Status
  }>;
  recentActivity: Array<{
    time: string;          // Time description
    action: string;        // Action description
    type: string;          // Activity type
  }>;
}
```

