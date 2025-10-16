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
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Star,
} from 'lucide-react';
import { Button, GlassCard, Badge } from '../components/ui';

const features = [
  {
    icon: Database,
    title: 'Multiple Data Sources',
    description: 'Connect to 270+ business platforms including Salesforce, SAP, QuickBooks, and more with one-click integration.',
  },
  {
    icon: Zap,
    title: 'AI-Ready Integration',
    description: 'Seamlessly connect your data to AI agents, LLMs, and frameworks. Power your AI applications with real business data.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption with SOC 2, GDPR, and HIPAA compliance. Your data security is our top priority.',
  },
  {
    icon: Layers,
    title: 'Universal Endpoints',
    description: 'Access your data via REST APIs, GraphQL, or JDBC drivers. Use the protocol that works best for you.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Monitor data flows and performance with comprehensive dashboards and detailed analytics.',
  },
  {
    icon: Clock,
    title: 'Instant Setup',
    description: 'Connect sources in minutes with our intuitive interface. No coding required, just click and connect.',
  },
];

const integrations = [
  { name: 'Salesforce', category: 'CRM', icon: '☁️' },
  { name: 'SAP', category: 'ERP', icon: '🏢' },
  { name: 'QuickBooks', category: 'Accounting', icon: '💼' },
  { name: 'MySQL', category: 'Database', icon: '🗄️' },
  { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
  { name: 'MongoDB', category: 'Database', icon: '🍃' },
  { name: 'Snowflake', category: 'Data Warehouse', icon: '❄️' },
  { name: 'BigQuery', category: 'Analytics', icon: '📊' },
];

const stats = [
  { value: '270+', label: 'Data Sources', icon: Database },
  { value: '99.9%', label: 'Uptime SLA', icon: TrendingUp },
  { value: '10M+', label: 'Queries/Day', icon: Zap },
  { value: '<50ms', label: 'Avg Latency', icon: Clock },
];

export const Landing = () => {
  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <Badge variant="default" className="mb-8 inline-flex shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" strokeWidth={2.5} />
              Enterprise Data Integration Platform
            </Badge>
            
            <h1 className="text-7xl sm:text-8xl font-bold mb-8 leading-tight">
              <span className="block mb-2 text-white">Bridge Your Data</span>
              <span className="text-gradient">to Artificial Intelligence</span>
            </h1>
            
            <p className="text-2xl text-primary-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Professional enterprise-grade platform connecting 270+ data sources to AI applications. 
              Trusted by industry leaders worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Link to="/dashboard">
                <Button size="lg" icon={ArrowRight} iconPosition="right" className="text-lg px-10 py-5 shadow-2xl">
                  Start Free Trial
                </Button>
              </Link>
              <Button size="lg" variant="secondary" className="text-lg px-10 py-5">
                View Documentation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <GlassCard 
                    key={stat.label} 
                    hover 
                    className="text-center group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="py-6">
                      <Icon className="w-8 h-8 mx-auto mb-3 text-white transition-colors" strokeWidth={2.5} />
                      <div className="text-4xl font-bold text-gradient mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-primary-300">{stat.label}</div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Everything You Need</span>
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
              Built for modern teams who demand reliable, secure, and fast data access for AI applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <GlassCard 
                  key={feature.title} 
                  hover
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-2">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                      <Icon className="w-8 h-8 text-black" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-primary-300 leading-relaxed">{feature.description}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Popular Integrations</span>
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Connect with industry-leading platforms in seconds
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <GlassCard 
                key={integration.name} 
                hover
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="py-8">
                  <div className="text-5xl mb-4">
                    {integration.icon}
                  </div>
                  <div className="text-lg font-bold text-white mb-2">
                    {integration.name}
                  </div>
                  <Badge variant="default">{integration.category}</Badge>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/integrations">
              <Button variant="outline" icon={ArrowRight} iconPosition="right" size="lg">
                View All 270+ Integrations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <GlassCard className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 border-white/20 shadow-2xl">
            <div className="text-center py-20 px-8">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of teams using ConnectAI to power their AI applications with real business data.
                Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard">
                  <Button size="lg" variant="secondary" icon={TrendingUp} iconPosition="right" className="shadow-2xl">
                    Start Free Trial
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-900">
                  Contact Sales
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <Workflow className="w-6 h-6 text-black" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-white">ConnectAI</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-primary-300 font-medium">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
              <a href="#" className="hover:text-white transition-colors">Docs</a>
            </div>
            <p className="text-sm text-primary-400">
              © 2025 ConnectAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
