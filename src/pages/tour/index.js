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
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small">
                  <i class="fas fa-music"></i>
                </span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small">
                  <i class="fas fa-film"></i>
                </span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small">
                  <i class="fas fa-file-alt"></i>
                </span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="columns is-centered is-4">
          <div class="column has-text-centered no-scroll">
            <div class="box">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img
                      src="https://bulma.io/images/placeholders/128x128.png"
                      alt="Image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                      <small>31m</small>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean efficitur sit amet massa fringilla egestas. Nullam
                      condimentum luctus turpis.
                    </p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item" aria-label="reply">
                        <span class="icon is-small">
                          <i class="fas fa-reply" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a class="level-item" aria-label="retweet">
                        <span class="icon is-small">
                          <i class="fas fa-retweet" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a class="level-item" aria-label="like">
                        <span class="icon is-small">
                          <i class="fas fa-heart" aria-hidden="true"></i>
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
          <div class="column has-text-centered ">
            <div class="box has-half-page-height"></div>
            <TourRoll />
          </div>
        </div>
        </div>
      </Layout>
    );
  }
}
