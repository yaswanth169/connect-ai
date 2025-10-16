import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout';
import { Landing, Dashboard, Integrations, Sources, SourceDetail, ToolDetail, ModelDocumentation, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/sources/:id" element={<ToolDetail />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/models/:id" element={<ModelDocumentation />} />
          <Route path="/workspaces" element={<Navigate to="/dashboard" replace />} />
          <Route path="/explorer" element={<Navigate to="/dashboard" replace />} />
          <Route path="/jobs" element={<Navigate to="/dashboard" replace />} />
          <Route path="/users" element={<Navigate to="/dashboard" replace />} />
          <Route path="/logs" element={<Navigate to="/dashboard" replace />} />
          <Route path="/api" element={<Navigate to="/dashboard" replace />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

