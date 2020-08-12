import React,{Component} from 'react';

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'Developer Funnel',
            keyword:'User Text Here'
        }
    }
    render(){
        return(
            <React.Fragment>
                <div>{this.state.title}</div>
                <center>
                    <input/>
                    <p>{this.state.keyword}</p>
                </center>
                <hr/>
            </React.Fragment>
        )
    }
}


export default Header;


/*
const Header = () => {
    return(
        <React.Fragment>
            <center>
                <h2>NareshIT</h2>
            </center>
            <hr/>
        </React.Fragment>
    )
}
*/