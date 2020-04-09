import React from 'react';
import Header from './header';
import Picker from './picker';
import Filters from './filters';
// import yelp from '../../server/public/images/yelp.png';
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
              <p className="d-inline">Resturants provided by</p>
              {/* <img className="d-inline" src={yelp} alt="yelp logo" /> */}
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
