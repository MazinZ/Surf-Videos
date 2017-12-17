import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

export default class Searchbar extends Component {

  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  submit = () => {
    this.setState({ search: this.search.value })
  }

  render() {
    if (this.state.search) {
      this.forceUpdate()
      return (
        <Redirect to={ '/search/' + this.state.search}/>
      )
    }
    return (
      <FormGroup>
        <InputGroup>
          <FormControl inputRef={ref => {this.search = ref}} type="text" />
          <InputGroup.Button>
            <Button onClick={this.submit} type="submit">Search</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    )
  }
}