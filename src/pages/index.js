import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import { thumbStyle } from '../utils'

import './index.css'

class GalleryIndex extends React.Component {
  render () {
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMarkdownRemark.edges
    console.log(this.props)

    return (
      <div className='page GalleryIndex'>
        <Helmet title={siteTitle} />
        {posts.filter(post => post.node.path !== '/404/').map(post => {
          const title = post.node.frontmatter.title || post.node.path
          return (
            <Link to={post.node.frontmatter.path + '/'} key={post.node.frontmatter.path} className='gallery' style={thumbStyle('/' + post.node.frontmatter.image.relativePath)}>
              <h3>{title}</h3>
            </Link>
          )
        })}
      </div>
    )
  }
}

GalleryIndex.propTypes = {
  route: React.PropTypes.object
}

export default GalleryIndex

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
