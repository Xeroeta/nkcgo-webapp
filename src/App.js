import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';

const UI_IMAGES_BASE_URL = 'https://s3.us-east-2.amazonaws.com/swiftmile-app-assets/ui-images/';
class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentWillMount() {
    this.goTo('menu');
  }
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a
              onClick={this.goTo.bind(this, 'menu')}
              >

              </a>
            </Navbar.Brand>
            <a>
              <img
                style={ styles.btnNKCGo }
                src={UI_IMAGES_BASE_URL+'NKCGoAppIcon3.png'}
                onClick={this.goTo.bind(this, 'menu')}
              />
            </a>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'menu')}
            >
              Show Menu
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const styles = {

  btnNKCGo: {
    width: 75,
    height: 50,
    //paddingTop: 30,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    backgroundColor: '#fff',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
    //flex: 1,
    //alignSelf: 'stretch',
  }
};

export default App;
