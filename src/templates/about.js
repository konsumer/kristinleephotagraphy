import React from 'react'
import graphql from 'graphql'

export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <div className='about'>
      <h2 className='title is-size-3 has-text-primary is-bold-light'>{post.frontmatter.title}</h2>
      <div className='content' dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
