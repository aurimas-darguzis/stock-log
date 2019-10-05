import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  componentContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolBar: {
    justifyContent: 'space-between',
  },
  toolbar: theme.mixins.toolbar,
}));

export default function AppDrawer({ top, left, content }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar>
        <Toolbar className={classes.toolBar}>
          <Typography>Title</Typography>
          {top &&
            top.map((component, index) => <div key={index}>{component}</div>)}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <div className={classes.toolbar} />
        {left &&
          left.map((component, index) => (
            <div className={classes.componentContainer} key={index}>
              {component}
            </div>
          ))}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {content.map((component, index) => (
          <div className={classes.componentContainer} key={index}>
            {component}
          </div>
        ))}
      </main>
    </div>
  );
}
