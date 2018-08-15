import React, { Component } from 'react';
import './App.css';
class App extends Component {

    constructor() {
        super();
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div  >
                <ul className='leftposition' >
                    <li className="list1"><a href="#home">Home</a></li>
                    <li className="list1"><a href="#newstudent">Add Student</a></li>
                    <li className="list1"><a href="#about">About</a></li>
                </ul>


            </div>
        );
    }
}
export default App;