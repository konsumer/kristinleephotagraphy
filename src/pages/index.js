import React from 'react'
import Link from 'gatsby-link'

export default function Index ({ data }) {
  const posts = data.allMarkdownRemark.edges
    .filter(post => post.node.frontmatter.templateKey === 'gallery')
    .map(node => node.post)
  return (
    <section>
      { posts.map(post => (
        <article key={post.id}>
          <header>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link> &bull; <small>{post.frontmatter.date}</small>
          </header>
          <main>
            {post.excerpt}
          </main>
          <footer>
            <Link className='button is-info is-small' to={post.frontmatter.path}>
              Keep Reading
            </Link>
          </footer>
        </article>
      )) }
    </section>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
