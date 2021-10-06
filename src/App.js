import './App.css';
import routes from './routes';
import { useRoutes } from 'hookrouter';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
    const routeResult = useRoutes(routes);
    return routeResult || <NotFoundPage />;
}

export default App;
