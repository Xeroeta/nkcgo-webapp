import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={};
    this.state.currentScreenTitle = 'NKCGo';
  }
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
    console.log('App Component this.props');
    console.log(this.props.location.pathname);
    let pathname = this.props.location.pathname;
    const browser_pathname = pathname.slice(1, pathname.length);
    var is_menu_screen = false;
    switch(browser_pathname)
    {
      case 'menu':
        this.state.currentScreenTitle = 'Menu';
        is_menu_screen = true;
      break;
      case 'schedule':
        this.state.currentScreenTitle = 'Schedule';
      break;
      case 'map':
        this.state.currentScreenTitle = 'Map';
      break;
      case 'venue':
        this.state.currentScreenTitle = 'Venue';
      break;
      case 'badges':
        this.state.currentScreenTitle = 'My Badges';
      break;
      case 'snaps':
        this.state.currentScreenTitle = 'My Snaps';
      break;
      default:
        this.state.currentScreenTitle = 'NKCGo';

    }
    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a>{this.state.currentScreenTitle}</a>
            </Navbar.Brand>
            
            {
              !is_menu_screen ?
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'menu')}
                >
                  Show Menu
                </Button>
                : <span></span>
            }
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

export default App;
