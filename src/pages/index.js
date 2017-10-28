import React from 'react'
import Link from 'gatsby-link'
import graphql from 'graphql'

export default function Index ({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <section className='gallerypage'>
      {posts.filter(post => post.node.frontmatter.templateKey === 'gallery').map(({ node: post }) => {
        return (
          <Link to={post.frontmatter.path} className='gallery' style={{backgroundImage: `url(/images/${post.frontmatter.image})`}} key={post.id}>
            <h2>{post.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </Link>
        )
      })}
    </section>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            path
            image
          }
        }
      }
    }
  }
`
