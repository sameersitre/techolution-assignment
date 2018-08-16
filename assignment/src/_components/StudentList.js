import React, { Component } from 'react';
import '../_styles/StudentList.css';
import Card from './Card';
import Students from '../temporary.json';
class StudentList extends Component {
  constructor(props) {
    var id = 0;
    super(props);
    this.state = {
      item: '',
      tasks: ['Learn Reactjs', 'Learn to add animations from external libraries grhgur in reactjs'],
      buttondisabled: 'true',
      studentlist: [Students],
    }
  }

  render() {
    
    return (
      <div>

        <div className="todocontainer">
          {this.state.tasks.map(
            (taskname, i) =>
              (<Card key={i} tasks={i+'. '+taskname} />))}
        </div>
      </div>
    );
  }
}



export default StudentList;
