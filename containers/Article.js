import React from 'react'
import api from '../lib/api'
import Page from '../pages/default/component'

class Container extends React.Component {
  static async getInitialProps ({ pathname, asPath }) {
    let path = asPath ? asPath : pathname

    // get rid of the /blog part of the url so we have just the post's slug
    path = path.replace('/blog', '')

    if (path.indexOf('?') !== -1) {
      path = path.substring(0, path.indexOf('?'))
    }

    const [ page, headerMenu, footerMenu ] = await Promise.all([
      api.site.getArticle(path),
      api.site.getHeaderMenu(),
      api.site.getFooterMenu()
    ])

    return {
      page,
      headerMenu,
      footerMenu,
    }
  }

  render() { return <Page {...this.props} /> }
}

export default Container
