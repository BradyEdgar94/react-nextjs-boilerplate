import React from 'react'
import api from '../lib/api'
import Home from '../pages/default/component'

class Container extends React.Component {
  static async getInitialProps () {
    const [ page, headerMenu, footerMenu ] = await Promise.all([
      api.site.getPageData('home'),
      api.site.getHeaderMenu(),
      api.site.getFooterMenu()
    ])

    return {
      page,
      headerMenu,
      footerMenu,
      seo: page.yoast_meta,
      layout: page.acf ? page.acf.layout : [],
    }
  }

  render() { return <Home {...this.props} /> }
}

export default Container
