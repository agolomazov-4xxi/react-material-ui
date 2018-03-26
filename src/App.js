import React, {PureComponent} from 'react';
import AppHeader from './components/header';
import AppDrawer from './components/drawer';

class App extends PureComponent {
  state = {
    drawerOpened: false
  }

  render() {
    return (
      <div>
        <AppHeader
          onOpenDrawer={() => this.setState({ drawerOpened: true })}
        />
        <AppDrawer
          isOpened={this.state.drawerOpened}
          onCloseHandler={() => { this.setState({ drawerOpened: false }) }}
        />
      </div>
    );
  }
}

export default App;
