import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider, theme } from 'antd';
import App from './App';
import './index.css';
import 'antd/dist/reset.css';

const antdTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#ffffff',
    colorBgContainer: '#1a1a1a',
    colorBgElevated: '#262626',
    colorBorder: 'rgba(255, 255, 255, 0.1)',
    colorText: '#ffffff',
    colorTextSecondary: '#a3a3a3',
    borderRadius: 12,
    fontSize: 14,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
  },
  components: {
    Modal: {
      contentBg: '#1a1a1a',
      headerBg: '#1a1a1a',
    },
    Form: {
      labelColor: '#ffffff',
    },
    Input: {
      colorBgContainer: 'rgba(255, 255, 255, 0.05)',
      colorBorder: 'rgba(255, 255, 255, 0.1)',
    },
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={antdTheme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);

