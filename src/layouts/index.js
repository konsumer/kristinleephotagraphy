import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import pkg from '../../package.json'

const Navbar = () => (
  <nav className='navbar is-light'>
    <div className='container'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          {pkg.description}
        </Link>
      </div>
      <div className='navbar-start'>
        <Link className='navbar-item' to='/about'>
          About
        </Link>
      </div>
    </div>
  </nav>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title='Home | Kristin Lee Photography' />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
