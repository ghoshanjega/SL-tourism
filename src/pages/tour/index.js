import React from "react";

import Layout from "../../components/Layout";
import TourRoll from "../../components/TourRoll";

export default class TourIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div class="container">
        <div class="tabs is-toggle is-toggle-rounded is-centered">
          <ul>
            <li class="is-active">
              <a>
                <span class="icon is-small">
                  <i class="fas fa-image"></i>
                </span>
                <span>All</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small">
                  <i class="fas fa-music"></i>
                </span>
                <span>Down South</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small">
                  <i class="fas fa-film"></i>
                </span>
                <span>Hill Country</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small">
                  <i class="fas fa-file-alt"></i>
                </span>
                <span>Western</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small">
                  <i class="fas fa-file-alt"></i>
                </span>
                <span>Land Beyond</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="columns is-centered is-4">
          <div class="column has-text-centered no-scroll">
            <div class="box has-half-page-height has-cursor-grab">
              <h1 class="title">Map Placeholder</h1>
            </div>
          </div>
            <TourRoll />
          
        </div>
        </div>
      </Layout>
    );
  }
}
