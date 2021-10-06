import React from 'react';
import StartPage from './pages/StartPage/StartPage';
import Settings from './pages/SettingsPage/Settings';

const routes = {
  '/': () => <StartPage />,
  '/settings': () => <Settings />,
};

export default routes;
