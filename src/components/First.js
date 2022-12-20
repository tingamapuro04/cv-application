import React, { Component } from "react";
import Main from './Main'
import '../styles/First.scss'

class First extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: {
        name: '',
        email: '',
        number: '',
      },     
      general: [],
    }
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this);
    this.handleNumber = this.handleNumber.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleNumber(e) {
    this.setState({
      number: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    
  }


  render() {
    return (
      <div className="first">
        <form onSubmit={ this.handleSubmit } className="first_form">
          <label htmlFor="name">Full Name</label>
          <input onChange={ this.handleName } type="text" name="name" id="" />
          <label htmlFor="email">Email</label>
          <input onChange={ this.handleEmail } type="text" name="email" id="" />
          <label htmlFor="number">Phone Number</label>
          <input onChange={ this.handleNumber } type="text" name="number" id="" />
          <button>Edit</button>
          <input type="submit" value="Enter" />
        </form>
        < Main name={this.state.name}email={this.state.email} phone_number={this.state.number} />
      </div>
    )
  }
}

export default First;
