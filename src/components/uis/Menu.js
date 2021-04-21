import './Menu.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({open: !state.open}));
  };

  render() {
    return (
      <Drawer
        variant="persistent"
        anchor="left"
        open="true"
      >
        <List>
          <ListItem button onClick={this.handleClick}>
            <ListItemText primary="Areas of Interest" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button>
            <ListItemText primary="Projects" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}
