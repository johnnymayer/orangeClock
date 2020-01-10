import React from 'react';

export default class Clocker extends React.Component {

  constructor() {
    super();
    this.state = { time: new Date()};
  }

  componentDidMount() {
    this.update = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.update);    
  }

  render() {
    const clocky = {
      color: `rgba(92, 138, 39, .5)`,
      marginLeft: `auto`,
      marginRight: `auto`,
      fontSize: `240px`,
      textShadow: `8px 8px 16px orange, 10px 10px 20px red`
    }

    const { time } = this.state;

    return (
      <div style={ clocky }>
            <h3>{ time.toLocaleDateString() }</h3>
            <h3>{ time.toLocaleTimeString() }</h3>
      </div>

    );
  }
  
}