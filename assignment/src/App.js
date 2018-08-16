import React, { Component } from 'react';
import './App.css';
import StudentList from './_components/StudentList';
import NavBar from './_components/NavBar.js';
import AdmissionForm from './_components/AdmissionForm.js';
import { HashRouter, NavLink, Route } from 'react-router-dom';
class App extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li><NavLink to="/"></NavLink></li>
                        <li><NavLink to="/home"></NavLink></li>
                        <li><NavLink to="/addStudent"></NavLink></li>
                    </ul>

                    <div >
              <Route exact path="/" component={NavBar} />
              {/* <Route path="/home" component={StudentList} /> */}
              {/* <Route exact path="/addstudent" component={AdmissionForm} /> */}
              </div>
                </div>
            </HashRouter>
        
        );
    }
}
export default App;