import React from 'react';
import logo from '../logo.svg';

const Page1 = ({ onRouteChange })=> {
    return (
        <React.Fragment>
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                </header>
                
                <button className="disabled-button">Page 1</button>
                <button onClick={() => onRouteChange("page2")}>Page 2</button>
                <button onClick={() => onRouteChange("page3")}>Page 3</button>

                <h1>Page 1</h1>
            </div>
        </React.Fragment>
    )
}

export default Page1;