import * as React from 'react';

type State = {
  amount: number,
}

type Props = {
  amount: number
}

class TestEventHandling extends React.Component <Props, State> {
  state = {
    amount: this.props.amount,
  }

  static defaultProps = {
    amount: 1,
  }

  handleAddClick = () => {
    this.setState(prevState => ({
      amount: prevState.amount + 1,
    }));
  }

  handleRemoveClick = () => {
    this.setState(prevState => ({
      amount: prevState.amount - 1,
    }));
  }
    
    render() {
        return (
          <div>
            <h3>Amount: {this.state.amount}</h3>
            <button onClick={this.handleAddClick} >
              <h4>Increment</h4>
            </button>
            <button onClick={this.handleRemoveClick} >
              <h4>Decrement</h4>
            </button>                  
          </div>
        )
    }
}

export default TestEventHandling;
