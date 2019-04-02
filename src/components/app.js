import React from 'react';
import {Route} from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import Macarons from './our_macarons';
import GiftsParties from './gifts_parties';
import Contact from './contact';

export default () => {
    return (
        <div className="container">
            <Nav/>
            <Route exact path="/" component={Welcome}></Route>
            <Route path="/our-macarons" component={Macarons}></Route>
            <Route path="/gifts_parties" component={GiftsParties}></Route>
            <Route path="/contact" component={Contact}></Route>
        </div>
    )
}