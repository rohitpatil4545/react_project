import React, { Component } from 'react';
import Button from '@mui/material/Button'; // Correct Button import
import './App.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 }); 
  };

  render() {
    const { count } = this.state;
    return (
      <div className="App1">
        <Button
          variant="outline"
          color="primary"
          className="button"
          onClick={this.decrement} 
        >
          -
        </Button>
        <div className="count">{count}</div>
        <Button
          variant="outlined"
          color="primary"
          className="button"
          onClick={this.increment} 
        >
          +
        </Button>
      </div>
    );
  }
}

export default Counter;
