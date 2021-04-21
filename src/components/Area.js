import './Area.css';
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default class Area extends React.Component {
  render() {
    return (
      <div className="Area">
        <LinearProgress variant="determinate" value={50} />
        <LinearProgress variant="determinate" value={25} />
        <LinearProgress variant="determinate" value={75} />
      </div>
    );
  }
}
