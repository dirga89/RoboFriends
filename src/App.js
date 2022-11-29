import React, { Component } from 'react';
import Header from './Header';
import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';

class App extends Component
{
    constructor() 
    {
        super();
        this.state = 
        {
            robots: [],
            searchfield: ''
        }
    }
    
    componentDidMount() 
    {
        document.title = "RoboFriends";

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
        
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
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </>
        );
    }

}


export default App;