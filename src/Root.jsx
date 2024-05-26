import React from 'react';
import App from './App';
import { Outlet } from 'react-router-dom';
import Home from './Home/Home';

const Root = () => {
    return (
        <div>
            <Home/>
            <App></App>
            
            <Outlet/>
        </div>
    );
};

export default Root;