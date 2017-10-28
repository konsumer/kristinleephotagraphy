import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title='Kristin Lee Photography' />
    <header>
      <nav>
        <div />
        <Link to='/' className='navbar-item'>
          Kristin Lee Photography
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

export default TemplateWrapper
