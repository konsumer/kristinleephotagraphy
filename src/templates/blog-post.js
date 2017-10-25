import React from 'react'
import Helmet from 'react-helmet'

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  return (
    <section className='section'>
      <Helmet title={`Blog | ${post.frontmatter.title}`} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </section>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
