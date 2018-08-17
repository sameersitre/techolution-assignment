import React, { Component } from 'react';
import '../_styles/AdmissionForm.css'

class AdmissionForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            submitdisabled: 'false',
            suggestions: '*Please enter all the fields.',
            activeinputfield: '',
            lastnamefield:'',
            class:'',
            year:'',
            percentage:'',        }
    }
    //different callback instance is created each time the component is rendered so to avoid it, currying is used.

    handleOnChange = (param) => (event) => {
        if(param==='name'){
            this.setState({ name: event.target.value });
        }
        else if(param==='lastname'){
            this.setState({ lastnamefield: event.target.value });
        }
        else if(param==='class'){
            this.setState({ class: event.target.value });
        }
        else if(param==='year'){
            this.setState({ year: event.target.value });
        }
        else if(param==='percent'){
            this.setState({ percent: event.target.value });
        }
        

        this.validator(param)

    }
    validator=()=> {
        if ((/\d/.test(this.state.name)) ||
         (this.state.activeinputfield==='lastname'  && /\d/.test(this.state.name))){

            this.setState({ suggestions: '*Please enter valid name.' })
            this.setState({submitdisabled:'true'})
        }
       
        else {
             this.setState({ suggestions: '*Please enter all the fields.' })
             this.setState({submitdisabled:'false'})
        }

       


    }


    render() {
        return (
            <div className="newusercontainer">
                <h2 className='heading'>Student Admission Form</h2>
                <table>
                    <tr> <td>Student Name:</td> <td><input id='input' type='text' maxLength='20' placeholder="Name" value={this.state.anything} onChange={this.handleOnChange('name')} />
                    </td><h6>{this.state.suggestions}</h6>
                    </tr>
                    

                    <br />
                    <tr> <td>Last Name:</td><td><input id='input' maxLength='20' placeholder="Sur Name" value={this.state.anything} onChange={this.handleOnChange('lastname')} /></td></tr>
                    <br />
                    <tr> <td>Class:</td><td><input id='input' maxLength='4' placeholder="Class" value={this.state.anything} onChange={this.handleOnChange('class')} /></td></tr>
                    <br />
                    <tr> <td>Year of Passing:</td><td><input id='input' placeholder="Passing Year" value={this.state.anything} onChange={this.handleOnChange('year')} /></td></tr>
                    <br />
                    <tr> <td>Percentages:</td><td><input id='input' type='number' placeholder="Percentage of Marks" value={this.state.anything} onChange={this.handleOnChange('percent')} /></td></tr>
                </table>
                <br />
                <h4>{this.state.suggestions}</h4>
                <button className='submitbutton' disabled={this.state.submitdisabled === "true"}>SUBMIT</button>
            </div>

        );
    }
}
export default AdmissionForm;