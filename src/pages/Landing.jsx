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
  Code2,
  Link2,
  Rocket,
  Users,
  Globe,
} from 'lucide-react';
import { Button, GlassCard, Badge } from '../components/ui';
import ChatBot from '../components/ChatBot';

const features = [
  {
    icon: Zap,
    title: 'MCP Protocol Integration',
    description: 'Connect business tools to AI models using the standardized Model Context Protocol for seamless automation.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption with SOC 2, GDPR, and HIPAA compliance. Your data security is our top priority.',
  },
  {
    icon: Layers,
    title: 'Universal Compatibility',
    description: 'Works with GPT-4, Claude, Gemini, Llama, and all major AI models. One platform, endless possibilities.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Monitor MCP connections and performance with comprehensive dashboards and detailed analytics.',
  },
  {
    icon: Clock,
    title: 'Instant Setup',
    description: 'Connect tools to AI models in minutes with our intuitive interface. No coding required.',
  },
  {
    icon: Code2,
    title: 'Developer Friendly',
    description: 'Comprehensive API documentation, SDKs, and code examples to customize every integration.',
  },
];

const tools = [
  { name: 'Jira', icon: Layers },
  { name: 'Slack', icon: Zap },
  { name: 'GitHub', icon: Code2 },
  { name: 'Confluence', icon: Database },
  { name: 'Notion', icon: Workflow },
  { name: 'Trello', icon: BarChart3 },
  { name: 'Asana', icon: CheckCircle2 },
  { name: 'Linear', icon: TrendingUp },
];

const aiModels = [
  { name: 'GPT-4', provider: 'OpenAI' },
  { name: 'Claude 3', provider: 'Anthropic' },
  { name: 'Gemini Pro', provider: 'Google' },
  { name: 'Llama 3', provider: 'Meta' },
  { name: 'Mistral', provider: 'Mistral AI' },
  { name: 'Grok', provider: 'xAI' },
];

const stats = [
  { value: '270+', label: 'Integrations', icon: Database },
  { value: '99.9%', label: 'Uptime SLA', icon: TrendingUp },
  { value: '10M+', label: 'MCP Requests/Day', icon: Zap },
  { value: '<50ms', label: 'Avg Latency', icon: Clock },
];

const benefits = [
  {
    title: 'Automate Workflows',
    description: 'Let AI handle repetitive tasks across your tools automatically.',
    icon: Workflow,
  },
  {
    title: 'Real-time Insights',
    description: 'Get instant answers from your business data using AI.',
    icon: BarChart3,
  },
  {
    title: 'Scale Infinitely',
    description: 'Handle millions of MCP requests with enterprise infrastructure.',
    icon: TrendingUp,
  },
  {
    title: 'Secure by Default',
    description: 'All connections are encrypted and compliant with industry standards.',
    icon: Shield,
  },
];

