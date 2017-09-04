import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SnapComponent from '../SnapComponent';

const API_BASE_URL = 'https://y86lpymaph.execute-api.us-east-2.amazonaws.com/prd/';

export default class SnapScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      SnapsData: []
    };
  }
  login() {
    this.props.auth.login();
  }

  checkAuth()
  {

  }

  componentDidMount() {
    let userIdToken_temp = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik56aENRa1F6UkRBeE1Ea3hSRVZHTTBFNU9UUTRSRE5EUmpjeU1qTkNSall4TmtFNVEwVTJOUSJ9.eyJpc3MiOiJodHRwczovL2ZpZHVjaWFtLmF1dGgwLmNvbS8iLCJzdWIiOiJmYWNlYm9va3wxMTQwNTYzMTkyNjExMjMiLCJhdWQiOiJ3SUxvN04td1hRdlg4cFpKMlpjdW80cWduQVdZcUx5SiIsImV4cCI6MTAwNTA0NTI1NTYzLCJpYXQiOjE1MDQ1MjU1NjMsIm5vbmNlIjoiUTlKS2pnRnYycHJ1amItZE1iRWJHVVN3eH43OTZ4RFgiLCJhdF9oYXNoIjoieGlJOV9NT3d3YnBrcWpKLThJNnNnQSJ9.YR-Arx_0FXa-pdtuklOOOoS_IMEAY3Uwrrg_-89BpDVMvBLi_UEorqQ01GoLgZBGd6JOFRFTBtzuvaGWeCQ9yKno-P25i3FAOorpf0Zzfe5IrCszeRVcp1pvSEl1whLmcLmLhxrzEm5M64RfSHjUcUxWM2seaRIfloQtp1VtjAIjC7oNjhzLsTvaBCsEOzTqjaszwzO4BLJfwY7WAtw7cn4MUZ_fVZTouPgRmFXlV2ICv_v6pkZGq75nvYEGjh0k9i0WHtjaPabTcwzIuf9zn816H0rmatbPJGJLNaydAzg3rfCLecmGOZDAsw9I_v5JUa07FNseF5AYCjajqNdJoA';
    fetch(API_BASE_URL+'snaps', {
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
        //JSON.parse(responseData.body)
        this.setState({ SnapsData: JSON.parse(responseData.body) }); 
      })
      // .catch(err => (err){ console.log(err); });
      ;
  }

  render() {

    return (
        <SnapComponent  snaps={ this.state.SnapsData } />
    );
  }
}
