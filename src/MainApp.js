import React, { Component } from 'react';

export default class MainApp extends Component {
  constructor(props) {
    super(props);

    this.DOM =
      {
        G:     // generator functions
          {
            contactButton: (p) => {
              return (
                <button
                  onClick={() => {
                    location.href = p.url
                  }}>
                  <i className={p.className}/>
                </button>
              );
            }
          }
      };
  }

  render() {
    return (
      <div className="appWrapper">
        <div className="mainContent">

          <div>- insert body content here -</div>
        </div>
        <div className="appFooter">
          {this.DOM.G.contactButton(
            {
              className: 'mdi mdi-github-box',
              url: 'http://somewhere'
            })}
          {this.DOM.G.contactButton(
            {
              className: 'rc3 rc3-npm-box',
              url: 'http://somewhere'
            })}
          {this.DOM.G.contactButton(
            {
              className: 'mdi mdi-code-tags',
              url: 'http://somewhere'
            })}
        </div>
      </div>
    );
  }
}