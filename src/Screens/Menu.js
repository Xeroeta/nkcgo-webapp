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
            src={UI_IMAGES_BASE_URL + "AppLoadingSplashPagePintPathLogo.png"}
          />
        </div>
        <div className="row" >
          <a
            style={ styles.btn }
            onClick={this.goTo.bind(this, 'schedule')}
            >
            <img
              style={ styles.btn }
              src={UI_IMAGES_BASE_URL+"MainMenu-ScheduleButton.png"}
            />
          </a>        
        </div>
        <div className="row" >
          <a
            onClick={this.goTo.bind(this, 'map')}
            style={ styles.btn }
            >
            <img
              style={ styles.btn }
              src={UI_IMAGES_BASE_URL+"MainMenu-MapButton.png"}
            />
          </a>
        </div>
        <div className="row" >
          <a
            onClick={this.goTo.bind(this, 'venue')}
            style={ styles.btn }
            >
            <img
              style={ styles.btn }
              src={UI_IMAGES_BASE_URL+"MainMenu-VenueButton.png"}
            />
          </a>
        </div>
        <div className="row" >
          <a
            onClick={this.goTo.bind(this, 'badges')}
            style={ styles.btn }
            >
            <img
              style={ styles.btn }
              src={UI_IMAGES_BASE_URL+"MainMenu-BadgesButton.png"}
            />
          </a>
        </div>
        <div className="row" >
          <a
            style={ styles.btn }
            onClick={this.goTo.bind(this, 'snaps')}
            >
            <img
              style={ styles.btn }
              src={UI_IMAGES_BASE_URL+"MainMenu-MySnapsRepositoryButton.png"}
            />
          </a>
        </div>
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
