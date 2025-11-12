import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiZap, FiExternalLink } from 'react-icons/fi';
import { GlassCard, Button, Badge, Loader, SkeletonCard } from '../components/ui';
import sourcesData from '../data/sources.json';
import { getIcon } from '../utils/iconMap';

export const ToolDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundSource = sourcesData.find((s) => s.id === id);
      setSource(foundSource);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleConnectNow = () => {
    navigate('/integrations', { state: { from: id } });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Loader fullScreen tip="Loading tools..." />
        </div>
      </div>
    );
  }

  if (!source) {
    return (
      <div className="min-h-screen bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <GlassCard className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
              <FiExternalLink className="w-12 h-12 text-primary-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Tool Not Found</h2>
            <p className="text-primary-300 mb-8">
              The tool you're looking for doesn't exist or has been removed.
            </p>
            <Button icon={FiArrowLeft} onClick={() => navigate('/sources')}>
              Back to Sources
            </Button>
          </GlassCard>
        </div>
      </div>
    );
  }

  const Icon = getIcon(source.icon);

  return (
    <div className="min-h-screen bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8 animate-fade-in">
          <Button
            variant="ghost"
            size="sm"
            icon={FiArrowLeft}
            onClick={() => navigate('/sources')}
          >
            Back to Sources
          </Button>
        </div>

        {/* Source Header */}
        <div className="mb-12 animate-slide-up">
          <GlassCard hover className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl">
                <Icon className="w-12 h-12 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-4xl font-bold mb-3">
                      <span className="text-gradient">{source.name}</span>
                    </h1>
                    <p className="text-lg text-primary-300 leading-relaxed mb-4">
                      {source.description}
                    </p>
                  </div>
                  <Badge variant="info" className="text-sm px-4 py-2 self-start shadow-lg">
                    {source.toolsCount} Tools Available
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default" className="shadow-sm">{source.type}</Badge>
                  <Badge variant="default" className="shadow-sm">{source.provider}</Badge>
                  <Badge variant="success" className="shadow-sm">{source.status}</Badge>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Tools Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Available Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {source.tools.map((tool, index) => (
              <GlassCard
                key={tool.id}
                hover
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <FiZap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-primary-300">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Connect Now CTA */}
        <GlassCard className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 border-white/20 shadow-2xl">
          <div className="text-center py-16 px-8">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <FiZap className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Connect {source.name}?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect {source.name} to AWS Bedrock models and start automating your Barclays workflows with intelligent AI agents.
            </p>
            <Button
              size="lg"
              icon={FiZap}
              iconPosition="right"
              className="shadow-2xl"
              onClick={handleConnectNow}
            >
              Connect Now
            </Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default ToolDetail;

