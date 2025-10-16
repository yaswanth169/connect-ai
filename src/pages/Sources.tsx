import React from 'react';
import { Database, Plus } from 'lucide-react';
import { Card, CardContent, Button, Badge } from '../components/ui';

const sources = [
  { name: 'MySQL Production', type: 'MySQL', status: 'connected', rows: 45230 },
  { name: 'PostgreSQL Dev', type: 'PostgreSQL', status: 'connected', rows: 12450 },
  { name: 'MongoDB Analytics', type: 'MongoDB', status: 'offline', rows: 89340 },
];

export const Sources: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-dark-900 mb-2">Data Sources</h1>
          <p className="text-dark-600">Manage your connected data sources</p>
        </div>
        <Button icon={Plus}>Add Source</Button>
      </div>

      <div className="grid gap-4">
        {sources.map((source) => (
          <Card key={source.name}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900">{source.name}</h3>
                    <p className="text-sm text-dark-600">{source.type} • {source.rows.toLocaleString()} rows</p>
                  </div>
                </div>
                <Badge variant={source.status === 'connected' ? 'success' : 'danger'}>
                  {source.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sources;

