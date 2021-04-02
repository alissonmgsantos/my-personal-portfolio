import React from 'react'
import { Sidenav } from './components'

const Layout = ({ children }) => {
    return (
        <div>
            <Sidenav />

            <main>{children}</main>
        </div>
    )
}

export default Layout
