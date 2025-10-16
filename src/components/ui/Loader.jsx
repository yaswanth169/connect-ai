import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const Loader = ({ size = 'large', tip = 'Loading...', fullScreen = false }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: size === 'large' ? 48 : 24, color: '#ffffff' }} spin />;

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-[#0d0d0d] flex items-center justify-center z-50">
        <div className="text-center">
          <Spin indicator={antIcon} />
          <p className="mt-6 text-white text-lg font-medium">{tip}</p>
          <div className="mt-4 flex gap-2 justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      <Spin indicator={antIcon} tip={<span className="text-white ml-3">{tip}</span>} />
    </div>
  );
};

export const SkeletonCard = () => {
  return (
    <div className="glass rounded-2xl p-6 animate-pulse">
      <div className="h-4 bg-white/10 rounded w-3/4 mb-4"></div>
      <div className="h-3 bg-white/10 rounded w-1/2 mb-2"></div>
      <div className="h-3 bg-white/10 rounded w-2/3"></div>
    </div>
  );
};

export default Loader;

