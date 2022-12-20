import React, { Component } from "react";
import uniqid from 'uniqid';
import Specs from './Specs'

class Education extends Component {
  constructor(props) {
    super(props)

    this.state = {
      school: {
        institution: '',
        field: '',
        year: '',
        id: uniqid()
      },
      edu_details: []
    }

    this.handleField = this.handleField.bind(this)
    this.handleInstitution = this.handleInstitution.bind(this)
    this.handleYear = this.handleYear.bind(this)
    this.submitForm1 = this.submitForm1.bind(this)
  }

  handleInstitution(e) {
    this.setState({
      institution: e.target.value
    })
  }

  handleField(e) {
    this.setState({
      field: e.target.value
    })
  }

  handleYear(e) {
    this.setState({
      year: e.target.value
    })
  }

  submitForm1(e) {
    e.preventDefault()
    const new_details = {...this.state.school}
    new_details.institution = this.state.institution
    new_details.field = this.state.field
    new_details.year = this.state.year
    new_details.id = uniqid()
    const new_specs = [...this.state.edu_details]
    new_specs.push(new_details)
    this.setState({
      edu_details: new_specs
    })
  }


  render() {
    return (
      <div className="education">
        <form onSubmit={this.submitForm1} >
          <label htmlFor="institution">Institution Name</label>
          <input onChange={this.handleInstitution} type="text" name="institution" id="" />
          <label htmlFor="Field">Field Of Study</label>
          <input onChange={this.handleField} type="text" name="Field" id="" />
          <label htmlFor="year">Year Of Completion</label>
          <input onChange={this.handleYear} type="text" name="" id="" />
          <input type="submit" value="Add Education" />
        </form>
        < Specs list={ this.state.edu_details } />
      </div>
    )
  }
}

export default Education
