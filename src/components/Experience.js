import React, { Component } from "react";
import uniqid from 'uniqid';
import Mimi from './company'

class Experience extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Company: {
        company: '',
        position: '',
        duration: '',
        id: uniqid()
      },
      your_details: []
    }

    this.handleCompany = this.handleCompany.bind(this)
    this.handlePosition = this.handlePosition.bind(this)
    this.handleDuration = this.handleDuration.bind(this)
    this.submitForm2 = this.submitForm2.bind(this)


  }

  handleCompany(e) {
    this.setState({
      company: e.target.value
    })
  }

  handlePosition(e) {
    this.setState({
      position: e.target.value
    })
  }

  handleDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  submitForm2(e) {
    e.preventDefault()
    const new_details = {...this.state.Company}
    new_details.company = this.state.company
    new_details.position = this.state.position
    new_details.duration = this.state.duration
    new_details.id = uniqid()
    const new_specs = [...this.state.your_details]
    new_specs.push(new_details)
    this.setState({
      your_details: new_specs
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitForm2} >
          <label htmlFor="company">Company</label>
          <input onChange={this.handleCompany} type="text" name="company" id="" />
          <label htmlFor="position">Position</label>
          <input onChange={this.handlePosition} type="text" name="position" id="" />
          <label htmlFor="duration">Duration</label>
          <input onChange={this.handleDuration} type="text" name="duration" id="" />
          <input type="submit" value="Add Experience" />
        </form>
        < Mimi list={this.state.your_details} />
      </div>
    )
  }
}

export default Experience;
