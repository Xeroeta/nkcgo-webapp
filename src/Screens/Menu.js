import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Menu extends Component {
  goTo(route) {
    // alert(route);
    this.props.history.replace(`/${route}`)
  }

  componentWillMount() {
    // console.log('Menu Page Id token');
    // console.log(this.props.auth.getIdToken());
  }
  
  render() {
    return (
      <div className="container">
        {
          <div className="row">
            <div className="center-block">
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'schedule')}
              >
                Schedule
              </Button>
            </div>
          </div>
        }
        {
          <div className="row">
            <div className="center-block">
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'map')}
              >
                Map
              </Button>
            </div>
          </div>
        }
        {
          <div className="row">
            <div className="center-block">
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'venue')}
              >
                VenueInfo
              </Button>
            </div>
          </div>

        }
        {
          <div className="row">
            <div className="center-block">
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'badges')}
              >
                Badges
              </Button>
            </div>
          </div>
        }
        {
          <div className="row">
            <div className="center-block">
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'snaps')}
              >
                Snaps
              </Button>
            </div>
          </div>
        }
      </div>

    );
  }
}

export default Menu;
