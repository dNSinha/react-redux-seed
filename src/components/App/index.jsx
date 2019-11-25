import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from 'Components/App/routes';
import Loader from 'Components/loader';


export class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Suspense fallback={<Loader />}>
                        <Routes />
                    </Suspense>
                </Router>
            </div>
        );
    }
}

export default App;
