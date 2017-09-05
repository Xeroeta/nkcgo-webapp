import React from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
const API_BASE_URL = 'https://y86lpymaph.execute-api.us-east-2.amazonaws.com/prd/';

//goBack()
export default class CameraScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.state.currentVenueKey = null;

    let venue_param = props.location.state;
    if(venue_param!==undefined && venue_param.venue_key!==undefined)
    {
      const currentVenueKey = venue_param.venue_key;
      this.state = {
        currentVenueKey: venue_param.venue_key
      };
    }
  }

  login() {
    this.props.auth.login();
  }

  componentWillMount() {

  }

  componentDidMount() {
    const { isAuthenticated } = this.props.auth;
    const { getIdToken } = this.props.auth;
    var auth_data = isAuthenticated();
    let userIdToken_temp = getIdToken();
    if(isAuthenticated())
    {
      this.state.userAuthenticated = isAuthenticated();
      userIdToken_temp = this.props.auth.getIdToken();
    }
    else
    {
      this.login();
    }

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    var bb = new Blob([ab]);
    return bb;
  }

  uploadImage(imageSrc)
  {

    const { isAuthenticated } = this.props.auth;
    const { getIdToken } = this.props.auth;
    var auth_data = isAuthenticated();
    let userIdToken_temp = getIdToken();
    if(isAuthenticated())
    {
      this.state.userAuthenticated = isAuthenticated();
      userIdToken_temp = this.props.auth.getIdToken();
    }
    else
    {
      this.login();
    }

    fetch(API_BASE_URL+'snaps_s3_signed_url',{
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
        return JSON.parse(responseData.body);
        //JSON.parse(responseData.body)
        // this.setState({ mybadges: JSON.parse(responseData.body) }); 

      }).then((signedUrlData) => {
        //Upload to S3 and save data in DB
        let bb_imageSrc =  this.dataURItoBlob(imageSrc);
        axios.put(signedUrlData.url, bb_imageSrc, {'ContentEncoding': 'base64', 'Content-Type':'image/jpeg'}).catch((err) => { 
              console.log(err);
            });
        //Save to DynamoDB
        fetch(API_BASE_URL+'snaps',{
            method: 'POST',
            headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer ' + userIdToken_temp
                      },
            body: JSON.stringify({
                    image_url: signedUrlData.filename,
                    venue: this.state.currentVenueKey
                  })
          })
          .then(response => response.json())
          .then((responseData) => { 
            console.log(JSON.parse(responseData.body));
            // return JSON.parse(responseData.body);
          });
      })
      .catch((err) => { 
              console.log(err);
            });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log('imageSrc');
    console.log(imageSrc);
    this.uploadImage(imageSrc);
  };
  
  render() {
    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
    );
  }
}
