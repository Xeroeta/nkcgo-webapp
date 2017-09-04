import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class Snaps extends Component {

  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.state.userAuthenticated = false;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    const { isAuthenticated } = this.props.auth;
    var auth_data = isAuthenticated();
    alert(auth_data);
    if(isAuthenticated())
    {
      alert('User authenticated');
      this.state.userAuthenticated = isAuthenticated();
    }
    else
    {
      alert('User not authenticated');
      this.login();

    }
  }
  login() {
    this.props.auth.login();
  }
  componentWillMount() {

  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div>
        <img style={style} src="https://s3.us-east-2.amazonaws.com/swiftmile-app-assets/ui-images/Schedule.png" />
      </div>

      );
  }
}

const style = {
  width: '100%',
  height: '100%',
  margin: '0px'
}