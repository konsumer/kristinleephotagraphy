import React from 'react'

export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <section>
      <header>
        <h2>{post.frontmatter.title}</h2>
      </header>
      <main dangerouslySetInnerHTML={{ __html: post.html }} />
    </section>
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
