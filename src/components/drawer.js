import React from 'react';
import Drawer from 'material-ui/Drawer';
import {MenuItem, MenuList} from 'material-ui/Menu';
import { Home, Contacts, AccessAlarm } from 'material-ui-icons';

const AppDrawer = (props) => {
  return (
    <Drawer
      open={props.isOpened}
      onClose={props.onCloseHandler}
      style={{
        background: 'rgba(65, 11, 213, 0.21)'
      }}
    >
      <MenuList
        role="menu"
        style={{
          width: 240
        }}
      >
        <MenuItem>
          <Home style={{
            marginRight: 10
          }} />
          Главная
        </MenuItem>
        <MenuItem >
          <Contacts style={{
            marginRight: 10
          }} />
          Контакты
        </MenuItem>
        <MenuItem >
          <AccessAlarm style={{
            marginRight: 10
          }} />
          Портфолио
        </MenuItem>
      </MenuList>
    </Drawer>
  );
};

export default AppDrawer;
