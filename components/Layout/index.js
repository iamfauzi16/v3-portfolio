
import Header from '@components/Header'
import PropTypes from 'prop-types'
import React from 'react'

const Layout = ({children}) => {
  return( 
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Layout