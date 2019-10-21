import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import List from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GpsNotFixedIcon from '@material-ui/icons/GpsNotFixed';

const Pages = ['Dashboard', 'Stock'];

export default function PagesList() {
  return (
    <List>
      {Pages.map((text, index) => (
        <ListItem
          button
          key={index}
          onClick={() => console.log('List item: ', text)}
        >
          {/** ICONS */}
          {text === 'Dashboard' ? (
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
          ) : (
            ''
          )}
          {text === 'Stock' ? (
            <ListItemIcon>
              <GpsNotFixedIcon />
            </ListItemIcon>
          ) : (
            ''
          )}

          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
}
