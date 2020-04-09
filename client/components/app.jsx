import React from 'react';
import Header from './header';
import Picker from './picker';
import Filters from './filters';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="main d-flex flex-column">
        <div className="container justify-content-center ">
          <div className="col-6 offset-3 text-center">
            <Header></Header>
            <Filters></Filters>
            <hr/>
            <Picker></Picker>
            <hr/>
            <footer>
              <p>Resturants provided by</p>
              <img src="../../server/public/images/yelp.png" />
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
