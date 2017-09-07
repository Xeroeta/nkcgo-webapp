import React, { Component } from 'react';
import appConfig from '../Config/params';

// const UI_IMAGES_BASE_URL = 'https://s3.us-east-2.amazonaws.com/swiftmile-app-assets/';

export default class SnapComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      snaps: props.snaps,
      snapsLoaded: props.snapsLoaded
    };
    console.log('initial Props');
    console.log(props.snaps);
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps.snaps');
    console.log(nextProps.snaps);
    this.setState({ snaps: nextProps.snaps });
    this.setState({ snapsLoaded: nextProps.snapsLoaded });
  }

  goTo(route) {
    // alert(route);
    this.props.history.replace(`/${route}`)
  }

  render() {

    return (
        <div>
        {
          this.state.snaps.map((snap) => (
            <center>
              <div
                key={snap.id}
              >
                {<p>------------------------------------------------------</p>}
                {<p>   </p>}
                <img
                  alt=""
                  style={{
                    height:200,
                    width:200
                  }}
                  src={appConfig.app.USER_UPLOAD_IMAGES_BASE_URL + snap.image_url}
                />
                {
                  snap.venue_title ?
                    <p style={styles.venueTitle}>{snap.venue_title}</p>
                  :
                    <p></p>
                }

                {
                  snap.reviewed ?
                    <div>Reviewed: Yes</div>
                  :
                    <div>Reviewed: No</div>
                }
                {
                  snap.createdAt ?
                    <p>Snap created at - {snap.createdAt}</p>
                  :
                    <p></p>
                }
                {<p>------------------------------------------------------</p>}
                {<p>   </p>}

              </div>
            </center>
          ))
      }
      </div>
    );
  }
}

const styles = {
  venueTitle: {
    color: '#03c',
    fontSize: 20,
    fontWeight: 'bold',
  }
};
