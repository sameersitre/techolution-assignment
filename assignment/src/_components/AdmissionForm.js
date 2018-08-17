import React, { Component } from 'react';
import '../_styles/AdmissionForm.css'

class AdmissionForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            submitdisabled:'false',
            suggestions: '*Please enter all the fields.',

        }
    }

    handleOnChange(event) {
        this.setState({ name: event.target.value });
    }

    formValidator(){


    }
    render() {
        return (
            <div className="newusercontainer">
                <h2 className='heading'>Student Admission Form</h2>
                <table>
                    <tr> <td>Student Name:</td> <td><input id='input' type='text' placeholder="Name" value={this.state.anything} onChange={this.handleOnChange.bind(this)} /></td></tr>
                    <br /> 
                    <tr> <td>Last Name:</td><td><input id='input'  placeholder="Sur Name" value={this.state.anything} onChange={this.handleOnChange.bind(this)} /></td></tr>
                    <br /> 
                    <tr> <td>Class:</td><td><input id='input' placeholder="Class" value={this.state.anything} onChange={this.handleOnChange.bind(this)} /></td></tr>
                    <br /> 
                    <tr> <td>Year of Passing:</td><td><input id='input' placeholder="Passing Year" value={this.state.anything} onChange={this.handleOnChange.bind(this)} /></td></tr>
                    <br /> 
                    <tr> <td>Percentages:</td><td><input id='input' type='number' placeholder="Percentage of Marks" value={this.state.anything} onChange={this.handleOnChange.bind(this)} /></td></tr>
                </table>
                <br/>
               <h4>{this.state.suggestions}</h4> 
<button className='submitbutton' disabled={this.state.submitdisabled == "false"}>SUBMIT</button>
            </div>

        );
    }
}
export default AdmissionForm;