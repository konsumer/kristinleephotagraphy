import React from 'react'
import Link from 'gatsby-link'

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    const siteTitle = 'Kristin Lee Photography' // this.props.site.siteMetadata.title
    let header
    if (location.pathname === '/') {
      header = (
        <h1>
          <Link to={'/'} >
            {siteTitle}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={'/'}>
            {siteTitle}
          </Link>
        </h3>
      )
    }
    return (
      <div>
        {header}
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object
}

export default Template
