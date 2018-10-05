import React, { Component } from 'react'
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    }
  }

  render() {
    return (
      <form id="form-one"></form>
    )
  }
}
export default FormContainer;
