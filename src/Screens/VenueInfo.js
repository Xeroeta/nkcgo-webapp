import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import { Button } from 'react-bootstrap';
import { poiClusters } from '../Config/sampleMapClusters';
const POIClustersData = poiClusters;
const VenuesData = parseMarkers();
const UI_IMAGES_BASE_URL = 'https://s3.us-east-2.amazonaws.com/swiftmile-app-assets/ui-images/';
const API_BASE_URL = 'https://y86lpymaph.execute-api.us-east-2.amazonaws.com/prd/';

function parseMarkers()
  {
    let markers = [];
    for (var i = POIClustersData.length - 1; i >= 0; i--) {
      for (var j = POIClustersData[i].pois.length - 1; j >= 0; j--) {
        markers.push(POIClustersData[i].pois[j]);
      }
    }
    return markers;
  }

  function parseInputMarkers(markerClustersData)
  {
    let markers = [];
    for (var i = markerClustersData.length - 1; i >= 0; i--) {
      for (var j = markerClustersData[i].pois.length - 1; j >= 0; j--) {
        markers.push(markerClustersData[i].pois[j]);
      }
    }
    return markers;
  }

  function val2key(val,array){
    for (var key in array) {
      let this_val = array[key];
      if(this_val == val.venueID){
          return key;
          break;
      }
    }
  }

  function indexToVenueKey(index, array)
  {
    return array[index].venueID;
  }

// const Slider = require('react-slick');
export default class VenueInfo extends Component {

  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0', current_latitude:0, current_longitude:0, VenuesData:[] };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    // this.state.VenuesData = [];
    // console.log(VenuesData);
    // this.state.current_latitude = null;
    // this.state.current_longitude = null;
  }

  goTo(route) {
    // alert(route);
    this.props.history.replace(`/${route}`)
  }
  componentWillReceiveProps(VenuesData) {
    this.setState({ VenuesData: VenuesData });  
  }
  componentWillMount() {
    // this.setState({ VenuesData: [] });  
  }

  componentDidMount() {
    fetch(API_BASE_URL+'venues')
      .then(response => response.json())
      .then((responseData) => { 
        console.log(JSON.parse(responseData.body));
        this.setState({ VenuesData: JSON.parse(responseData.body) }); 
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
        <ReactSwipe className="carousel" swipeOptions={{continuous: false, startSlide: 2}}>
        {
          this.state.VenuesData.map(venue => (
            <div style={styles.slide1}
              key={venue.venueID}
            >
              <div
                style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                <p style={styles.text}>{venue.title}</p>
                <p style={styles.text2}>{venue.description}</p>
                <img
                  style={{
                    height:200,
                    width:200
                  }}
                  src={venue.markerImage}
                  />

              </div>

              <div
                style={{ justifyContent: 'center' }}
              >
                
              </div>
              <div
                style={{ justifyContent: 'center' }}
              >
                <div className="row">
                  <div className="center-block">
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'venue')}
                    >
                      CheckIn here
                    </Button>
                  </div>
                </div>
                <div className="row">
                  <div className="center-block">
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'venue')}
                    >
                      Get directions to this venue
                    </Button>
                  </div>
                </div>
              </div>
            
            </div>
          ))}
        </ReactSwipe>
    );
  }
}

const style = {
  width: '100%',
  height: '100%',
  margin: '0px'
};
const venueSlideStyle = {
  width: '100%',
  height: '100%',
  margin: '0px'
};
const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  image:{
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text2: {
    color: '#0cf',
    fontSize: 24,
    fontWeight: 'bold',
  }
};