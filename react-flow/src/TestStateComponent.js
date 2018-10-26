import React, { Component } from 'react';

type Props = {
  initial: number,
}

type State = {
  price: number,
}

class TestStateComponent extends Component<Props, State> {
  static defaultProps = {
    initial: 2,
  }
  
  state = {
    price: this.props.initial,
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(
        prevState => ({
        price: prevState.price + 1,
        })
      )
    }, 1000);
  }

  render() {
    return (
        <div>
          <h3>Price: {this.state.price}€</h3>
        </div>
    )
  }
}

export default TestStateComponent;
