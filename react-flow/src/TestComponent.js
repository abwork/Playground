import React, { Component } from 'react';

type Props = {
  name: string,
  quantity?: number,
};

class TestComponent extends Component<Props> {

  render() {
    return (
        <div>
            <h3>Name: {this.props.name}</h3>
            <h3>Quantity: {this.props.quantity}</h3>
        </div>
    )
  }
}

export default TestComponent;
