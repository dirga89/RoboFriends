import React, { Component } from 'react';
import Header from './Header';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots';

class App extends Component
{
    constructor() 
    {
        super();
        this.state = 
        {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) =>
    {
        this.setState({ searchfield: event.target.value });
        
    }

    render() 
    {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        
        return (
            <>
                <Header />
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </>
        );
    }
}


export default App;