import React, { Component } from 'react';
import '../_styles/StudentList.css';
import Card from './Card';
import Students from '../temporary.json';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['Learn Reactjs', 'Learn to add animations from external libraries grhgur in reactjs'],
    }
  }

  render() {

    return (
      <div>

        <div className="todocontainer">
          {Students.map((taskname, i) => (
            <Card key={i} profile={taskname} />
          ))}
        </div>
      </div>
    );
  }
}



export default StudentList;
