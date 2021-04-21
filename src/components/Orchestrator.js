import React from 'react';
import Topbar from './Topbar.js';
import Sidebar from './Sidebar.js';
import Area from './Area.js';
import Badges from './Badges.js';

export default class Orchestrator extends React.Component {
  render() {
    return (
      <div>
        <Topbar />
        <div>
          <Sidebar />
          <Area />
          <Badges />
        </div>
      </div>
    );
  }
}
