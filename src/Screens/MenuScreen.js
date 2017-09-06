import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import appConfig from '../Config/params';

const deviceWidth = window.innerWidth;
const deviceHeight = window.innerHeight;

class MenuScreen extends Component {
  goTo(route) {
    // alert(route);
    this.props.history.replace(`/${route}`)
  }

  componentWillMount() {
    
  }
  
  render() {
    return (
      <div style={styles.container} >
        <center>
          <div
            style={ styles.logoContainer }
          >
            <img
              style={ styles.logo }

              src={appConfig.app.UI_IMAGES_BASE_URL + "AppLoadingSplashPage-SwiftMile.png"}
            />

            <img
              style={ styles.logo }

              src={appConfig.app.UI_IMAGES_BASE_URL + "AppLoadingSplashPagePintPathLogo.png"}
            />
          </div>
          <div className="row">
            <a
              >
              <img
                style={ styles.btn }
                src={appConfig.app.UI_IMAGES_BASE_URL+"MainMenu-ScheduleButton.png"}
                onClick={this.goTo.bind(this, 'schedule')}
              />
            </a>
          </div>
          
          <div className="row" style={styles.divButton}>
            <a
              // onClick={this.goTo.bind(this, 'map')}
              // style={ styles.btn }
              >
              <img
                style={ styles.btn }
                src={appConfig.app.UI_IMAGES_BASE_URL+"MainMenu-MapButton.png"}
                onClick={this.goTo.bind(this, 'map')}
              />
            </a>
          </div>
          <div className="row" >
            <a
              // onClick={this.goTo.bind(this, 'venue')}
              // style={ styles.btn }
              >
              <img
                style={ styles.btn }
                src={appConfig.app.UI_IMAGES_BASE_URL+"MainMenu-VenueButton.png"}
                onClick={this.goTo.bind(this, 'venue')}
              />
            </a>
          </div>
          <div className="row" >
            <a
              // onClick={this.goTo.bind(this, 'badges')}
              // style={ styles.btn }
              >
              <img
                style={ styles.btn }
                src={appConfig.app.UI_IMAGES_BASE_URL+"MainMenu-BadgesButton.png"}
                onClick={this.goTo.bind(this, 'badges')}
              />
            </a>
          </div>
          <div className="row" >
            <a
              // style={ styles.btn }
              // onClick={this.goTo.bind(this, 'snaps')}
              >
              <img
                style={ styles.btn }
                src={appConfig.app.UI_IMAGES_BASE_URL+"MainMenu-MySnapsRepositoryButton.png"}
                onClick={this.goTo.bind(this, 'snaps')}
              />
            </a>
          </div>
        </center>
      </div>

    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 736,
    backgroundImage: 'url('+appConfig.app.UI_IMAGES_BASE_URL+'Background-MainMenu.png'+')'
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
    //paddingTop: 30,
    marginBottom: 20,
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
  },
  divButton: {

  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginBottom: 5
  },
  logo: {
    width: 150,
    height: 150,
    paddingTop: 3,
    padding: 3,
    resizeMode: 'contain',
    alignItems: 'center'
  }
};

export default MenuScreen;
