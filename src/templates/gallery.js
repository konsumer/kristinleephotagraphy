import React from 'react'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import { thumbStyle } from '../utils'

class GalleryTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    const html = post.html
    console.log(html)

    return (
      <div className='Gallery page'>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <div className='gallery' key={post.frontmatter.path} style={thumbStyle('/' + post.frontmatter.image.relativePath)}>
          <h3>{post.frontmatter.title}</h3>
          <h4>{post.frontmatter.description}</h4>
        </div>
        <div className='content' dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  }
}

export default GalleryTemplate

export const pageQuery = graphql`
  query GalleryByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        description
        path
        image {
          relativePath
        }
      }
    }
  }
`
