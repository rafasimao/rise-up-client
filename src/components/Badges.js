import './Badges.css';
import React from 'react';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

export default class Badges extends React.Component {
  render() {
    return (
      <div className="Badges">
        <AccessAlarmIcon />
        <ThreeDRotation />
      </div>
    );
  }
}
