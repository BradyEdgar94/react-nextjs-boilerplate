import React from 'react'
import { withRouter } from 'next/router'
import api from '../lib/api'
import Page from '../pages/preview/component'

class Container extends React.Component {
  static async getInitialProps () {
    const [ headerMenu, footerMenu ] = await Promise.all([
      api.site.getHeaderMenu(),
      api.site.getFooterMenu()
    ])

    return {
      headerMenu,
      footerMenu,
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      page: undefined,
      error: false,
    }
  }

  componentDidMount () {
    const { id, wpnonce } = this.props.router.query

    api.site.getPreviewData(id, wpnonce)
    .then(res => {
      if (res.code || res.code === 'rest_cookie_invalid_nonce') {
        this.setState({ error: res })
      } else {
        this.setState({ page: res, error: false })
      }
    })
  }

  render() {
    const { page, error } = this.state

    if (!page && !error) {
      return <span />
    }

    return (
      <Page
        {...this.props}
        page={page}
        error={error}
        layout={page && page.acf ? page.acf.layout : []}
      />
    )
  }
}

export default withRouter(Container)
