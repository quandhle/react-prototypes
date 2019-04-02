import React from 'react';
import Welcome from './welcome';
import Route from 'react-router-dom';

export default () => {
    return (
        <div className="container">
            <h1>Home Page</h1>
            <Route path="/" component={Welcome}></Route>
        </div>
    )
}