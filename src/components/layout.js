/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import Header from "./header"
import Sidebar from "./sidebar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <section className="wrapper">
        <Sidebar/>
        <main className="main-webapp">
          {children}
        </main>
      </section>
    </>
  )
}

export default Layout
