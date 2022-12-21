import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
        <p className="full_name"> {this.props.name} </p>
        <p className="email"> {this.props.email} </p>
        <p className="phone_number"> {this.props.phone_number} </p>
      </div>
    )
  }
}

export default Main;