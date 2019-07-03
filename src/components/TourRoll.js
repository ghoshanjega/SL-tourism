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
              <div className="box">
                <article
                  className={`media ${
                    post.frontmatter.featuredpost ? "is-featured" : ""
                  }`}
                >
                  <div className="media-left" style={{ backgroundColor: "yellow" }}>
                    {post.frontmatter.featuredimage ? (
                      <figure className="image is-128x128">
                        <img
                          src={`${post.frontmatter.featuredimage}`}
                          alt={`${post.frontmatter.title}`}
                        />
                      </figure>
                    ) : (
                      <figure className="image is-128x128">
                        <img
                          src="https://bulma.io/images/placeholders/128x128.png"
                          alt="Image"
                        />
                      </figure>
                    )}
                  </div>
                  <div className="media-content">
                    {/* <div className="content"> */}
                      <h2 className="title is-3">{post.frontmatter.title}</h2>
                      <p className="rating has-text-warning has-margin-bottom-10">
                        <i className="fas fa-star" /> {post.frontmatter.rating}
                      </p>
                      <div className="tags ">
                        {post.frontmatter.tags.map(tag => (
                          <span key={tag + `tag`} className="tag is-success">
                            <Link to={`/tags/${kebabCase(tag)}/`}>
                              <p className="has-text-white">{tag}</p>
                            </Link>
                          </span>
                        ))}
                      </div>
                    {/* </div> */}
                  </div>
                  <div className="media-right">
                    <p>USD{post.frontmatter.latestprice}</p>
                    <p className="strike-through">USD20</p>
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
          filter: { frontmatter: { templateKey: { eq: "tour-post" } } }
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
