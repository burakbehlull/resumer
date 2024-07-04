import { useRoutes } from 'react-router-dom';
import App from '../App.tsx'
import { Profile, CreateProfile } from '@profile';
import Draggable from '~/pages/Draggable.tsx';

function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <App />,
        },
        {
            path: '/profile/create',
            element: <CreateProfile />
        },
        {
            path: '/profile/:username',
            element: <Profile />,
        },
        {
            path: 'test',
            element: <Draggable />
        }
    ])
    return routes;    
}

export default Routes