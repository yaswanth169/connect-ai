import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Database,
  Zap,
  Users,
  Activity,
  Clock,
  CheckCircle2,
  BarChart3,
  Cpu,
} from 'lucide-react';
import {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  Badge,
  Loader,
} from '../components/ui';
import dashboardData from '../data/dashboard.json';

const iconMap = {
  Database,
  Activity,
  Zap,
  Users,
  Cpu,
};

export const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7 Days');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([]);
  const periods = ['1 Day', '7 Days', '30 Days'];

  useEffect(() => {
    const timer = setTimeout(() => {
      const mappedStats = dashboardData.stats.map((stat) => ({
        ...stat,
        icon: iconMap[stat.icon] || Database,
      }));
      setStats(mappedStats);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Loader fullScreen tip="Loading MCP analytics..." />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-3">
            <span className="text-gradient">Dashboard</span>
          </h1>
          <p className="text-xl text-primary-300">
            Monitor your data connections and query performance in real-time
          </p>
        </div>

        {/* Time Filter */}
        <div className="flex items-center gap-4 mb-12 animate-slide-up">
          <span className="text-sm font-semibold text-white">Time Period:</span>
          <div className="flex gap-2">
            {periods.map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  selectedPeriod === period
                    ? 'bg-white text-black shadow-lg'
                    : 'glass hover:shadow-glass-lg text-white'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-slide-up">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
            const isPositive = stat.trend === 'up';
            
            return (
              <GlassCard key={stat.title} hover style={{ animationDelay: `${index * 100}ms` }}>
                <GlassCardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </div>
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                      isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      <TrendIcon className="w-3.5 h-3.5" strokeWidth={3} />
                      {stat.change}
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-primary-300">{stat.title}</div>
                    <div className="text-xs text-primary-400 mt-1">this week</div>
                  </div>
                </GlassCardContent>
              </GlassCard>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* MCP Performance */}
          <GlassCard hover>
            <GlassCardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <GlassCardTitle>MCP Performance</GlassCardTitle>
                  <GlassCardDescription>AI model request success rates</GlassCardDescription>
                </div>
                <Badge variant="info" className="shadow-lg">
                  <BarChart3 className="w-3 h-3 mr-1" strokeWidth={3} />
                  {selectedPeriod}
                </Badge>
              </div>
            </GlassCardHeader>
            <GlassCardContent>
              <div className="space-y-5">
                {dashboardData.mcpPerformance.map((model, index) => (
                  <div key={model.name} className="space-y-3 group" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-white text-sm px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                          {model.name}
                        </span>
                        <span className="text-sm font-semibold text-primary-300">
                          {model.requests.toLocaleString()} requests
                        </span>
                      </div>
                      <span className={`text-sm font-bold px-3 py-1 rounded-lg ${
                        model.success > 95 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {model.success}%
                      </span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          model.success > 95 
                            ? 'bg-gradient-to-r from-green-500 to-green-600' 
                            : 'bg-gradient-to-r from-amber-500 to-amber-600'
                        }`}
                        style={{ width: `${model.success}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCardContent>
          </GlassCard>

          {/* Active Tools */}
          <GlassCard hover>
            <GlassCardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <GlassCardTitle>Active Tool Integrations</GlassCardTitle>
                  <GlassCardDescription>MCP-connected business tools</GlassCardDescription>
                </div>
                <Badge variant="success" className="shadow-lg">
                  <CheckCircle2 className="w-3 h-3 mr-1" strokeWidth={3} />
                  {dashboardData.activeTools.length} Active
                </Badge>
              </div>
            </GlassCardHeader>
            <GlassCardContent>
              <div className="space-y-4">
                {dashboardData.activeTools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className="flex items-center justify-between p-4 glass-hover rounded-2xl border border-white/10 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                        <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="font-bold text-white mb-1">
                          {tool.name}
                        </div>
                        <div className="text-xs font-semibold text-primary-400">
                          {tool.requests} requests via {tool.model}
                        </div>
                      </div>
                    </div>
                    <Badge variant="success">
                      <CheckCircle2 className="w-3 h-3 mr-1" strokeWidth={3} />
                      Connected
                    </Badge>
                  </div>
                ))}
              </div>
            </GlassCardContent>
          </GlassCard>
        </div>

        {/* Activity Timeline */}
        <GlassCard hover>
          <GlassCardHeader>
            <div className="flex items-center justify-between">
              <div>
                <GlassCardTitle>Recent Activity</GlassCardTitle>
                <GlassCardDescription>Latest events and system updates</GlassCardDescription>
              </div>
              <Clock className="w-6 h-6 text-primary-400" strokeWidth={2.5} />
            </div>
          </GlassCardHeader>
          <GlassCardContent>
            <div className="space-y-6">
              {dashboardData.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-5 group" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-white transition-colors" />
                    {index < dashboardData.recentActivity.length - 1 && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-white/20" />
                    )}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="text-sm font-semibold text-white mb-1">{activity.action}</div>
                    <div className="flex items-center gap-2 text-xs font-medium text-primary-400">
                      <Clock className="w-3 h-3" strokeWidth={2.5} />
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCardContent>
        </GlassCard>
      </div>
    </div>
  );
};

export default Dashboard;
