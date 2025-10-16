import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Database,
  Activity,
  Clock,
  Server,
  HardDrive,
  Layers,
  Zap,
  TrendingUp,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Sparkles,
} from 'lucide-react';
import {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  Button,
  Badge,
} from '../components/ui';
import sourcesData from '../data/sources.json';

export const SourceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const source = sourcesData.find((s) => s.id === id);

  if (!source) {
    return (
      <div className="min-h-screen bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <GlassCard className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
              <Database className="w-12 h-12 text-primary-400" strokeWidth={2} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Source Not Found</h2>
            <p className="text-primary-300 mb-8">
              The data source you're looking for doesn't exist or has been removed.
            </p>
            <Button icon={ArrowLeft} onClick={() => navigate('/sources')}>
              Back to Sources
            </Button>
          </GlassCard>
        </div>
      </div>
    );
  }

  const handleConnect = () => {
    console.log('Connecting to:', source.name);
    alert(`Connecting to ${source.name}...`);
  };

  const isConnected = source.status === 'connected';

  return (
    <div className="min-h-screen bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8 animate-fade-in">
          <Button
            variant="ghost"
            size="sm"
            icon={ArrowLeft}
            onClick={() => navigate('/sources')}
          >
            Back to Sources
          </Button>
        </div>

        {/* Source Header */}
        <div className="mb-12 animate-slide-up">
          <GlassCard hover className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center shadow-xl">
                  <Database className="w-12 h-12 text-black" strokeWidth={2.5} />
                </div>
                {isConnected ? (
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-black shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                ) : (
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center border-4 border-black shadow-lg">
                    <XCircle className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-4xl font-bold mb-3">
                      <span className="text-gradient">{source.name}</span>
                    </h1>
                    <p className="text-lg text-primary-300 leading-relaxed">
                      {source.description}
                    </p>
                  </div>
                  <Badge 
                    variant={isConnected ? 'success' : 'danger'} 
                    className="text-sm px-4 py-2 self-start shadow-lg"
                  >
                    {isConnected ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-2" strokeWidth={3} />
                        Connected
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 mr-2" strokeWidth={3} />
                        Offline
                      </>
                    )}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default" className="shadow-sm">{source.type}</Badge>
                  <Badge variant="info" className="shadow-sm">{source.version}</Badge>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Database, label: 'Total Rows', value: source.rows.toLocaleString(), color: 'from-blue-500 to-blue-600' },
            { icon: Layers, label: 'Tables', value: source.tables.toString(), color: 'from-green-500 to-green-600' },
            { icon: Zap, label: 'Active Connections', value: source.connections.toString(), color: 'from-amber-500 to-amber-600' },
            { icon: TrendingUp, label: 'Uptime', value: source.uptime, color: 'from-purple-500 to-purple-600' },
          ].map((metric, index) => {
            const Icon = metric.icon;
            return (
              <GlassCard key={metric.label} hover style={{ animationDelay: `${index * 100}ms` }}>
                <GlassCardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-semibold text-primary-300">{metric.label}</span>
                  </div>
                  <div className="text-3xl font-bold text-white">{metric.value}</div>
                </GlassCardContent>
              </GlassCard>
            );
          })}
        </div>

        {/* Technical Details */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <GlassCard hover>
            <GlassCardHeader>
              <GlassCardTitle>Connection Details</GlassCardTitle>
              <GlassCardDescription>Database connection configuration</GlassCardDescription>
            </GlassCardHeader>
            <GlassCardContent>
              <div className="space-y-4">
                {[
                  { icon: Server, label: 'Host', value: source.host },
                  { icon: Zap, label: 'Port', value: source.port.toString() },
                  { icon: Database, label: 'Database', value: source.database },
                  { icon: Activity, label: 'Version', value: source.version },
                  { icon: HardDrive, label: 'Size', value: source.size },
                ].map((detail, index) => {
                  const Icon = detail.icon;
                  return (
                    <div
                      key={detail.label}
                      className="flex items-center justify-between py-4 border-b border-white/10 last:border-0 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-primary-400 group-hover:text-white transition-colors" strokeWidth={2.5} />
                        <span className="text-sm font-semibold text-primary-300">{detail.label}</span>
                      </div>
                      <span className="text-sm font-mono font-bold text-white bg-white/10 px-3 py-1.5 rounded-lg">
                        {detail.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </GlassCardContent>
          </GlassCard>

          <GlassCard hover>
            <GlassCardHeader>
              <GlassCardTitle>Sync Information</GlassCardTitle>
              <GlassCardDescription>Latest synchronization status</GlassCardDescription>
            </GlassCardHeader>
            <GlassCardContent>
              <div className="space-y-4">
                {[
                  { icon: Clock, label: 'Last Sync', value: new Date(source.lastSync).toLocaleString() },
                  { icon: Database, label: 'Type', value: source.type, badge: true },
                  { icon: Activity, label: 'Status', value: source.status, badge: true, variant: isConnected ? 'success' : 'danger' },
                  { icon: TrendingUp, label: 'Reliability', value: source.uptime, highlight: true },
                ].map((detail, index) => {
                  const Icon = detail.icon;
                  return (
                    <div
                      key={detail.label}
                      className="flex items-center justify-between py-4 border-b border-white/10 last:border-0 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-primary-400 group-hover:text-white transition-colors" strokeWidth={2.5} />
                        <span className="text-sm font-semibold text-primary-300">{detail.label}</span>
                      </div>
                      {detail.badge ? (
                        <Badge variant={detail.variant || 'info'}>{detail.value}</Badge>
                      ) : detail.highlight ? (
                        <span className="text-sm font-bold text-green-400">{detail.value}</span>
                      ) : (
                        <span className="text-sm font-semibold text-white">{detail.value}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </GlassCardContent>
          </GlassCard>
        </div>

        {/* Performance Metrics */}
        <GlassCard hover className="mb-12">
          <GlassCardHeader>
            <GlassCardTitle>Performance Metrics</GlassCardTitle>
            <GlassCardDescription>Database performance and usage statistics</GlassCardDescription>
          </GlassCardHeader>
          <GlassCardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Total Tables', value: source.tables.toString() },
                { label: 'Total Rows', value: `${(source.rows / 1000).toFixed(1)}K` },
                { label: 'Storage Size', value: source.size },
                { label: 'Active Users', value: source.connections.toString() },
              ].map((metric, index) => (
                <div key={metric.label} className="text-center group" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-sm font-semibold text-primary-300 mb-3">{metric.label}</div>
                  <div className="text-4xl font-bold text-gradient transition-colors">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </GlassCardContent>
        </GlassCard>

        {/* Connect CTA */}
        {!isConnected && (
          <GlassCard className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 border-primary-700 shadow-2xl">
            <GlassCardContent className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">
                Ready to Connect?
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Connect to {source.name} now to start accessing your data and unlock AI-powered insights for your business.
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={handleConnect}
                icon={Zap}
                iconPosition="right"
                className="shadow-2xl"
              >
                Connect Now
              </Button>
            </GlassCardContent>
          </GlassCard>
        )}
      </div>
    </div>
  );
};

export default SourceDetail;
