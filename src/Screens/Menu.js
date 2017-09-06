import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const deviceWidth = window.innerWidth;
const deviceHeight = window.innerHeight;

const UI_IMAGES_BASE_URL = 'https://s3.us-east-2.amazonaws.com/swiftmile-app-assets/ui-images/';
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
      <div style={styles.container} >
        <div
          style={ styles.logoContainer }
        >
          <img
            style={ styles.logo }
            src={UI_IMAGES_BASE_URL + "AppLoadingSplashPage-SwiftMile.png"}
          />

          <img
            style={ styles.logo }
            source={UI_IMAGES_BASE_URL + "AppLoadingSplashPagePintPathLogo.png"}
          />
        </div>
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

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  image: {
    width: deviceWidth,
    height: deviceHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: 200,
    height: 50,
    paddingTop: 30,
    marginBottom: 30,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    backgroundColor: '#fff'
    //flex: 1,
    //alignSelf: 'stretch',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 40
  },
  logo: {
    width: 100,
    height: 100,
    paddingTop: 10,
    padding: 10,
    resizeMode: 'contain',
    alignItems: 'center'
  }
};

export default Menu;
