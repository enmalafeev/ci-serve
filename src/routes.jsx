import React from 'react';
import StartPage from './pages/StartPage/StartPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';

const routes = {
  '/': () => <StartPage />,
  '/settings': () => <SettingsPage />,
};

export default routes;
