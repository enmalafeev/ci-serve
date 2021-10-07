import React from 'react';
import StartPage from './pages/StartPage/StartPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import BuildHistoryPage from './pages/BuildHistoryPage/BuildHistoryPage';

const routes = {
  '/': () => <StartPage />,
  '/settings': () => <SettingsPage />,
  '/build': () => <BuildHistoryPage />
};

export default routes;
