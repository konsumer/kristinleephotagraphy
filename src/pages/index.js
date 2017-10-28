import React from 'react'
import Link from 'gatsby-link'
import graphql from 'graphql'

const style = {
  gallery: {
    border: '1px solid #eaecee',
    padding: '2em 4em',
    backgroundSizing: 'cover'
  }
}

export default function Index ({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <section className='section'>
      <div className='container'>
        {posts.filter(post => post.node.frontmatter.templateKey === 'gallery').map(({ node: post }) => {
          return (
            <div className='content' style={{...style.gallery, backgroundImage: `url(/images/${post.frontmatter.image})`}} key={post.id}>
              <p>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </p>
              <p>
                {post.excerpt}
              </p>
            </div>
          )
        })}
      </div>
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
