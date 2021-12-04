import React from 'react';
import './App.css';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
    return (
        <div className="App">
             <Navbar>
                <Navbar.Header>
                 <Navbar.Brand>
                     VitCoAid
                </Navbar.Brand>
                </Navbar.Header>
             </Navbar>
            <header className="App-header">
                <AmplifySignOut />
                <h2>My App Content</h2>
            </header>
        </div>
    );
}

export default withAuthenticator(App);
