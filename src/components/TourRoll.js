import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { kebabCase } from "lodash";

class TourRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="column has-text-centered is-mobile">
        {posts &&
          posts.map(({ node: post }) => (
            <Link
              className="title has-text-primary is-size-4"
              to={post.fields.slug}
            >
              <div class="box">
                <article
                  className={`media ${
                    post.frontmatter.featuredpost ? "is-featured" : ""
                  }`}
                >
                  <div class="media-left" style={{ backgroundColor: "yellow" }}>
                    {post.frontmatter.featuredimage ? (
                      <figure class="image is-64x64">
                        <img
                          src={`${post.frontmatter.featuredimage}`}
                          alt={`${post.frontmatter.title}`}
                        />
                      </figure>
                    ) : (
                      <figure class="image is-64x64">
                        <img
                          src="https://bulma.io/images/placeholders/128x128.png"
                          alt="Image"
                        />
                      </figure>
                    )}
                  </div>
                  <div class="media-content">
                    {/* <div class="content"> */}
                      <h2 class="title is-3">{post.frontmatter.title}</h2>
                      <p class="rating has-text-warning has-margin-bottom-10">
                        <i class="fas fa-star" /> {post.frontmatter.rating}
                      </p>
                      <div className="tags ">
                        {post.frontmatter.tags.map(tag => (
                          <span key={tag + `tag`} class="tag is-success">
                            <Link to={`/tags/${kebabCase(tag)}/`}>
                              <p class="has-text-white">{tag}</p>
                            </Link>
                          </span>
                        ))}
                      </div>
                    {/* </div> */}
                  </div>
                  <div class="media-right">
                    <p>USD{post.frontmatter.latestprice}</p>
                    <p class="strike-through">USD20</p>
                  </div>
                </article>
              </div>
            </Link>
          ))}
      </div>
    );
  }
}

TourRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query TourRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "tour" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                latestprice
                coordinates {
                  latitude
                  longitude
                  visitingplacename
                }
                rating
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <TourRoll data={data} count={count} />}
  />
);
