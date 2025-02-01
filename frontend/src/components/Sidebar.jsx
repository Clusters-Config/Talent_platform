import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function SwipeableTemporaryDrawer({ open, toggleDrawer, jobDetails }) {
  const list = () => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <ListItemText primary={`Title: ${jobDetails.title}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Position: ${jobDetails.position}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Organization: ${jobDetails.name}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Content: ${jobDetails.content}`} />
        </ListItem>
      </List>
      <Divider />
      <List>
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor='right'
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {list()}
    </SwipeableDrawer>
  );
}