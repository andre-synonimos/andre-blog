/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents ([
    <link
      key="local-font"
      rel="stylesheet"
      href="/fonts/hannari.otf"
    />
  ])
}
