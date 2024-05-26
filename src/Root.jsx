
import App from './App';
import { Outlet } from 'react-router-dom';

import Navbar from './Home/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <App></App>
            
            <Outlet/>
        </div>
    );
};

export default Root;