import React from 'react'
import Router from 'next/router'
import propTypes from 'prop-types'
import NProgress from 'nprogress'
import Head from '../Head'
import Header from '../../organisms/Header'
import Footer from '../Footer'
import Template from '../../../templates'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Layout = ({ children, headerMenu, footerMenu, page, layout, seo }) =>
  <>
    <Head seo={seo} />
    <Header menu={headerMenu} />
    <Template page={page} layout={layout} data-test="template">
      { children }
    </Template>
    <Footer menu={footerMenu} />
  </>

Layout.propTypes = {
  page: propTypes.object.isRequired,
  headerMenu: propTypes.array,
  footerMenu: propTypes.array
}

export default Layout
