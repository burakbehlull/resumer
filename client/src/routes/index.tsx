import { useRoutes } from 'react-router-dom';
import App from '../App.tsx'
import { Profile } from '@profile';

function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <App />,
        },
        {
            path: '/profile/:username',
            element: <Profile />,
        }
    ])
    return routes;    
}

export default Routes