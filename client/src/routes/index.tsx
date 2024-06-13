import {useRoutes} from 'react-router-dom';
import App from '../App.tsx'
function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <App />,
        }, 
    ])
    return routes;    
}

export default Routes