import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import VenueInfoslider from '../VenueInfoslider';
// import { poiClusters } from '../Config/sampleMapClusters';
// const POIClustersData = poiClusters;
// const VenuesData = parseMarkers();

// const UI_IMAGES_BASE_URL = 'https://s3.us-east-2.amazonaws.com/swiftmile-app-assets/ui-images/';
const API_BASE_URL = 'https://y86lpymaph.execute-api.us-east-2.amazonaws.com/prd/';

  // function parseMarkers(inputMarkers)
  // {
  //   let markers = [];
  //   for (var i = POIClustersData.length - 1; i >= 0; i--) {
  //     for (var j = POIClustersData[i].pois.length - 1; j >= 0; j--) {
  //       markers.push(POIClustersData[i].pois[j]);
  //     }
  //   }
  //   return markers;
  // }
  // function val2key(val, markers_array){
  //   for (var key in markers_array) {
  //     let array_val = markers_array[key];
  //     if(array_val.venueId == val){
  //         return key;
  //         break;
  //     }
  //   }
  // }
export default class VenueScreen extends Component {

  constructor(props) {
    super(props);
    
    console.log('Venue props ------');
    console.log(props);
    let venue_param = props.location.state;
    if(venue_param!==undefined && venue_param.venue_key!==undefined)
    {
      this.state = {
        VenuesData: [],
        currentVenueKey: venue_param.venue_key
      };
    }
    else
    {
      this.state = {
        VenuesData: [],
        currentVenueKey: 0
      };
    }
  }

  // constructor(props) {
  //   super(props);
  //   this.state = { width: '0', height: '0', current_latitude:0, current_longitude:0, VenuesData:[] };
  // }

  componentDidMount() {
    fetch(API_BASE_URL+'venues')
      .then(response => response.json())
      .then((responseData) => { 
        console.log(JSON.parse(responseData.body));
        //JSON.parse(responseData.body)
        this.setState({ VenuesData: JSON.parse(responseData.body) }); 
      });
  }

  render() {

    return (
        <VenueInfoslider  currentVenueKey={ this.state.currentVenueKey } VenuesData={ this.state.VenuesData } />
    );
  }
}
