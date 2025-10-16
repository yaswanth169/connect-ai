import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  Shield,
  Layers,
  BarChart3,
  Database,
  Workflow,
  Clock,
  Lock,
  TrendingUp,
} from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui';

const features = [
  {
    icon: Database,
    title: 'Multiple Data Sources',
    description: 'Connect to 270+ business data sources including Salesforce, SAP, QuickBooks, and more.',
  },
  {
    icon: Zap,
    title: 'AI-Ready Integration',
    description: 'Seamlessly connect your business data to AI agents, LLMs, and frameworks like MCP.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA standards.',
  },
  {
    icon: Layers,
    title: 'Universal Endpoints',
    description: 'Use REST APIs, GraphQL, or JDBC drivers to access your data anywhere.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Monitor data flows, queries, and performance with detailed analytics dashboards.',
  },
  {
    icon: Clock,
    title: 'Instant Setup',
    description: 'Connect your data sources in minutes with no coding required.',
  },
];

const integrations = [
  { name: 'Salesforce', category: 'CRM' },
  { name: 'SAP', category: 'ERP' },
  { name: 'QuickBooks', category: 'Accounting' },
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Stripe', category: 'Payment' },
  { name: 'HubSpot', category: 'Marketing' },
];

const stats = [
  { value: '270+', label: 'Data Sources' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '10M+', label: 'Queries/Day' },
  { value: '<50ms', label: 'Avg Latency' },
];

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-primary-600/10 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600/10 border border-primary-600/20 rounded-full mb-8">
              <Workflow className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-primary-400">Connect Business Data to AI</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-dark-900 to-dark-700 bg-clip-text text-transparent">
              Bridge Your Data to AI
            </h1>
            
            <p className="text-xl text-dark-600 mb-10 max-w-2xl mx-auto">
              ConnectAI makes it simple to connect your business data to AI applications. 
              Access 270+ data sources with enterprise-grade security and instant setup.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/dashboard">
                <Button size="lg" icon={ArrowRight} iconPosition="right">
                  Get Started Free
                </Button>
              </Link>
              <Button size="lg" variant="secondary">
                View Documentation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-dark-200">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-bold text-primary-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-dark-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
              Everything You Need to Connect Data to AI
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              Built for modern teams who need reliable, secure, and fast data access for AI applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} hover>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
              Connect to Popular Data Sources
            </h2>
            <p className="text-lg text-dark-600">
              270+ pre-built connectors for all your business applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="bg-dark-50 border border-dark-200 rounded-lg p-6 text-center hover:border-primary-600 transition-all duration-300 group"
              >
                <div className="text-lg font-semibold text-dark-900 mb-1 group-hover:text-primary-500 transition-colors">
                  {integration.name}
                </div>
                <div className="text-sm text-dark-600">{integration.category}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/integrations">
              <Button variant="ghost" icon={ArrowRight} iconPosition="right">
                View All Integrations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary-600 to-primary-800 border-primary-600">
            <CardContent className="text-center py-12">
              <Lock className="w-16 h-16 text-white/80 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of teams using ConnectAI to power their AI applications with real business data.
              </p>
              <Link to="/dashboard">
                <Button size="lg" variant="secondary" icon={TrendingUp} iconPosition="right">
                  Start Free Trial
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-dark-600">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Workflow className="w-6 h-6 text-primary-500" />
            <span className="text-xl font-bold text-dark-900">ConnectAI</span>
          </div>
          <p className="text-sm">
            © 2025 ConnectAI. Seamlessly connect your business data to AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

