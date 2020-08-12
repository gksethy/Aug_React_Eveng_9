import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <h1>Say Hi To React</h1>
            <h2>By NareshIT</h2>
            <Footer year="2020-2021"/>
        </React.Fragment>
    )
}

export default Home;