import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import graphql from 'graphql'

class BlogIndex extends React.Component {
  render () {
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMarkdownRemark.edges
    console.log(this.props)

    return (
      <div>
        <Helmet title={siteTitle} />
        {posts.map(post => {
          if (post.node.path !== '/404/') {
            const title = post.node.frontmatter.title || post.node.path
            return (
              <div key={post.node.frontmatter.path}>
                <img src={post.node.frontmatter.image.relativePath} />
                <h3>
                  <Link to={post.node.frontmatter.path} >
                    {title}
                  </Link>
                </h3>
              </div>
            )
          }
        })}
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___order], order: ASC}) {
      edges {
        node {
          frontmatter {
            path
            order
            title
            image {
              relativePath
            }
          }
        }
      }
    }
  }
`
