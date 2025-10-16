import React, { useState } from 'react';
import { Search, Filter, Database, Cloud, ShoppingCart, CreditCard } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Input, Button, Badge } from '../components/ui';

const categories = ['All', 'AI', 'BI & Reporting', 'Dev', 'ETL', 'iPaaS', 'No-Code/Low-Code'];

const integrations = [
  { name: 'ChatGPT', category: 'AI', icon: '🤖', count: 8, connected: false },
  { name: 'Claude AI', category: 'AI', icon: '🤖', count: 8, connected: false },
  { name: 'Copilot Studio', category: 'AI', icon: '💻', count: 8, connected: false },
  { name: 'CrewAI', category: 'AI', icon: '🤖', count: 8, connected: false },
  { name: 'Gemini CLI', category: 'AI', icon: '✨', count: 8, connected: false },
  { name: 'LangChain', category: 'AI', icon: '⛓️', count: 8, connected: false },
  { name: 'MCP', category: 'AI', icon: '🔌', count: 8, connected: true },
  { name: 'n8n', category: 'No-Code/Low-Code', icon: '🔄', count: 8, connected: false },
  { name: 'Power BI', category: 'BI & Reporting', icon: '📊', count: 24, connected: false },
  { name: 'Tableau', category: 'BI & Reporting', icon: '📈', count: 24, connected: false },
  { name: 'Salesforce', category: 'CRM', icon: '☁️', count: 15, connected: true },
  { name: 'SAP Ariba', category: 'ERP', icon: '🏢', count: 12, connected: false },
];

export const Integrations: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-dark-900 mb-2">Integrations</h1>
        <p className="text-dark-600">Connect to 270+ data sources and AI platforms</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search integrations..."
            icon={Search}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="secondary" icon={Filter}>
          Filter
        </Button>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-dark-100 text-dark-700 hover:bg-dark-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredIntegrations.map((integration) => (
          <Card key={integration.name} hover>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-dark-200 rounded-lg flex items-center justify-center text-2xl">
                  {integration.icon}
                </div>
                {integration.connected && (
                  <Badge variant="success">Connected</Badge>
                )}
              </div>
              <h3 className="font-semibold text-dark-900 mb-1">
                {integration.name}
              </h3>
              <p className="text-sm text-dark-600 mb-4">{integration.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-dark-500">
                  {integration.count} connectors
                </span>
                <Button
                  size="sm"
                  variant={integration.connected ? 'ghost' : 'primary'}
                >
                  {integration.connected ? 'Docs' : 'Connect'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Can't find message */}
      {filteredIntegrations.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Database className="w-16 h-16 text-dark-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-dark-900 mb-2">
              No integrations found
            </h3>
            <p className="text-dark-600 mb-6">
              Try adjusting your search or filters
            </p>
            <Button variant="primary">View All Integrations</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Integrations;

