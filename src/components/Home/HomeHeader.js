import React, { Component } from 'react';
import HeaderNav from '../global/HeaderNav';
import * as arrow from '../../assets/img/headers/down-arrow.svg';
import * as Header from '../../assets/img/headers/header.png';

var HeaderStyle = {
  backgroundImage: `url(${Header})`
};

class HomeHeader extends Component {

  render() {
    return (
      <header className="large-header push" style={HeaderStyle}>
      <HeaderNav />
          <div className="header-container">
              <div className="content">
                  <h1>I love carpet. I love desk.</h1>
                  <a className="btn" href="/">I love lamp</a>
              </div>
          </div>
          <div className="down-arrow"><span className="hide-content"></span><object data={arrow} type="image/svg+xml" aria-hidden="true" aria-label="down-arrow"></object></div>
      </header>
    )
  }
};

export default HomeHeader;