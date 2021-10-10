import React from 'react';
import StartPage from './pages/StartPage/StartPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import BuildHistoryPage from './pages/BuildHistoryPage/BuildHistoryPage';
import { store } from './store';

const settings = store.getState().settings.settings;

const routes = {
  '/': () => settings ? <BuildHistoryPage /> : <StartPage />,
  '/settings': () => <SettingsPage />,
  '/build': () => <BuildHistoryPage />
};

export default routes;
