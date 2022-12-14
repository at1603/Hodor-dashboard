import * as React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
    return (
        <>
            <Header siteTitle="Hodor" />
            <div
                style={{
                margin: `0 auto`,
                maxWidth: 1160,
                minWidth: 200,
                padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <div>{children}</div>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout


