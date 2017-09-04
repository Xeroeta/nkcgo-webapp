import React, { Component } from 'react';
import SnapComponent from '../SnapComponent';
import appConfig from '../Config/params';
const API_BASE_URL = 'https://y86lpymaph.execute-api.us-east-2.amazonaws.com/prd/';

export default class SnapScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      SnapsData: []
    };
  }
  login() {
    this.props.auth.login();
  }

  checkAuth()
  {

  }

  componentDidMount() {
    //this.props.auth.getIdToken()
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

    fetch(API_BASE_URL+'snaps', {
      method: 'GET',
      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userIdToken_temp
                }
    })
      .then(response => response.json())
      .then((responseData) => { 
        console.log(JSON.parse(responseData.body));
        //JSON.parse(responseData.body)
        this.setState({ SnapsData: JSON.parse(responseData.body) }); 
      })
      // .catch(err => (err){ console.log(err); });
      ;
  }

  render() {

    return (
        <SnapComponent  snaps={ this.state.SnapsData } />
    );
  }
}
