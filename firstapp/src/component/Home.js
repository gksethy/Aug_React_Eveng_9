import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsDisplay from './NewsDisplay';
import JSON from '../db.json';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON
        }
    }

    render(){
        return (
            <React.Fragment>
                <Header/>
                <NewsDisplay newsdata={this.state.news}/>
                <Footer year="2020-2021"/>
            </React.Fragment>
        )
    }
    
}

export default Home;