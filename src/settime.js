import React from 'react';
import './App.css';
export default class Time extends React.Component{
    constructor(props){
        super(props);
        this .state={date:new Date()};

    }   
    
    componentDidMount(){
        this.TimeID=setInterval(
            ()=>this.updateTime(),1000
        
        );

        }
    componentWillUnmount(){

    }
    updateTime(){
        this.setState({
            date:new Date()

        })
        
    }
    render(){
        return(
        <div>
            <h1> Welcome to React JS </h1>
            <h2>It is{this.state.date.toLocaleTimeString()}</h2>
        
            </div>
        )
        

    }
}