import React from 'react';

class Lifecycles extends React.Component {
  constructor() {
    super();
    console.log('constructor!');
  }

  componentDidMount() {
    console.log('componentDidMount!');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate!');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }
  
  shouldComponentUpdate(nextProps1, nextState) {
    console.log('True = ',(1!==2).toString());
    console.log('shouldComponentUpdate!',
      nextProps1.text !== this.props.text ? 
        "Y "+ (nextProps1.text !== this.props.text).toString(): 
        "N "+ (nextProps1.text !== this.props.text).toString(),
      nextProps1);
    return nextProps1.text !== this.props.text;
  }

  render() {
    console.log('render!');
    return (
      <div className='lifecycles'>
        <h3>LIFECYCLES COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }
}

export default Lifecycles;
