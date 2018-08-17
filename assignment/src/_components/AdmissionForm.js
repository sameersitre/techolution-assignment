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

    handleOnChange=(param)=>(event) =>{
        this.setState({ name: event.target.value });
        

    }

    
//different callback instance is created each time the component is rendered so to avoid it, currying is used.
    render() {
        return (
            <div className="newusercontainer">
                <h2 className='heading'>Student Admission Form</h2>
                <table>
                    <tr> <td>Student Name:</td> <td><input id='input' type='text' maxLength='20' placeholder="Name" value={this.state.anything} onChange={this.handleOnChange('name')} /></td></tr>
                    <br /> 
                    <tr> <td>Last Name:</td><td><input id='input' maxLength='20' placeholder="Sur Name" value={this.state.anything} onChange={this.handleOnChange('lastname')} /></td></tr>
                    <br /> 
                    <tr> <td>Class:</td><td><input id='input' maxLength='4' placeholder="Class" value={this.state.anything} onChange={this.handleOnChange('class')} /></td></tr>
                    <br /> 
                    <tr> <td>Year of Passing:</td><td><input id='input' placeholder="Passing Year" value={this.state.anything} onChange={this.handleOnChange('year')} /></td></tr>
                    <br /> 
                    <tr> <td>Percentages:</td><td><input id='input' type='number' placeholder="Percentage of Marks" value={this.state.anything} onChange={this.handleOnChange('percent')} /></td></tr>
                </table>
                <br/>
               <h4>{this.state.suggestions}</h4> 
<button className='submitbutton' disabled={this.state.submitdisabled == "false"}>SUBMIT</button>
            </div>

        );
    }
}
export default AdmissionForm;