import React from 'react'
import Head from 'next/head'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import { SEO } from '../../../app.config.json'

class DocumentHead extends React.Component {
  constructor () {
    super()

    this.state = {
      stylesheet: publicRuntimeConfig.ENV !== 'production' && require('../../../styles/main.scss').default
    }
  }

  render () {
    const { seo = {} } = this.props
    const { stylesheet } = this.state

    return (
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />

        {/* Bootstrap theme cdns */}
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet" />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" rel="stylesheet" />
        {/* End of bootstrap theme cdns */}

        {/* SEO */}
        <title>{ seo.title ? seo.title : SEO.title }</title>
        <meta name="description" content={ seo['opengraph-description'] ? seo['opengraph-description'] : SEO.description } />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={ seo['opengraph-title'] ? seo['opengraph-title'] : SEO.title } />
        <meta property="twitter:description" content={seo['opengraph-description'] ? seo['opengraph-description'] : SEO.description} />
        <meta property="twitter:image" content={seo['opengraph-image'] ? seo['opengraph-image'] : SEO.image} />

        <meta property="og:title" content={ seo['opengraph-title'] ? seo['opengraph-title'] : SEO.title } />
        <meta property="og:url" content={this.props.url} />
        <meta property="og:description" content={seo['opengraph-description'] ? seo['opengraph-description'] : SEO.description} />
        <meta property="og:image" content={seo['opengraph-image'] ? seo['opengraph-image'] : SEO.image} />
        {/* End of SEO */}

        {
          stylesheet
          ? <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          : <link rel="stylesheet" href="/css/main.css" />
        }
      </Head>
    )
  }
}

export default DocumentHead









 // seo.map(metaItem => <meta name={metaItem[Object.keys(metaItem)[0]]} content={metaItem[Object.keys(metaItem)[1]]} />) }
