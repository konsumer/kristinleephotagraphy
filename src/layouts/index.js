import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import './index.scss'

const TemplateWrapper = ({ children, data}) => (
  <div>
    <Helmet title='Kristin Lee Photography' />
    <header>
      <nav>
        <div />
        <Link to='/' className='navbar-item'>
          {data.site.siteMetadata.title}
        </Link>
        <Link className='navbar-item' to='/about'>
          About
        </Link>
      </nav>
    </header>
    <main>{children()}</main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
