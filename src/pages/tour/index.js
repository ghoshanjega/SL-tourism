import React from "react";

import Layout from "../../components/Layout";
import TourRoll from "../../components/TourRoll";

export default class TourIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
        <div className="tabs is-toggle is-toggle-rounded is-centered">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <i className="fas fa-image"></i>
                </span>
                <span>All</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-music"></i>
                </span>
                <span>Down South</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-film"></i>
                </span>
                <span>Hill Country</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-file-alt"></i>
                </span>
                <span>Western</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-file-alt"></i>
                </span>
                <span>Land Beyond</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="columns is-centered is-4">
          <div className="column has-text-centered no-scroll">
            <div className="box has-half-page-height has-cursor-grab">
              <h1 className="title">Map Placeholder</h1>
            </div>
          </div>
            <TourRoll />
          
        </div>
        </div>
      </Layout>
    );
  }
}
