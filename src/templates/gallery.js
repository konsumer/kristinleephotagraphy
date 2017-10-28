import React from 'react'
import Helmet from 'react-helmet'
import graphql from 'graphql'

const style = {
  image: {
    backgroundSizing: 'cover'
  }
}

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  const images = data.allMarkdownRemark.edges.map(p => p.node)
  return (
    <section className='section'>
      <Helmet title={`Gallery | ${post.frontmatter.title}`} />
      <div className='container content'>
        <h1 className='title is-size-2 has-text-info is-bold-light'>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div className='container content'>
        {images.map(image => (
          <div key={image.frontmatter.image} style={{...style.image, backgroundImage: `url(/images/${image.frontmatter.image})`}}>
            <h2>{image.title}</h2>
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
