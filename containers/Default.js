import React from 'react'
import api from '../lib/api'
import Page from '../pages/default/component'

class Container extends React.Component {
  static async getInitialProps ({ pathname, asPath }) {
    let path = asPath ? asPath : pathname

    if (path.indexOf('?') !== -1) {
      path = path.substring(0, path.indexOf('?'))
    }

    const [ page, headerMenu, footerMenu ] = await Promise.all([
      api.site.getPageData(path),
      api.site.getHeaderMenu(),
      api.site.getFooterMenu()
    ])

    if (path === '/blog') {
      const articles = await api.site.getArticles()
      page.articles = articles
    }

    return {
      page,
      headerMenu,
      footerMenu,
      seo: page.yoast_meta,
      layout: page.acf ? page.acf.layout : [],
    }
  }

  render() { return <Page {...this.props} /> }
}

export default Container
