import React, { Component } from "react";
import '../styles/First.scss'

class First extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="first">
        <form className="first_form">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="" />
          <label htmlFor="number">Phone Number</label>
          <input type="text" name="number" id="" />
          <button>Edit</button>
          <input type="submit" value="Enter" />
        </form>
      </div>
    )
  }
}

export default First;
