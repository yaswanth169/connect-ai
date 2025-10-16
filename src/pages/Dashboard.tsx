import React from 'react';
import {
  TrendingUp,
  TrendingDown,
  Database,
  Zap,
  Users,
  Activity,
} from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
} from '../components/ui';

const stats = [
  {
    title: 'Total Rows',
    value: '3,425',
    change: '-1.1%',
    trend: 'down',
    icon: Database,
  },
  {
    title: 'Queries',
    value: '109',
    change: '-19.8%',
    trend: 'down',
    icon: Activity,
  },
  {
    title: 'Active Connections',
    value: '7',
    change: '-15.4%',
    trend: 'down',
    icon: Zap,
  },
  {
    title: 'Active Users',
    value: '6',
    change: '-83.7%',
    trend: 'down',
    icon: Users,
  },
];

const recentQueries = [
  { name: 'GET', queries: 36, success: 91.1, status: 'success' },
  { name: 'PATCH', queries: 34, success: 70.6, status: 'warning' },
  { name: 'POST', queries: 28, success: 71.4, status: 'warning' },
  { name: 'DELETE', queries: 4, success: 100, status: 'success' },
];

const activeConnections = [
  { name: 'SalesforceDev', queries: 3, status: 'success' },
  { name: 'SalesforceProd', queries: 1, status: 'success' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-dark-900 mb-2">Dashboard</h1>
        <p className="text-dark-600">Monitor your data connections and query performance</p>
      </div>

      {/* Time Filter */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-dark-600">Show data for the past:</span>
        <div className="flex gap-2">
          {['1 Day', '7 Days', '30 Days'].map((period, idx) => (
            <button
              key={period}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                idx === 1
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-100 text-dark-700 hover:bg-dark-200'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
          
          return (
            <Card key={stat.title}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-primary-600/10 rounded-lg">
                    <Icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    <TrendIcon className="w-4 h-4" />
                    {stat.change}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-dark-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-dark-600">{stat.title}</div>
                  <div className="text-xs text-dark-500 mt-1">this week</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Queries */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Queries</CardTitle>
                <CardDescription>Query performance by method</CardDescription>
              </div>
              <Badge variant="info">7 Days</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentQueries.map((query) => (
                <div key={query.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-semibold text-dark-900">
                        {query.name}
                      </span>
                      <span className="text-sm text-dark-600">
                        {query.queries} queries
                      </span>
                    </div>
                    <span className={`text-sm font-medium ${
                      query.success > 90 ? 'text-green-500' : 'text-yellow-500'
                    }`}>
                      {query.success}%
                    </span>
                  </div>
                  <div className="h-2 bg-dark-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        query.success > 90 ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                      style={{ width: `${query.success}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Connections */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Active Connections</CardTitle>
                <CardDescription>Currently connected data sources</CardDescription>
              </div>
              <Badge variant="success">{activeConnections.length} Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeConnections.map((connection) => (
                <div
                  key={connection.name}
                  className="flex items-center justify-between p-4 bg-dark-100 rounded-lg border border-dark-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center">
                      <Database className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <div className="font-medium text-dark-900">
                        {connection.name}
                      </div>
                      <div className="text-sm text-dark-600">
                        {connection.queries} queries
                      </div>
                    </div>
                  </div>
                  <Badge variant="success">
                    {connection.status === 'success' ? 'Connected' : 'Offline'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest events and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { time: '2 minutes ago', action: 'New query executed on SalesforceDev', type: 'query' },
              { time: '15 minutes ago', action: 'Connection established with SalesforceProd', type: 'connection' },
              { time: '1 hour ago', action: 'User John Doe logged in via SSO', type: 'auth' },
              { time: '3 hours ago', action: 'Data sync completed for MySQL database', type: 'sync' },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary-500"></div>
                <div className="flex-1">
                  <div className="text-sm text-dark-900">{activity.action}</div>
                  <div className="text-xs text-dark-600 mt-1">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

