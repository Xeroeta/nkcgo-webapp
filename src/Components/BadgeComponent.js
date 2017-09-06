import React, { Component } from 'react';

export default class BadgeComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      badges: props.badges
    };
    console.log('initial Props');
    console.log(props.badges);
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps.VenuesData');
    console.log(nextProps.badges);
    this.setState({ badges: nextProps.badges });
  }

  goTo(route) {
    // alert(route);
    this.props.history.replace(`/${route}`)
  }

  render() {

    return (
        <div>
        {
          this.state.badges.map((mybadge) => (
            <div
              style={styles.badgeInfo}
              key={mybadge.key}
            >
              <center>
                <img style={styles.imageBadge}
                  alt=""
                  src={mybadge.image}
                />
                <p style={styles.badgeTitle}>{mybadge.badgeName}{'\n\n'}</p>
              </center>
            </div>
          ))
      }
      </div>
    );
  }
}

const styles = {
  imageBadge: {
    width: screen.width/3,
    height: screen.width/3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeTitle: {
    fontSize: 20
  },
  badgeInfo: {
    marginBottom: 10
  }
};
