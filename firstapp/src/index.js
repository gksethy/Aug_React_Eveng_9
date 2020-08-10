import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <h1>Say Hi To React</h1>
            <h2>By NareshIT</h2>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))