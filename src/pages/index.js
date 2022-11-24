import * as React from "react"
import { Script } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import '../components/styles.scss'

const IndexPage = () => {
  return(
    <>
      <Layout>
          <h1>Dashboard</h1>
          <div className="toolbar">
              <div className="filters">
                <div className="sampleBox button" style={{height: 54, width:220}}></div>
                <div className="sampleBox button" style={{height: 54, width:220}}></div>
              </div>
              <div className="sampleBox button cta" style={{height: 43, width:145}}></div>
          </div>
          <div className="ds-row">
            <div className="col-md-6">
              <div className="ds-card">
                <div className="card-title">
                  <h3 className="text heading-3">Organizations</h3>
                  <span className="text overline">01 Dec 2022 - 12 Dec 2022</span>
                </div>
                <div className="card-content">
                  <div id="ds-org-chart"></div>
                </div>
                <div className="card-footer full-width">
                  <a href="https://sample.com">Report Details</a>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="ds-card">
                <div className="card-title">
                  <h3 className="text heading-3">Accounts</h3>
                  <span className="text overline">01 Dec 2022 - 12 Dec 2022</span>
                </div>
                <div className="card-content">
                  <div id="ds-account-chart"></div>
                </div>
                <div className="card-footer full-width">
                  <a href="https://sample.com">Report Details</a>
                </div>
              </div>
            </div> */}
          </div>
      </Layout>
      <Script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"/>
      <Script src="https://d3js.org/d3.v5.js" charset="utf-8"/>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.7.20/c3.min.js" integrity="sha512-+IpCthlNahOuERYUSnKFjzjdKXIbJ/7Dd6xvUp+7bEw0Jp2dg6tluyxLs+zq9BMzZgrLv8886T4cBSqnKiVgUw==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
      <Script src={'/c3script.js'}/>
    </>
  )

}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => {
  return(
    <>
      <Seo title="Home"/>
    </>
  )
}

export default IndexPage
