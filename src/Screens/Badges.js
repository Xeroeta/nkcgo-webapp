import React from 'react';
const API_BASE_URL = 'https://y86lpymaph.execute-api.us-east-2.amazonaws.com/prd/';

export default class Badges extends React.Component {

  constructor(props) {
    super(props);
    // this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    // this.state.mybadges = null;
  }

  componentWillMount() {

    }

  componentDidMount() {
    const { getIdToken } = this.props.auth;
    console.log('isAuthenticated');
    let userIdToken_temp = getIdToken();
    console.log(userIdToken_temp);
    fetch(API_BASE_URL+'badges',{
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
        this.setState({ mybadges: JSON.parse(responseData.body) }); 
      });

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
      {
        !this.state.mybadges ?
        <p>Loading your badges please wait</p>
        :
        <div>
          this.state.mybadges.map((mybadge) => (
            <div
              key={mybadge.key}
            >
              <img
                alt=""
                src={mybadge.image}
              />
              <p>{mybadge.badgeName}</p>
            </div>
          ))
        </div>
      }
      </div>

      );
  }
}
