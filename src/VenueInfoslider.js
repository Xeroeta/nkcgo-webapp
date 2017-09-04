import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import { Button } from 'react-bootstrap';


export default class VenueInfoslider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      VenuesData: props.VenuesData,
      currentVenueKey: props.currentVenueKey,
      startSlide: 0
    };
    console.log('initial Props');
    console.log(props.VenuesData);

    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  val2key(val, markers_array){
    for (var key in markers_array) {
      let array_val = markers_array[key];
      if(array_val.venueId === val){
          return key;
          break;
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps.VenuesData');
    console.log(nextProps.VenuesData);
    this.setState({ VenuesData: nextProps.VenuesData });
    let currentVenueSliderIndex = this.val2key(this.state.currentVenueKey, nextProps.VenuesData);
    this.setState({ startSlide: currentVenueSliderIndex });
    
  }

  goTo(route) {
    // alert(route);
    this.props.history.replace(`/${route}`)
  }

  render() {

    return (
        <ReactSwipe swipeOptions={{continuous: false, startSlide: this.state.startSlide}}>
        {
          this.state.VenuesData.map(venue => (
            <div 
              key={venue.venueID}
            >
              <div
                
                >
                <p >{venue.title}</p>
                <p >{venue.description}</p>
                <img
                  alt=""
                  style={{
                    height:200,
                    width:200
                  }}
                  src={venue.markerImage}
                  />

              </div>

              <div
                
              >
                
              </div>
              <div
                
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