export const Landing = () => {
  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <Badge variant="default" className="mb-8 inline-flex shadow-lg border-white/30">
              <Zap className="w-4 h-4 mr-2" strokeWidth={2.5} />
              Powered by Model Context Protocol (MCP)
            </Badge>
            
            <h1 className="text-6xl sm:text-7xl font-bold mb-8 leading-tight">
              <span className="block mb-2 text-white">Connect Your Tools</span>
              <span className="text-gradient">to Any AI Model</span>
            </h1>
            
            <p className="text-2xl text-primary-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade MCP platform connecting business tools to AI models. 
              Automate workflows with GPT-4, Claude, Gemini, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Link to="/dashboard">
                <Button size="lg" icon={ArrowRight} iconPosition="right" className="text-lg px-10 py-5 shadow-2xl">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/integrations">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-5">
                  View Integrations
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <GlassCard key={stat.label} hover className="group text-center" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="py-6">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white flex items-center justify-center">
                        <Icon className="w-6 h-6 text-black" strokeWidth={2.5} />
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm font-semibold text-primary-300">{stat.label}</div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What is MCP Section */}
      <section className="py-24 bg-gradient-to-b from-[#111111] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="info" className="mb-6 shadow-lg">
              <Code2 className="w-4 h-4 mr-2" />
              Understanding MCP
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">What is Model Context Protocol?</span>
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              MCP is the standardized way to connect AI models with external tools and data sources,
              enabling seamless integration between LLMs and your business applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <GlassCard hover className="text-center">
              <div className="py-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white flex items-center justify-center">
                  <Link2 className="w-8 h-8 text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Standardized Connection</h3>
                <p className="text-primary-300">
                  MCP provides a universal protocol for AI models to communicate with external tools, 
                  ensuring compatibility and consistency.
                </p>
              </div>
            </GlassCard>

            <GlassCard hover className="text-center">
              <div className="py-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white flex items-center justify-center">
                  <Zap className="w-8 h-8 text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Real-time Access</h3>
                <p className="text-primary-300">
                  Give your AI models instant access to live data from tools like Jira, Slack,
                  GitHub, and more without manual intervention.
                </p>
              </div>
            </GlassCard>

            <GlassCard hover className="text-center">
              <div className="py-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Endless Automation</h3>
                <p className="text-primary-300">
                  Create powerful workflows where AI models can read, write, and automate tasks
                  across all your business tools.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* How to Connect Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">How to Connect in 3 Simple Steps</span>
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Getting started with MCP integration is easier than you think
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard hover className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-black text-2xl font-bold shadow-lg">
                1
              </div>
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-white mb-4">Choose Your Tools</h3>
                <p className="text-primary-300 mb-4">
                  Browse our library of 270+ integrations including Jira, Slack, GitHub, Confluence, 
                  and select the tools you want to connect.
                </p>
                <Link to="/sources">
                  <Button variant="ghost" icon={ArrowRight} iconPosition="right">
                    Browse Tools
                  </Button>
                </Link>
              </div>
            </GlassCard>

            <GlassCard hover className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-black text-2xl font-bold shadow-lg">
                2
              </div>
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-white mb-4">Select AI Model</h3>
                <p className="text-primary-300 mb-4">
                  Choose from GPT-4, Claude 3, Gemini Pro, Llama 3, or any other major AI model 
                  to power your integrations.
                </p>
                <Link to="/integrations">
                  <Button variant="ghost" icon={ArrowRight} iconPosition="right">
                    View Models
                  </Button>
                </Link>
              </div>
            </GlassCard>

            <GlassCard hover className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-black text-2xl font-bold shadow-lg">
                3
              </div>
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-white mb-4">Configure & Deploy</h3>
                <p className="text-primary-300 mb-4">
                  Follow our step-by-step documentation, add your MCP endpoint URL, 
                  and start automating workflows instantly.
                </p>
                <Button variant="ghost" icon={ArrowRight} iconPosition="right">
                  Read Docs
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Rotating Tools Showcase */}
      <section className="py-24 bg-gradient-to-b from-black to-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Popular Business Tools</span>
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Connect your favorite business tools to AI models via MCP
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <GlassCard 
                  key={tool.name} 
                  hover
                  className="text-center group cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white flex items-center justify-center">
                      <Icon className="w-8 h-8 text-black" strokeWidth={2.5} />
                    </div>
                    <div className="text-lg font-bold text-white">
                      {tool.name}
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>

          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">AI Models</h3>
            <p className="text-lg text-primary-300 mb-8">
              Compatible with all major AI models
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {aiModels.map((model, index) => (
              <GlassCard 
                key={model.name} 
                hover
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="py-6">
                  <div className="text-xl font-bold text-white mb-1">{model.name}</div>
                  <div className="text-xs text-primary-400">{model.provider}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Enterprise Features</span>
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Everything you need to build powerful AI-driven automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <GlassCard 
                  key={feature.title} 
                  hover 
                  className="group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="py-6">
                    <div className="w-14 h-14 mb-6 rounded-2xl bg-white flex items-center justify-center">
                      <Icon className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-primary-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-[#111111] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Why Choose ConnectAI?</span>
            </h2>
            <p className="text-xl text-primary-300 max-w-3xl mx-auto">
              Built for enterprises, trusted by industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <GlassCard key={benefit.title} hover className="text-center" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="py-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white flex items-center justify-center">
                      <Icon className="w-8 h-8 text-black" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-sm text-primary-300">{benefit.description}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="relative overflow-hidden border-white/20">
            <div className="py-24 text-center relative z-10">
              <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                Ready to Connect Your Tools to AI?
              </h2>
              <p className="text-2xl text-primary-300 mb-12 max-w-3xl mx-auto">
                Join thousands of companies already automating with MCP
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/dashboard">
                  <Button size="lg" icon={Rocket} iconPosition="right" className="text-lg px-12 py-6 shadow-2xl">
                    Start Free Trial
                  </Button>
                </Link>
                <Link to="/integrations">
                  <Button size="lg" variant="outline" className="text-lg px-12 py-6">
                    View All Integrations
                  </Button>
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <Workflow className="w-6 h-6 text-black" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-white">ConnectAI</span>
            </div>
            <p className="text-sm text-primary-400">
              © 2025 ConnectAI. Built for the AI-first future.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot */}
      <ChatBot />
    </div>
  );
};

export default Landing;
