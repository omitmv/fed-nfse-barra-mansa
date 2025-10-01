import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { Layout } from './components/shared';
import { Home } from './features/Home';
import { Login } from './features/Login';
import { Dashboard } from './features/Dashboard';
import {
  UserConfig,
  SystemConfig,
  SecurityConfig,
} from './features/Configuration';
import { Reports } from './features/Reports';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/config/user" element={<UserConfig />} />
            <Route path="/config/system" element={<SystemConfig />} />
            <Route path="/config/security" element={<SecurityConfig />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
