import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Gallery from '../components/Gallery' 
// import logo from '../img/logo.png'
// import Img from "gatsby-image"

export const TourTemplate = ({
  content,
  contentComponent,
  body,
  tags,
  title,
  helmet,
  galleryitems
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{body}</p>
            <Gallery items={galleryitems}/>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <button className="button"><Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link></button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

TourTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  body: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  gallery: PropTypes.object
}

const Tour = ({ data }) => {
  const { markdownRemark: post } = data
    // const image = post.frontmatter.gallery[0].childImageSharp
    // console.log(post.frontmatter.gallery[0])
    // console.log(!!image.childImageSharp ? "Yes" : "No")
  return (
    <Layout>
      <TourTemplate
        content={post.html}
        contentComponent={HTMLContent}
        body={post.excerpt}
        helmet={
          <Helmet titleTemplate="%s | Tour">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        galleryitems={post.frontmatter.gallery}
      />
      {/* <Gallery items={post.frontmatter.gallery}/> */}
      
    </Layout>
  )
}

Tour.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Tour

export const pageQuery = graphql`
  query TourByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredpost
          featuredimage {
            absolutePath
          }
          blurbs {
            image{
              absolutePath
            }
            text
          }
        gallery{
          childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        placeid
        rating
        phonenumbers
        description
        tags
        coordinates {
            latitude
            longitude
            visitingplacename
          }
        days
      }
      excerpt
    }
  }
`
