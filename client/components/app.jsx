import React from 'react';
import Header from './header';
import Picker from './picker';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <div className="col-6 offset-3 text-center align-center">
          <Header></Header>
          <hr/>
          <Picker></Picker>
          <hr/>
        </div>
      </div>
    );
  }
}
