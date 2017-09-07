import React, { Component } from 'react';

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');
const EmailIcon = generateShareIcon('email');

const shareUrl = 'http://nkcgo.com';
const title = 'NKCGo - My Badge';

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


              <div className="Nkcgo_social-network">
                <center>
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Nkcgo_social-network__share-button">
                    <FacebookIcon
                      size={32}
                      round />
                  </FacebookShareButton>

                  <FacebookShareCount
                    url={shareUrl}
                    className="Nkcgo_social-network__share-count">
                    {count => count}
                  </FacebookShareCount>

                  <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className="Nkcgo_social-network__share-button">
                    <TwitterIcon
                      size={32}
                      round />
                  </TwitterShareButton>

                  <div className="Nkcgo_social-network__share-count">
                    &nbsp;
                  </div>
                </center>
              </div>




            </div>
          ))
      }
      </div>
    );
  }
}

const styles = {
  imageBadge: {
    width: screen.width/4,
    height: screen.width/4,
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
