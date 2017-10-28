import React from 'react'
import Helmet from 'react-helmet'
import graphql from 'graphql'

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  const images = data.allMarkdownRemark.edges.map(p => p.node)
  return (
    <section>
      <Helmet title={`Gallery | ${post.frontmatter.title}`} />
      <div className='galleryheader'>
        <h3>{post.frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div className='ingallery'>
        {images.map(image => (
          <div className='gallery' key={image.frontmatter.image} style={{backgroundImage: `url(/images/${image.frontmatter.image})`}}>
            <div />
            { image.frontmatter.title && image.frontmatter.title !== 'Untitled' && <h4>{image.frontmatter.title}</h4> }
            <div dangerouslySetInnerHTML={{ __html: image.html }} />
          </div>
        ))}
      </div>
    </section>
  )
}

export const pageQuery = graphql`
query GalleryByPath($path: String!) {
  markdownRemark(frontmatter: {path: {eq: $path}}) {
    html
    frontmatter {
      path
      title
      image
    }
  }
  allMarkdownRemark(filter: {frontmatter:{gallery:{eq:$path}}}, sort: { order: ASC, fields: [frontmatter___order] }) {
    edges {
      node {
        html
        frontmatter{
          path
          title
          image
        }
      }
    }
  }
}

`
