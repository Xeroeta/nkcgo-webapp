import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import BadgeComponent from '../BadgeComponent';

// const UI_IMAGES_BASE_URL = 'https://s3.us-east-2.amazonaws.com/swiftmile-app-assets/ui-images/';
const API_BASE_URL = 'https://y86lpymaph.execute-api.us-east-2.amazonaws.com/prd/';

export default class BadgesScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      badges: []
    };
  }

  componentDidMount() {
    const { isAuthenticated } = this.props.auth;
    var auth_data = isAuthenticated();
    let userIdToken_temp = null;
    if(isAuthenticated())
    {
      this.state.userAuthenticated = isAuthenticated();
      userIdToken_temp = this.props.auth.getIdToken();
    }
    else
    {
      this.login();
    }

    fetch(API_BASE_URL+'badges', {
      method: 'GET',
      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': userIdToken_temp
                }
    })
      .then(response => response.json())
      .then((responseData) => { 
        console.log(JSON.parse(responseData.body));
        //JSON.parse(responseData.body)
        this.setState({ badges: JSON.parse(responseData.body) }); 
      });
  }

  render() {

    return (
        <BadgeComponent  badges={ this.state.badges } />
    );
  }
}
