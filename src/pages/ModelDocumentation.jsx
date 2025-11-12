import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { FiArrowLeft, FiCopy, FiExternalLink, FiBook, FiCode, FiZap } from 'react-icons/fi';
import { Modal, Tabs, Input as AntInput, message } from 'antd';
import { GlassCard, Button, Badge, Loader } from '../components/ui';
import integrationsData from '../data/integrations.json';
import { getIcon } from '../utils/iconMap';

const { TextArea } = AntInput;

export const ModelDocumentation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [model, setModel] = useState(null);
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [endpointUrl, setEndpointUrl] = useState('');

  const sourceTool = location.state?.from;

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundModel = integrationsData.find((m) => m.id === id);
      setModel(foundModel);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    message.success('Copied to clipboard!');
  };

  const handleConnect = () => {
    if (!endpointUrl) {
      message.error('Please enter an endpoint URL');
      return;
    }
    message.success(`Connecting ${model.name} to ${endpointUrl}...`);
    setConnectModalOpen(false);
    setEndpointUrl('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Loader fullScreen tip="Loading documentation..." />
        </div>
      </div>
    );
  }

  if (!model) {
    return (
      <div className="min-h-screen bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <GlassCard className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
              <FiBook className="w-12 h-12 text-primary-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Documentation Not Found</h2>
            <p className="text-primary-300 mb-8">
              The documentation you're looking for doesn't exist.
            </p>
            <Button icon={FiArrowLeft} onClick={() => navigate('/integrations')}>
              Back to Integrations
            </Button>
          </GlassCard>
        </div>
      </div>
    );
  }

  const Icon = getIcon(model.icon);

  const sampleCode = `// Initialize ${model.name} connection
import { MCPClient } from '@mcp/client';

const client = new MCPClient({
  model: '${model.id}',
  endpoint: 'YOUR_ENDPOINT_URL',
  apiKey: process.env.API_KEY
});

// Example: Send a message
async function sendMessage(message) {
  const response = await client.chat.completions.create({
    messages: [{ role: 'user', content: message }],
    temperature: 0.7,
    max_tokens: 1000
  });
  
  return response.choices[0].message.content;
}

// Example usage
const result = await sendMessage('Hello, how can you help?');
console.log(result);`;

  return (
    <div className="min-h-screen bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8 animate-fade-in">
          <Button
            variant="ghost"
            size="sm"
            icon={FiArrowLeft}
            onClick={() => navigate('/integrations')}
          >
            Back to Integrations
          </Button>
        </div>

        {/* Model Header */}
        <div className="mb-12 animate-slide-up">
          <GlassCard hover className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-xl">
                <Icon className="w-12 h-12 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-4xl font-bold mb-3">
                      <span className="text-gradient">{model.name}</span>
                    </h1>
                    <p className="text-lg text-primary-300 leading-relaxed mb-4">
                      {model.description}
                    </p>
                  </div>
                  <Badge 
                    variant={model.connected ? 'success' : 'default'} 
                    className="text-sm px-4 py-2 self-start shadow-lg"
                  >
                    {model.connected ? 'Connected' : 'Available'}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="info" className="shadow-sm">{model.provider}</Badge>
                  <Badge variant="default" className="shadow-sm">{model.category}</Badge>
                  <Badge variant="default" className="shadow-sm">{model.contextWindow}</Badge>
                  <Badge variant="success" className="shadow-sm">{model.pricing}</Badge>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Documentation Tabs */}
        <GlassCard className="mb-12">
          <Tabs
            defaultActiveKey="overview"
            size="large"
            items={[
              {
                key: 'overview',
                label: (
                  <span className="flex items-center gap-2">
                    <FiBook className="w-4 h-4" />
                    Overview
                  </span>
                ),
                children: (
                  <div className="space-y-6 py-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">About {model.name}</h3>
                      <p className="text-primary-300 leading-relaxed mb-6">
                        {model.name} is a powerful foundation model available through {model.provider}. It offers {model.contextWindow} context window 
                        with {model.pricing} pricing. This model is ideal for enterprise use cases including natural language 
                        processing, code generation, and intelligent automation within the Barclays environment.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                      <ul className="space-y-3 text-primary-300">
                        <li className="flex items-start gap-3">
                          <FiZap className="w-5 h-5 text-green-500 mt-1" />
                          <span>High-performance inference with low latency</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FiZap className="w-5 h-5 text-green-500 mt-1" />
                          <span>Advanced reasoning and contextual understanding</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FiZap className="w-5 h-5 text-green-500 mt-1" />
                          <span>Support for multiple programming languages and frameworks</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FiZap className="w-5 h-5 text-green-500 mt-1" />
                          <span>Easy integration with MCP protocol on AWS Bedrock</span>
                        </li>
                      </ul>
                    </div>

                    {sourceTool && (
                      <div className="p-6 glass rounded-xl">
                        <h3 className="text-xl font-bold text-white mb-3">Integration Context</h3>
                        <p className="text-primary-300">
                          You're connecting this model to work with {sourceTool}. This will enable AI-powered automation 
                          for your workflows.
                        </p>
                      </div>
                    )}
                  </div>
                ),
              },
              {
                key: 'setup',
                label: (
                  <span className="flex items-center gap-2">
                    <FiCode className="w-4 h-4" />
                    Setup Guide
                  </span>
                ),
                children: (
                  <div className="space-y-6 py-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Installation</h3>
                      <div className="relative">
                        <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto">
                          <code className="text-green-400 text-sm font-mono">
{`npm install @mcp/client
# or
yarn add @mcp/client`}
                          </code>
                        </pre>
                        <button
                          onClick={() => handleCopy('npm install @mcp/client')}
                          className="absolute top-4 right-4 p-2 glass-hover rounded-lg"
                        >
                          <FiCopy className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Configuration</h3>
                      <p className="text-primary-300 mb-4">
                        Set up your environment variables:
                      </p>
                      <div className="relative">
                        <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto">
                          <code className="text-blue-400 text-sm font-mono">
{`API_KEY=your_api_key_here
ENDPOINT_URL=https://api.example.com/v1
MODEL=${model.id}`}
                          </code>
                        </pre>
                        <button
                          onClick={() => handleCopy(`API_KEY=your_api_key_here\nENDPOINT_URL=https://api.example.com/v1\nMODEL=${model.id}`)}
                          className="absolute top-4 right-4 p-2 glass-hover rounded-lg"
                        >
                          <FiCopy className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                key: 'code',
                label: (
                  <span className="flex items-center gap-2">
                    <FiCode className="w-4 h-4" />
                    Code Examples
                  </span>
                ),
                children: (
                  <div className="space-y-6 py-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Basic Usage</h3>
                      <div className="relative">
                        <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto">
                          <code className="text-purple-400 text-sm font-mono">
                            {sampleCode}
                          </code>
                        </pre>
                        <button
                          onClick={() => handleCopy(sampleCode)}
                          className="absolute top-4 right-4 p-2 glass-hover rounded-lg"
                        >
                          <FiCopy className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Advanced Example</h3>
                      <p className="text-primary-300 mb-4">
                        Stream responses for real-time interaction:
                      </p>
                      <div className="relative">
                        <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto">
                          <code className="text-pink-400 text-sm font-mono">
{`async function streamResponse(message) {
  const stream = await client.chat.completions.create({
    messages: [{ role: 'user', content: message }],
    stream: true
  });
  
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }
}`}
                          </code>
                        </pre>
                        <button
                          onClick={() => handleCopy(`async function streamResponse(message) {\n  const stream = await client.chat.completions.create({\n    messages: [{ role: 'user', content: message }],\n    stream: true\n  });\n  \n  for await (const chunk of stream) {\n    process.stdout.write(chunk.choices[0]?.delta?.content || '');\n  }\n}`)}
                          className="absolute top-4 right-4 p-2 glass-hover rounded-lg"
                        >
                          <FiCopy className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </GlassCard>

        {/* Connect CTA */}
        <GlassCard className="bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 border-white/20 shadow-2xl">
          <div className="text-center py-16 px-8">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <FiZap className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Connect to AWS Bedrock MCP Server
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ready to integrate {model.name} with your Barclays workflow? Click below to connect to your AWS Bedrock MCP server endpoint.
            </p>
            <Button
              size="lg"
              icon={FiExternalLink}
              iconPosition="right"
              className="shadow-2xl"
              onClick={() => setConnectModalOpen(true)}
            >
              Connect to MCP Server
            </Button>
          </div>
        </GlassCard>

        {/* Connect Modal */}
        <Modal
          title={<span className="text-white text-2xl font-bold">Connect to MCP Server</span>}
          open={connectModalOpen}
          onCancel={() => setConnectModalOpen(false)}
          footer={null}
          width={600}
        >
          <div className="py-6">
            <p className="text-primary-300 mb-6">
              Enter your MCP server endpoint URL to establish the connection between {model.name} and your tools.
            </p>
            
            <div className="mb-6">
              <label className="text-white font-semibold mb-2 block">Endpoint URL</label>
              <AntInput
                size="large"
                placeholder="https://your-mcp-server.com/endpoint"
                value={endpointUrl}
                onChange={(e) => setEndpointUrl(e.target.value)}
                prefix={<FiExternalLink className="text-primary-400" />}
              />
            </div>

            <div className="flex gap-3 justify-end">
              <Button 
                variant="ghost" 
                onClick={() => setConnectModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                icon={FiZap}
                iconPosition="right"
                onClick={handleConnect}
              >
                Connect Now
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ModelDocumentation;

