import React, { Component } from 'react';
import '../_styles/NavBar.css';
import StudentList from './StudentList.js';
import AdmissionForm from './AdmissionForm.js';
import { HashRouter, NavLink, Route } from 'react-router-dom';

class NavBar extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <HashRouter>

                    <div  >
                        <ul className='leftposition' >
                            <li ><NavLink to="/">Home</NavLink></li>
                            <li ><NavLink to="/studentlist">Student List</NavLink></li>
                            <li ><NavLink to="/addstudent"> Add Student</NavLink></li>
                        </ul>
                        <div >
                            <Route path="/studentlist" component={StudentList} />
                            <Route path="/addstudent" component={AdmissionForm} />

                        </div>


                    </div>
                </HashRouter>
            </div>
        );
    }
}
export default NavBar;